import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  name: string;
  constructor(private userService: UsersService) {
    this.name = this.userService.getUser().name;
  }

  setName() {
    this.userService.updateUser(this.name);
  }
  ngOnInit(): void {}
}
