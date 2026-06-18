import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Observable, of } from "rxjs";
import { delay } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  public currentUser?: User | null;

  private readonly STORAGE_KEY = "auth-user";

  private validUsers = [
    {
      id: "1",
      password: "admin",
      username: "admin",
      role: "admin",
    },
    {
      id: "2",
      password: "123456",
      username: "user",
      role: "user",
    },
  ];

  constructor() {
    const savedUser = localStorage.getItem(this.STORAGE_KEY);
    if (savedUser) {
      try {
        this.currentUser = JSON.parse(savedUser);
      } catch (e) {
        localStorage.removeItem(this.STORAGE_KEY);
      }
    }
  }

  public login(username: string, password: string): Observable<boolean> {
    const user = this.validUsers.find(
      (u) => u.username === username && u.password === password,
    );

    if (user) {
      this.currentUser = {
        id: user.id,
        username: user.username,
        role: user.role,
      };

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.currentUser));

      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }

  public logout(): void {
    this.currentUser = null;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  public isLogged(): boolean {
    return !!this.currentUser;
  }

  public getUsername(): string {
    return this.currentUser?.username || "";
  }

  public isAdmin(): boolean {
    return this.currentUser?.role === "admin";
  }
}
