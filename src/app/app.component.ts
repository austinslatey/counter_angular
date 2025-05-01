import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'counter';

  count = 0;

  history: string[] = [];

  increment() {
    this.count++;
    // log the action
    this.history.push(`Incremented to ${this.count}`);
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      // log the action
      this.history.push(`Decremented to ${this.count}`);
    }
  }

  reset() {
    this.count = 0;
    // Reset the counter
    this.history.push(`Reset to ${this.count}`);
  }

  clearHistory() {
    // clear the array
    this.history = [];
  }
}
