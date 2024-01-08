import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-create-trade',
  templateUrl: './create-trade.component.html',
})

export class CreateTradeComponent implements OnInit {
  currentDate: string;
  isChecked: boolean = false;
  labelCheck: string = "Long";
  formGroupTrade: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    const today = new Date();

    this.currentDate = formatDate(today, 'yyyy-MM-dd', 'en');
    this.formGroupTrade = this.formBuilder.group(
      {
        parity: new FormControl('option1'),
        quantity: ["", [Validators.required]],
        unit: ["", [Validators.required]],
        entry: [this.currentDate, [Validators.required]],
        price: ["", [Validators.required]],
        exit: [this.currentDate, [Validators.required]],
        exitPrice: ["",[]],
        checkboxControlPosition: [false],

      }
    )
 // Formatează data ca YYYY-MM-DD
  }

  ngOnInit(): void {
    this.formGroupTrade.get('checkboxControlPosition')?.valueChanges.subscribe(checked => {
      this.labelCheck = checked ? 'Short' : 'Long';
    })
  }

  onCheckboxPositionChange() {
    this.isChecked = this.formGroupTrade.get('checkboxControlPosition')?.value;
    this.labelCheck = this.isChecked ? 'Short' : 'Long';
  }


  getControlFor(id: string): FormControl {
    console.log("Get Control for");
    return this.formGroupTrade.get(id) as FormControl;
  }

  onSubmit(){

    console.log("onSubmit: Here")
    if (!this.formGroupTrade.valid) {
      Object.keys(this.formGroupTrade.controls).forEach(field => {
        const control = this.formGroupTrade.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }
    
  }
}