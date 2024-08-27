import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Standalone component declaration
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;

  @Output() submitTask = new EventEmitter<Task>();

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      priority: ['medium', Validators.required],
      status: ['to-do', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.taskForm.valid) {
      this.submitTask.emit(this.taskForm.value);
      this.taskForm.reset();
    }
  }
}
