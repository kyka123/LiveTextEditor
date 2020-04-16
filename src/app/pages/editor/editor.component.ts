import { UsersService } from "src/app/services/users.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
})
export class EditorComponent implements OnInit {
  parameters = new URLSearchParams(window.location.search);
  constructor(private usersService: UsersService) {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");
    const adminId = parameters.get("adminId");

    const haventEditor = !this.usersService
      .getUser()
      .editors.find((editor) => editor.id == id);

    if (haventEditor) {
      this.usersService.newEditor(id, adminId || "");
    }
  }

  ngOnInit(): void {}
}
