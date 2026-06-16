import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuComponent } from "../menu/menu.component";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-header",
  imports: [MenuComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}

