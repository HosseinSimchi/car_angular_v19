import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { Router, RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { log_in } from "../../app/states/user/user.action";

@Component({
  selector: "car-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports: [HeaderComponent, RouterModule],
})
export class LoginComponent implements OnInit {
  // npm install otp-generator (To handle SMS using OTP generator without backend service)
  constructor(private readonly router: Router, private readonly store:Store) {}

  ngOnInit() {}

  onLoginHandler() {
    this.store.dispatch(log_in())
    this.router.navigate(["app"]);
  }
}
