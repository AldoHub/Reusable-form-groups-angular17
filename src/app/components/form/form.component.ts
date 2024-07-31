import { Component } from '@angular/core';

//reactive form
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, AddressComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  public form = new FormGroup({
    displayName: new FormControl(''),
  
  });

  submit() {
    // do whatever you need with it...
    console.log(this.form.value);
    this.form.reset();
  }

}
