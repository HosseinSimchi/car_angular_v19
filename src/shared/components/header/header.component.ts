import { Component, OnInit } from "@angular/core";
import { select, Store, StoreModule } from "@ngrx/store";
import { Observable } from "rxjs";
import { getUser } from "../../../app/states/user/user.selector";
import { CommonModule } from "@angular/common";
import { appReducer } from "../../../app/states/app.state";

@Component({
  selector: "car-header",
  imports: [CommonModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly store: Store) {}
  userState$!: Observable<any>;

  ngOnInit() {
    this.userState$ = this.store.select(getUser);
  }
}
