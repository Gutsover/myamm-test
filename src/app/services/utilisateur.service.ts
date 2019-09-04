import { Utilisateur } from '../models/Utilisateur.model';
import { Subject } from 'rxjs';

export class UtilisateurService {
    private utilisateurs: Utilisateur[] = [
        {
            name: 'John',
            role: 'admin',
            password: '1234'
        },
        {
            name: 'Jean',
            role: 'agent',
            password: '5678'
        }
    ];
    utilisateurSubject = new Subject<Utilisateur[]>();

    emitUtilisateurs() {
        this.utilisateurSubject.next(this.utilisateurs.slice());
    }

    addUtilisateur(utilisateur: Utilisateur) {
        this.utilisateurs.push(utilisateur);
        this.emitUtilisateurs();
    }
    
}