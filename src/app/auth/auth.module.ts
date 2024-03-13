import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './component/login/login.component';
import { MaterialImportModule } from "../material-import/material-import.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    // SharedModule,
    MaterialImportModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
