import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-alert-box",
  templateUrl: "./alert-box.component.html",
  styleUrls: ["./alert-box.component.scss"],
})
export class AlertBoxComponent implements OnInit {
  checkedRadioBox = TYPES.Normal;
  private readonly location = `${window.location}`;
  check(type: string) {
    if (type === TYPES.Normal) {
      this.link = this.location;
    } else if (type == TYPES.AsTask) {
      this.link = `${this.location}&typeTask=${true}`;
    } else {
      this.link = `${this.location}&adminId=${this.adminId}`;
    }
  }
  fastAlertBoxIsOpen: boolean = false;

  @Input() adminId: string = "123";

  @Input() open = false;

  @Output() closed = new EventEmitter<boolean>();

  link = `${window.location}`;
  constructor() {}
  copyMessage() {
    const selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = this.link;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
    this.closed.emit(false);
    this.fastAlertBoxIsOpen = true;
    setTimeout(() => {
      this.fastAlertBoxIsOpen = false;
    }, 2000);
  }

  ngOnInit(): void {}
}

enum TYPES {
  Normal = "Normal",
  AsTask = "AsTask",
  ToNewAdmin = "ToNewAdmin",
}
