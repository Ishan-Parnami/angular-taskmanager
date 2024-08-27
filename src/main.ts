import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { taskReducer } from './app/state/task.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { TaskEffects } from './app/state/task.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ tasks: taskReducer }),
    provideEffects([TaskEffects]), 
    provideStoreDevtools()
  ],
}).catch((err) => console.error(err));
