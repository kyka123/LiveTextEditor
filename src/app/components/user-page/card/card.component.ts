import { Editor } from "./../../../models/editor";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  constructor(private router: Router) {}

  goEditor() {
    this.router.navigate(["/editor"], {
      queryParams: { id: this.details.id },
    });
  }

  @Input()
  details: Editor;

  ngOnInit(): void {}
}
