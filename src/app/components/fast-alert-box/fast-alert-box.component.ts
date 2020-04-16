import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fast-alert-box",
  templateUrl: "./fast-alert-box.component.html",
  styleUrls: ["./fast-alert-box.component.scss"],
})
export class FastAlertBoxComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() open: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
