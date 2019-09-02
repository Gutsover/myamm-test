import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Router } from '@angular/router';
import { Utilisateur } from '../../models/Utilisateur.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  utilisateurForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private utilisateurService: UtilisateurService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.utilisateurForm = this.formBuilder.group({
      // Controles qui seront dans le formulaire: 
      name: [''],
      role: [''],
      password: ['']  
    });
  }

  onSubmitForm() {
    const formValue = this.utilisateurForm.value;
    const newUtilisateur = new Utilisateur(
      formValue['name'],
      formValue['role'],
      formValue['password']
    );
    this.utilisateurService.addUtilisateur(newUtilisateur);
    this.router.navigate(['/dashboard']);
  }

}
