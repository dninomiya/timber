import { Component } from '@angular/core';
import { ConsoleService } from './services/console.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  uiStatus: {
    [key: string]: boolean
  } = {
      time: false,
      youtube: false,
      timeline: false,
      skill: false,
      console: true,
      three: true,
      profile: false,
    };
  zoom: string;

  constructor(
    private consoleService: ConsoleService
  ) {
    this.consoleService.addLog('loading...');
    setTimeout(() => {
      this.toggleAll(true);
      this.consoleService.addLog('welcome');
    }, 3000);
  }

  actionWithVoice(msg: string) {
    this.consoleService.addLog(`voice input detected: ${msg}`);
    if (msg === 'クリア') {
      this.toggleAll(false);
    }
    if (msg.match(/(ドゥ|ズ)ーム/)) {
      this.toggleZoom();
    }
    if (msg === 'コンソール') {
      this.toggleUI('console');
    }
    if (msg === 'リセット') {
      this.toggleAll(true);
    }
    if (msg === '時間') {
      this.toggleUI('time');
    }
    if (msg === 'youtube') {
      this.toggleUI('youtube');
    }
    if (msg === 'タイムライン') {
      this.toggleUI('timeline');
    }
    if (msg === 'スキル') {
      this.toggleUI('skill');
    }
    if (msg === 'プロフィール') {
      this.toggleUI('profile');
    }
  }

  actionWithCommand(cmd: string) {
    this.consoleService.addLog(`input detected: ${cmd}`);
    if (cmd === 'reset') {
      this.toggleAll(true);
    } else if (cmd === 'clear') {
      this.toggleAll(false);
    } else if (cmd === 'zoom') {
      this.toggleZoom();
    } else if (cmd in this.uiStatus) {
      this.toggleUI(cmd);
    } else {
      this.consoleService.addLog('command XX does not exist');
    }
  }

  toggleZoom() {
    this.zoom = this.zoom ? null : 'youtube';
  }

  toggleUI(target: string) {
    this.uiStatus[target] = !this.uiStatus[target];
  }

  toggleAll(status: boolean) {
    for (const key in this.uiStatus) {
      if (key) {
        this.uiStatus[key] = status;
      }
    }
  }
}
