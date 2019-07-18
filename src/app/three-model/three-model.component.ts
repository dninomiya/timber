import { Component, OnInit } from '@angular/core';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

@Component({
  selector: 'app-three-model',
  templateUrl: './three-model.component.html',
  styleUrls: ['./three-model.component.scss']
})
export class ThreeModelComponent implements OnInit {

  name = 'Angular 6';
  y = 1;
  lightX = 0;
  red = 0.7;
  canvas: any;
  engine: any;
  world: any;
  sphere: any;
  obj: any;

  constructor() { }

  ngOnInit() {
    this.canvas = document.getElementById('renderCanvas');
    this.engine = new BABYLON.Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true });

    const createScene = function() {
      const scene = new BABYLON.Scene(this.engine);
      scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
      const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 1.5, 3), scene);
      camera.attachControl(this.canvas, false);
      const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(this.lightX, 0, 0), scene);
      light.specular = new BABYLON.Color3(0, 0, 0);
      this.sphere = BABYLON.Mesh.CreateSphere('sphere1', 10, 2, scene, false, BABYLON.Mesh.FRONTSIDE);
      this.sphere.position.y = 1;
      camera.setTarget(this.sphere.position);

      const myMaterial = new BABYLON.StandardMaterial('blue', scene);
      myMaterial.diffuseColor = new BABYLON.Color3(56 / 255, 131 / 255, 151 / 255);
      myMaterial.wireframe = true;
      this.sphere.material = myMaterial;
      this.sphere.position.y = this.y;
      const frameRate = 20;
      const yRot = new BABYLON.Animation(
        'yRot',
        'rotation.y',
        frameRate,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
      );

      const keyFramesR = [];

      keyFramesR.push({
        frame: 0,
        value: 0
      });

      keyFramesR.push({
        frame: 10 * frameRate,
        value: 2 * Math.PI
      });

      yRot.setKeys(keyFramesR);

      BABYLON.SceneLoader.ImportMesh('', './assets/', 'deer.obj', scene, (s) => {
        this.obj = s[0];
        this.obj.material = myMaterial;
        const size = 0.001;
        this.obj.scaling = new BABYLON.Vector3(size, size, size);
        scene.beginDirectAnimation(this.obj, [yRot], 0, 10 * frameRate, true);
      });

      return scene;
    }.bind(this);

    const newScene = createScene();
    this.world = newScene;

    this.engine.runRenderLoop(() => {
      newScene.render();
    });

    window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }
}
