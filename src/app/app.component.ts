import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public myForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.myForm = this.fb.group({
      name:['', Validators.required],
      age:['', Validators.compose([Validators.required, Validators.max(180)])],
      company:['', Validators.required],
      mail:['', Validators.compose([Validators.required, Validators.email])]
    })
  }

  sendToService(){
    console.log(this.myForm.value);
  }
}
