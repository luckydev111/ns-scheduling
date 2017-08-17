import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { action } from "ui/dialogs";
import { Color } from "color";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { DatePicker } from "ui/date-picker";
import { EventData } from "data/observable";
// import { ProviderService } from "./shared";

@Component({
  selector: "provider",
  moduleId: module.id,
  templateUrl: "./provider.component.html",
  styleUrls: ["./provider-common.css", "./provider.component.css"],
  // providers: [ProviderService]
})
export class ProviderComponent implements OnInit {
  // provider: string = "";
  isAndroid;
  isShowingRecent = false;
  isLoading = false;
  public activeTab: string = "Daily Schedule";
  public tabindex: number = 3;
  constructor(private router: Router,
    // private store: ProviderService,
    private page: Page) {}

  ngOnInit() {
    this.isAndroid = !!this.page.android;
    this.page.actionBarHidden = true;
  }

  // Prevent the first textfield from receiving focus on Android
  // See http://stackoverflow.com/questions/5056734/android-force-edittext-to-remove-focus
  handleAndroidFocus(textField, container) {
    if (container.android) {
      container.android.setFocusableInTouchMode(true);
      container.android.setFocusable(true);
      textField.android.clearFocus();
    }
  }

  public tabIndexChanged(e: any) {
    switch (e.newIndex) {
      case 0:
        this.activeTab = "Daily Schedule";
        break;
      case 1:
        this.activeTab = "Daily Services";
        break;
      case 2:
        this.activeTab = "Available Time";
        break;
      case 3:
        this.activeTab = "Appointments";
        break;
      default:
        break;
    }
  }

  // onPickerLoaded(args) {
  //     let datePicker = <DatePicker>args.object;

  //     datePicker.year = 1980;
  //     datePicker.month = 2;
  //     datePicker.day = 9;
  //     datePicker.minDate = new Date(1975, 0, 29);
  //     datePicker.maxDate = new Date(2045, 4, 12);
  // }

  // onDateChanged(args) {
  //     console.log("Date changed");
  //     console.log("New value: " + args.value);
  //     console.log("Old value: " + args.oldValue);
  // }

  // onDayChanged(args) {
  //     console.log("Day changed");
  //     console.log("New value: " + args.value);
  //     console.log("Old value: " + args.oldValue);
  // }

  // onMonthChanged(args) {
  //     console.log("Month changed");
  //     console.log("New value: " + args.value);
  //     console.log("Old value: " + args.oldValue);
  // }

  // onYearChanged(args) {
  //     console.log("Year changed");
  //     console.log("New value: " + args.value);
  //     console.log("Old value: " + args.oldValue);
  // }
}
