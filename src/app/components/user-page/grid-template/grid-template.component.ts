import { UsersService } from "./../../../services/users.service";
import { Editor } from "./../../../models/editor";
import { CardData } from "./../../../models/card-data";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grid-template",
  templateUrl: "./grid-template.component.html",
  styleUrls: ["./grid-template.component.scss"],
})
export class GridTemplateComponent implements OnInit {
  cards: Editor[];
  constructor(usersService: UsersService) {
    this.cards = usersService.getEditors();
  }
  ngOnInit(): void {}
}
