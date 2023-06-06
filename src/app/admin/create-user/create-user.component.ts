import { Component } from '@angular/core';
import { FormdataService } from '../../services/formdata.service'
import { FormGroup, FormControl, FormControlName, ReactiveFormsModule} from '@angular/forms';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(private Data: FormdataService, private router: Router) { }
  userForm = new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
    mail: new FormControl(''),
    gender: new FormControl(''),
    category: new FormControl(''),
    technology: new FormControl('')
  })
  createUser() {
    console.log(this.userForm);
    this.Data.userdata = this.userForm.value
    this.Data.userdata.prop = 'url';
    this.Data.userdata.url = this.url
    this.router.navigate(['./admin/view'])
  }
  url: any; //Angular 11, for stricter type
  msg = "";

  //selectFile(event) { //Angular 8
  selectFile(event: any) { //Angular 11, for stricter type
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
      // console.log(this.url)
    }
  }
}
