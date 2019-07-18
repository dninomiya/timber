import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

export interface Log {
  createdAt: Date;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  logs: Log[] = [];
  logSource = new ReplaySubject<Log[]>();
  log$: Observable<Log[]> = this.logSource.asObservable();

  constructor() { }

  addLog(log: string) {
    this.logs.unshift({
      createdAt: new Date(),
      message: log
    });
    this.logSource.next(this.logs);
  }

  clearLogs() {
    this.logs = [];
    this.logSource.next(this.logs);
  }
}
