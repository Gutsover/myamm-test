import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';

// Observable est un objet qui émet des informations auxquelles on souhaite réagir.  Ces informations peuvent venir d'un champ de texte dans lequel l'utilisateur rentre des données, ou de la progression d'un chargement de fichier, par exemple.  Elles peuvent également venir de la communication avec un serveur
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  //si vous essayez d'accéder à  /exemple  sans être authentifié, vous êtes automatiquement redirigé vers  / .  Si vous cliquez sur "Se connecter", vous pouvez accéder sans problème.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}