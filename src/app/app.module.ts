import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { SafePipeModule } from 'safe-pipe';
import { SpeechModule } from 'ngx-speech';
import { TimelineComponent } from './timeline/timeline.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { ThreeModelComponent } from './three-model/three-model.component';
import { ToolsComponent } from './tools/tools.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ChartsModule } from 'ng2-charts';
import { SkillChartComponent } from './skill-chart/skill-chart.component';
import { CommandComponent } from './command/command.component';
import { ConsoleComponent } from './console/console.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    YoutubeComponent,
    TimelineComponent,
    ThreeModelComponent,
    ToolsComponent,
    SkillChartComponent,
    CommandComponent,
    ConsoleComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    SafePipeModule,
    SpeechModule,
    NgxTwitterTimelineModule,
    HttpClientModule,
    ChartsModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [
    { provide: 'SPEECH_LANG', useValue: 'ja-JP' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
