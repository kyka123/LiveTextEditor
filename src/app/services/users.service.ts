import { Editor } from "./../models/editor";
import { User } from "./../models/user";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor() {}
  editors = [
    {
      id: "1",
      title: "Ulubjona ksiąszka",
      description:
        "To jest tekst o mojej ulubjonej książce, którym chcę się poszielić",
      created: new Date(),
    },
    {
      id: "2",
      title: "Ulubjona ksiąszka",
      description:
        "To jest tekst o mojej ulubjonej książce, którym chcę się poszielić",
      created: new Date(),
    },
    {
      id: "3",
      title: "Ulubjona ksiąszka",
      description:
        "To jest tekst o mojej ulubjonej książce, którym chcę się poszielić",
      created: new Date(),
    },
    {
      id: "4",
      title: "Ulubjona ksiąszka",
      description:
        "To jest tekst o mojej ulubjonej książce, którym chcę się poszielić",
      created: new Date(),
    },
    {
      id: "5",
      title: "Ulubjona ksiąszka",
      description:
        "To jest tekst o mojej ulubjonej książce, którym chcę się poszielić",
      created: new Date(),
    },
  ];

  updateUser(name: string) {
    let user = this.getUser() || new User(name);
    user.name = name;
    user.lastActivity = new Date();
    localStorage.setItem("user", JSON.stringify(user));
  }
  newEditor(id: string, adminId = "") {
    const editor = this.editors.find((e) => e.id === id);
    const user: User = this.getUser();
    user.editors.push(editor);
    localStorage.setItem("user", JSON.stringify(user));
  }
  createEditor(title: string, description: string) {
    const user = this.getUser();
    const newEditor = new Editor(title, description);
    console.log(newEditor);
    user.editors.push(newEditor);
    localStorage.setItem("user", JSON.stringify(user));
  }
  getUser(): User {
    return JSON.parse(localStorage.getItem("user"));
  }
  getEditors() {
    return this.getUser().editors;
  }
}
