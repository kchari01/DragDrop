import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL: string = 'https://randomuser.me/api/';
 //public getusers(url?: string){}
 data = null;

  constructor(private httpClient:HttpClient) { 

 

  }




  public getUsers()
{
	//console.log(this.year);

	return this.httpClient.get(this.apiURL+'?results=10&nat=us');

}

public getUsersData() {
	return this.data;
}


public setUsersData(_data) {
	this.data = _data;
}

 public getuser(email)
{
	//console.log(this.year);

	//return this.httpClient.get(this.apiURL+'?email='+email);
	let allUsers = this.getUsersData();

	for(let user of allUsers) {
		if(user.email == email) {
		return user;
		}
	}



}




}
