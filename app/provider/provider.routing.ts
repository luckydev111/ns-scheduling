import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProviderComponent } from "./provider.component";
import { DailyScheduleTabComponent } from "./daily-schedule/daily-schedule.tab.component";
import { DailyServicesTabComponent } from "./daily-services/daily-services.tab.component";
import { DailyAvailableTimeTabComponent } from "./daily-available-time/daily-available-time.tab.component";
import { DailyAppointmentsTabComponent } from "./daily-appointments/daily-appointments.tab.component";

const providerRoutes: Routes = [
	{ path: '', redirectTo: 'provider', pathMatch: 'full' },
  {
  	path: "provider",
  	component: ProviderComponent,
    children: [
      { path: "daily-schedule", component: DailyScheduleTabComponent, outlet: "daily-schedule" },
      { path: "daily-services", component: DailyServicesTabComponent, outlet: "daily-services" },
      { path: "daily-available-time", component: DailyAvailableTimeTabComponent, outlet: "daily-available-time" },
      { path: "daily-appointments", component: DailyAppointmentsTabComponent, outlet: "daily-appointments"},
    ]
  },
];
export const providerRouting: ModuleWithProviders = RouterModule.forChild(providerRoutes);