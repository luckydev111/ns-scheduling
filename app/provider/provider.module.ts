import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { providerRouting } from "./provider.routing";
import { ProviderComponent } from "./provider.component";
import { DailyScheduleTabComponent } from './daily-schedule/daily-schedule.tab.component';
import { DailyServicesTabComponent } from './daily-services/daily-services.tab.component';
import { DailyAvailableTimeTabComponent } from './daily-available-time/daily-available-time.tab.component';
import { DailyAppointmentsTabComponent } from "./daily-appointments/daily-appointments.tab.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    providerRouting
  ],
  declarations: [
    ProviderComponent,
    DailyScheduleTabComponent,
    DailyServicesTabComponent,
    DailyAvailableTimeTabComponent,
    DailyAppointmentsTabComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProviderModule { }
