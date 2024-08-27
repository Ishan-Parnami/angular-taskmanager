import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { selectTaskById } from '../state/task.selectors';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule], // Standalone component declaration
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task$: Observable<Task | undefined>;

  constructor(private route: ActivatedRoute, private store: Store) {
    const taskId = this.route.snapshot.paramMap.get('id')!;
    this.task$ = this.store.select(selectTaskById(taskId));
  }

  ngOnInit(): void {}
}
