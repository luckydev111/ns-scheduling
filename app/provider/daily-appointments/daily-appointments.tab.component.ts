import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

var moment = require("moment");

class Appointment {
	constructor(public time: Date, public title: string) {}
}

let appointmentsList = [
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment1'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment2'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment3'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment4'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment5'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment6'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment7'},
	{time: moment().format('h:mm:ss:a ll'), title: 'Appointment8'}];

@Component({
  moduleId: module.id,
  selector: "daily-appointments-tab",
  templateUrl: "./daily-appointments.tab.component.html",
  styleUrls: ["./daily-appointments-common.css"],
})
export class DailyAppointmentsTabComponent implements OnInit {
	
	public appointments: Array<Appointment>;
	public addTimeReady: boolean = false;

  public constructor() {
  	this.appointments = [];
  	for (let i = 0; i < appointmentsList.length; i++) {
  		this.appointments.push(appointmentsList[i]);
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