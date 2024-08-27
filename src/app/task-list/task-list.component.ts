import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { selectTasks } from '../state/task.selectors';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule], // Standalone component declaration
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private store: Store) {
    this.tasks$ = this.store.select(selectTasks);
  }

  ngOnInit(): void {}
}
