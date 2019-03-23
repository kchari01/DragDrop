import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../serivce/users.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user;

  constructor( private route: ActivatedRoute,
  private usersService: UsersService,
  private location: Location) { }

  ngOnInit() {
   this.getuser_id();
  }


getuser_id(): void {
  let email = this.route.snapshot.paramMap.get('id');
  let selectedUser = this.usersService.getuser(email);
  console.log("selectedUser", selectedUser)
}



}
