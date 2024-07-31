import { Component, inject, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ControlContainer } from '@angular/forms';


@Component({
  selector: 'app-address',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
  viewProviders: [{
      //we need to specify the form group to the fields in the same template/view,
      //in this case the injection will come from the parent
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ]
})
export class AddressComponent implements OnInit, OnDestroy {

  public parentCointainer = inject(ControlContainer);

  //required input for dynamic control
  @Input({ required: true }) controlKey = "";
  @Input({ required: true }) label = "";



  //get the formcontrol
  get parentFormGroup(): FormGroup{
    return this.parentCointainer.control as FormGroup
  }

  ngOnInit(): void {
    //add the controls - with the controlname hardcoded
    /*
    this.parentFormGroup.addControl(
      "deliveryAddress", new FormGroup({
        zipCode: new FormControl(''),
        street: new FormControl('')
      }));
    */

    //add the controls - dynamic
    this.parentFormGroup.addControl(
      this.controlKey, new FormGroup({
        zipCode: new FormControl(''),
        street: new FormControl('')
      }));
  }

  ngOnDestroy(): void {
    this.parentFormGroup.removeControl('deliveryAddress');
  }
}
