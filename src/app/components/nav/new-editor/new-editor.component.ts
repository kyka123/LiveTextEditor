import { Editor } from "./../../../models/editor";
import { UsersService } from "src/app/services/users.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-editor",
  templateUrl: "./new-editor.component.html",
  styleUrls: ["./new-editor.component.scss"],
})
export class NewEditorComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  title;
  description;
  createNewEditor() {
    console.log(this.title, this.description);
    this.usersService.createEditor(this.title, this.description);
  }
  ngOnInit(): void {}
}
