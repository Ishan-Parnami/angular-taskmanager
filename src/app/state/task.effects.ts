import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as TaskActions from './task.actions';
import { TaskService } from '../services/task.service';

@Injectable()
export class TaskEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.taskService.getAllTasks().pipe(
          map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
