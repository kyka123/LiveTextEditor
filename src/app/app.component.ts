import { UsersService } from "./services/users.service";
import { Router } from "@angular/router";
import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  loggedIn = !!this.usersService.getUser();

  login(name: string) {
    this.usersService.updateUser(name);
    this.loggedIn = true;
  }

  constructor(private router: Router, private usersService: UsersService) {}
}
