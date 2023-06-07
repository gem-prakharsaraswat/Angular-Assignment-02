import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormdataService } from 'src/app/services/formdata.service';

@Component({
  selector: 'app-model-component',
  templateUrl: './model-component.component.html',
  styleUrls: ['./model-component.component.css']
})
export class ModelComponentComponent {
  @Input()  name : any; url : any;
  constructor(public activeModal:NgbActiveModal,private Data: FormdataService, private router :Router){ }
  createUser() {
    this.Data.userdata = this.name
    this.Data.userdata.prop = 'url';
    this.Data.userdata.url = this.url
    this.router.navigate(['./admin/view'])
    this.activeModal.close()
    // console.log(this.url)
    // console.log('HI '+ this.Data.userdata.url)
  }
  
}
