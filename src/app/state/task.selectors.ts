import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

export const selectTaskById = (taskId: string) =>
  createSelector(selectTasks, (tasks) => tasks.find((task) => task.id === taskId));
