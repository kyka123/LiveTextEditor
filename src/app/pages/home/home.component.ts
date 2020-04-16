import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `<app-nav></app-nav>
    <app-user-page></app-user-page> `,
})
export class HomeComponent implements OnInit {
  constructor() {
    console.log(this.getQueryParameter("name"));
  }
  private getQueryParameter(key: string): string {
    const parameters = new URLSearchParams(window.location.search);
    return parameters.get(key);
  }

  ngOnInit(): void {}
}
