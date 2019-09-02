import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Utilisateur } from '../../models/Utilisateur.model';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-create-user-card',
  templateUrl: './create-user-card.component.html',
  styleUrls: ['./create-user-card.component.scss']
})
export class CreateUserCardComponent implements OnInit, OnDestroy {

  utilisateurs: Utilisateur[];
  utilisateurSubscription: Subscription;

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.utilisateurSubscription = this.utilisateurService.utilisateurSubject.subscribe(
      (utilisateurs: Utilisateur[]) => {
        this.utilisateurs = utilisateurs;
      }
    );
    this.utilisateurService.emitUtilisateurs();
  }

  ngOnDestroy() {
    this.utilisateurSubscription.unsubscribe();
  }

}
