import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = "";
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.isLoading = true;

    this.authService.login(username, password).subscribe({
      next: (success: boolean) => {
        if (success) {
          this.router.navigate(["/dashboard"]);
        } else {
          this.errorMessage = "Usuario o contraseña incorrectos.";
        }
      },
      error: (error: Error) => {
        this.isLoading = false;
        this.errorMessage = "Error.";
      },
      complete: () => {
        this.isLoading = false;
        console.log("Completado");
      },
    });
  }
}
