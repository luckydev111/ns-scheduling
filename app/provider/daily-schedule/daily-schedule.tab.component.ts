import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

var moment = require("moment");

class Schedule {
	constructor(public time: Date, public title: string) {}
}

let appointmentSchedules = [
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment1'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment2'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment3'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment4'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment5'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment6'}];

@Component({
  moduleId: module.id,
  selector: "daily-schedule-tab",
  templateUrl: "./daily-schedule.tab.component.html",
  styleUrls: ["./daily-schedule-common.css"],
})
export class DailyScheduleTabComponent implements OnInit {

	public schedules: Array<Schedule>;
	public addTimeReady: boolean = false;

  public constructor() {
  	this.schedules = [];
  	for (let i = 0; i < appointmentSchedules.length; i++) {
  		this.schedules.push(appointmentSchedules[i]);
  	}
  }

  public ngOnInit() {
  }

  public onItemTap(args) {
  	console.log('Item Tapped at cell index: ', args.index);
  }

  public setScheduleTime() {
  	this.addTimeReady = true;
  }
}
