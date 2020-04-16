export class Editor {
  id: string;
  adminId?: string;
  created?: Date;
  title: string;
  description: string;
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.created = new Date();
    this.id = "aasdq2d";
    this.adminId = "asdefwrGwrgwd";
  }
}
