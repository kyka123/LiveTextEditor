import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  constructor() {}
  name = "New Editor";
  setName(newName) {
    this.name = newName;
  }
  ngOnInit(): void {}
}
