import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IMyDpOptions } from "mydatepicker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  dateForm: FormGroup;

  private myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'mm/dd/yyyy',
    };

  constructor( private _fb: FormBuilder ){}

  ngOnInit(): void {
    this.dateForm = this._fb.group({
      myDate: [ null , [ Validators.required ] ]
    })

  }
}
