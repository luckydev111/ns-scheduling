import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

var moment = require("moment");

class TimeSlot {
	constructor(public fromTime: Date, public toTime: Date) {}
}

let nonavailableTimeSlots = [
	{fromTime: moment().format('h:mm:ss:a ll'), toTime: moment().format('h:mm:ss:a ll')},
	{fromTime: moment().format('h:mm:ss:a ll'), toTime: moment().format('h:mm:ss:a ll')},
	{fromTime: moment().format('h:mm:ss:a ll'), toTime: moment().format('h:mm:ss:a ll')},
	{fromTime: moment().format('h:mm:ss:a ll'), toTime: moment().format('h:mm:ss:a ll')},
	{fromTime: moment().format('h:mm:ss:a ll'), toTime: moment().format('h:mm:ss:a ll')},
	{fromTime: moment().format('h:mm:ss:a ll'), toTime: moment().format('h:mm:ss:a ll')}];

@Component({
  moduleId: module.id,
  selector: "daily-available-time-tab",
  templateUrl: "./daily-available-time.tab.component.html",
  styleUrls: ["./daily-available-time-common.css"],
})
export class DailyAvailableTimeTabComponent implements OnInit {

	public timeSlots: Array<TimeSlot>;
	public addTimeReady: boolean = false;
	
  public constructor() {
  	this.timeSlots = [];
  	for (let i = 0; i < nonavailableTimeSlots.length; i++) {
  		this.timeSlots.push(nonavailableTimeSlots[i]);
  	}
  }
   
  public ngOnInit() {
  }

  public onItemTap(args) {
  	console.log('Item Tapped at cell index: ', args.index);
  }

  public setNonavailableTime() {
  	this.addTimeReady = true;
  }
}