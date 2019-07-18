import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  constructor() { }

  player: YT.Player;
  id = 'P5k-4-OEuTk';
  playerVars = {
    controls: 0,
    rel: 0,
    showinfo: 0,
    loop: 1
  };

  ngOnInit() {
  }

  savePlayer(player: YT.Player) {
    this.player = player;
    player.mute();
    player.playVideo();
  }
  onStateChange(event) {
  }

}
