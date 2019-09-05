import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.scss']
})
export class UpdateProfilComponent implements OnInit {

  profilForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitProfilForm(profilForm: NgForm) {
    console.log(profilForm);
  }

  updateProfilForm(profilForm: NgForm) {
    profilForm.resetForm();
    this.router.navigate(['/dashboard']);
  }

}
