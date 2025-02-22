import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./root.component.html",
  styleUrls: ["./root.component.css"],
})
export class RootComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
