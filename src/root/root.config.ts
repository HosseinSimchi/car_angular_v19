import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./root.routes";
import { provideState, provideStore, StoreModule } from "@ngrx/store";
import { appReducer } from "../app/states/app.state";

export const rootConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(appReducer),
  ],
};
