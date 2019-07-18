import { Component, OnInit } from '@angular/core';
import { ConsoleService, Log } from '../services/console.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {
  logs$: Observable<Log[]> = this.consoleService.log$;

  constructor(private consoleService: ConsoleService) { }

  ngOnInit() {
  }

}
