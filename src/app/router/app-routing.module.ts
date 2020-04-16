import { HomeComponent } from "./../pages/home/home.component";
import { EditorComponent } from "./../pages/editor/editor.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "editor", component: EditorComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent];
