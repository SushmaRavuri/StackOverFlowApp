import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // state={
  //   ValidatePassword:"" as any,
  //   ValidateEmail:"" as any
  // }

email=""
password=""

  handleValidateEmail = (email:any) => {
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      // this.state.ValidateEmail("valid email")
      return true;
    } else {
      // this.state.ValidateEmail("Please Enter a valid Email")
      console.log("Please Enter a valid Email")
      return false;
    }
  };
  isUpper = (pswd:any) => {
    let format = /[A-Z]/;
    if (format.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };
   isLower = (pswd:any) => {
    let format = /[a-z]/;
    if (format.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };

   specialTest = (pswd:any) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };
   isNumber = (pswd:any) => {
    let hasNumber = /\d/;
    if (hasNumber.test(pswd)) {
      return true;
    } else {
      return false;
    }
  };

  handleValidatePassword = (password:any) => {
    let length = password.length;

    if (
      length >= 8 &&
      this.isUpper(password) &&
      this.isLower(password) &&
      this.specialTest(password) &&
      this.isNumber(password)
    ) {
      // this.state.ValidatePassword("valid password");
      return true;
    } else {
      // this.state.ValidatePassword("Please enter a valid password");
      console.log("Please enter a valid password")
      return false;
    }
  };
  submitDetails=()=>{
    console.log("come")
    if(this.handleValidatePassword(this.password) && this.handleValidateEmail(this.email))
    {
      console.log("Email and Password are valid")
    }
  }
  clickEmail(event:any){
    this.email=event.target.value
  }
  clickPassword(event:any){
    this.password=event.target.value
  }

  constructor() { }

  ngOnInit() {
  }

}
