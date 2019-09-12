import { Utilisateur } from '../models/Utilisateur.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

export class UtilisateurService {

    constructor(private http: HttpClient) { }

    private utilisateurs: Utilisateur[] = [
        {
            id: 1,
            name: 'John',
            role: 'admin',
            password: '1234'
        },
        {
            id: 2,
            name: 'Jean',
            role: 'agent',
            password: '1234'
        },
        {
            id: 3,
            name: 'Victor',
            role: 'cuisine',
            password: '1234'
        },
        {
            id: 4,
            name: 'Julie',
            role: 'agent',
            password: '1234'
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

    deleteUtilisateur(utilisateur: Utilisateur) {
        const pos = this.utilisateurs.findIndex(x => x.id === utilisateur.id);
        this.utilisateurs.splice(pos, 1);
        this.utilisateurSubject.next(this.utilisateurs);
    }

    authenticate(userName: string, pass: string): Utilisateur {
        return this.utilisateurs.find((utilisateur: Utilisateur) => {
            if (userName === utilisateur.name && pass === utilisateur.password) {
                return utilisateur;
            }
            return null;
        });
    }
}
