import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

class Service {
	constructor(public title: string) {}
}

let availableServices = [
	{title: "Service1"},
	{title: "Service2"},
	{title: "Service3"},
	{title: "Service4"},
	{title: "Service5"},
	{title: "Service6"},
	{title: "Service7"}];

@Component({
  moduleId: module.id,
  selector: "daily-services-tab",
  templateUrl: "./daily-services.tab.component.html",
  styleUrls: ["./daily-services-common.css"],
})
export class DailyServicesTabComponent implements OnInit {

	public services: Array<Service>;

  public constructor() {
  	this.services = [];
  	for (let i = 0; i < availableServices.length; i++) {
  		this.services.push(availableServices[i]);
  	}
  }
 
  public ngOnInit() {
  }

  public onItemTap(args) {
  	console.log('Item Tapped at cell index: ', args.index);
  }
}