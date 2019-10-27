import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent {
    public addresses: FormArray;
    public addressForm: FormGroup;
    constructor(private fb: FormBuilder) {
      this.addressForm = this.fb.group({
        addresses: this.fb.array([ this.createAddress() ])
      });
    }
  
    ngOnInit() {
  
    }
  
    get addressControls() {
      return this.addressForm.get('addresses')['controls'];
    }
  
    createAddress(): FormGroup {
      return this.fb.group({
        address: '',
        street: ''
      });
    }
  
    addAddress(): void {
      this.addresses = this.addressForm.get('addresses') as FormArray;
      this.addresses.push(this.createAddress());
      console.log(this.addresses.value);
    }
  
    removeAddress(i: number) {
      this.addresses.removeAt(i);
    }
  
    logValue() {
      console.log(this.addresses.value);
    }
  }