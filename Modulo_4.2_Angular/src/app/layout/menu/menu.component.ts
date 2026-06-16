import { Component } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from "../../services/auth.service";

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: "app-menu",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
})
export class MenuComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
  ) {}

  publicMenu: MenuItem[] = [
    { label: "Home", route: "/" },
    { label: "Login", route: "/login" },
    { label: "Acerca de", route: "/about" },
  ];

  privateAdminMenu: MenuItem[] = [
    { label: "Dashboard", route: "/dashboard" },
    { label: "Galería", route: "/gallery" },
    { label: "CRUD", route: "/crud" },
    { label: "Perfil", route: "/profile" },
  ];

  privateUserMenu: MenuItem[] = [
    { label: "Dashboard", route: "/dashboard" },
    { label: "Galería", route: "/gallery" },
    { label: "Perfil", route: "/profile" },
  ];

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
