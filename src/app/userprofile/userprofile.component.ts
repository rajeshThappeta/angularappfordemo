import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userObj;
  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
    let username= localStorage.getItem("username")
    this.us.getUser(username).subscribe(
      res=>{

        if(res["message"]=="failed"){
         alert(res["reason"])
         //navigate to login
         this.router.navigateByUrl("/login")
        }
        else{
        this.userObj=res["message"]
        }
      },
      err=>{
        alert("SOmething went wrong in reading user profile")
        console.log(err)
      }
    )
  }

}
