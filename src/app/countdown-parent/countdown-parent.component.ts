import { Component } from '@angular/core';
// import { CountdownTimerComponent } from './countdown-timer.component';

@Component({
  selector: 'app-countdown-parent',
  template: `
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <button (click)="timer.log()">Log</button>
  <div class="seconds">{{timer.seconds}}</div>
  <app-countdown-timer #timer></app-countdown-timer>
  `,
  // styleUrls: ['../assets/demo.css']
})
export class CountdownLocalVarParentComponent { }
