import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //inject user service
  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(formRef){
    let userObj=formRef.value;

    this.us.createUser(userObj).subscribe(

      res=>{
        if(res["message"]=="user created"){
          alert("User created successfully")
          //navigate to login
          this.router.navigateByUrl("/login")
        }
        else{
          alert("Username is already existed..plz choose another")
        
        }
      },
      err=>{
        alert("Something went wrong in user creation")
        console.log(err)
      }
    )
  }
}
