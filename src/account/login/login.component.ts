import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: "car-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports: [HeaderComponent],
})
export class LoginComponent implements OnInit {
  // npm install otp-generator (To handle SMS using OTP generator without backend service)
  constructor() {}

  ngOnInit() {}
}
