import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-history',
  standalone: true,
  imports: [CommonModule], // Standalone component declaration
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent {
  @Input() history: string[] = [];
}
