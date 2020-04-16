import { UsersService } from "./services/users.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { SettingsComponent } from "./components/nav/settings/settings.component";
import { AboutComponent } from "./components/nav/about/about.component";
import { NewEditorComponent } from "./components/nav/new-editor/new-editor.component";
import { UserPageComponent } from "./components/user-page/user-page.component";
import { GridTemplateComponent } from "./components/user-page/grid-template/grid-template.component";
import { CardComponent } from "./components/user-page/card/card.component";
import { HomeComponent } from "./pages/home/home.component";
import { AppRoutingModule } from "./router/app-routing.module";
import { EditorComponent } from "./pages/editor/editor.component";
import { BoardComponent } from "./components/board/board.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { AlertBoxComponent } from "./components/board/alert-box/alert-box.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { FastAlertBoxComponent } from "./components/fast-alert-box/fast-alert-box.component";
import { StartBoxComponent } from "./components/start-box/start-box.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SettingsComponent,
    AboutComponent,
    NewEditorComponent,
    UserPageComponent,
    GridTemplateComponent,
    CardComponent,
    HomeComponent,
    EditorComponent,
    BoardComponent,
    UsersListComponent,
    AlertBoxComponent,
    FastAlertBoxComponent,
    StartBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
