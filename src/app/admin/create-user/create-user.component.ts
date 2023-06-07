import { Component } from '@angular/core';
import { FormdataService } from '../../services/formdata.service'
import { FormGroup, FormControl, FormControlName, ReactiveFormsModule,Validators} from '@angular/forms';
import { Router, Route } from '@angular/router';
import { ModelComponentComponent } from './model-component/model-component.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  modalService: any;
  constructor(private Data: FormdataService, private router: Router, private ngbmodal: NgbModal) { }
  userForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("^[A-Z][a-zA-Z]+$"),Validators.minLength(2)]),
    number: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    mail: new FormControl('',Validators.email),
    gender: new FormControl(''),
    category: new FormControl(''),
    technology: new FormControl('')
  })

  get name()
  {
    return this.userForm.get('name')
  }
  get mail()
  {
    return this.userForm.get('mail')
  }
  get number()
  {
    return this.userForm.get('number')
  }

  open() {
    const modelRef = this.ngbmodal.open(ModelComponentComponent);
    modelRef.componentInstance.name = this.userForm.value;
    modelRef.componentInstance.url = this.url;

  }
  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }

  url: any;
  msg = "";

  selectFile(event: any) {
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
    }
  }
}
