import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.tasks = [
      {
        id: '1',
        title: 'Sample Task 1',
        description: 'This is a sample task description.',
        dueDate: new Date(),
        priority: 'medium',
        status: 'to-do',
        history: [],
      },
      {
        id: '2',
        title: 'Sample Task 2',
        description: 'This is another task description.',
        dueDate: new Date(),
        priority: 'high',
        status: 'in-progress',
        history: [],
      },
    ];
  }

  getAllTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index > -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

}