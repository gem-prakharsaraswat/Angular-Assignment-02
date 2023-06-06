import { Component } from '@angular/core';
import { FormdataService } from '../../services/formdata.service'

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent {
  userdata:any
  constructor(private Data: FormdataService) {
    if(this.Data.userdata!==undefined){
    this.userdata=this.Data.userdata;
    console.log(this.userdata);
    console.log(this.userdata.name);
    }

}
}
