import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { UsersService } from '../../serivce/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


//user_obj:any;
//user_arr:any;
todo:any[];


user_obj2:any;
user_arr2:any;
done:any[];


  constructor(private userService:UsersService) { }

  ngOnInit() {


this.todo=this.userService.getUsersData();
if(this.todo == null) {

this.userService.getUsers().subscribe(
	(data:any)=>{

	this.todo= JSON.parse(JSON.stringify(data.results));
	this.done = [...this.todo];
	this.userService.setUsersData(data.results);

})

}





//part 2

/*
this.user_obj2=this.userService.getusers();


this.user_obj2.subscribe(
	(data:any)=>{
	this.user_arr2=JSON.parse(JSON.stringify(data));

//console.log(this.user_arr2.results);

this.done=this.user_arr2.results;




	}
	);
*/

  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


}
