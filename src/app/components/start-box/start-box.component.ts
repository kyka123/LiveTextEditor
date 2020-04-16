import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-start-box",
  templateUrl: "./start-box.component.html",
  styleUrls: ["./start-box.component.scss"],
})
export class StartBoxComponent implements OnInit {
  name: string;
  constructor() {}

  @Output() sendName = new EventEmitter<string>();

  getName() {
    this.sendName.emit(this.name);
  }
  ngOnInit(): void {}
}
