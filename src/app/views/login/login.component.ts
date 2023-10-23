import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router : Router
  ) {
    this.form = this.fb.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }

  validData() {
    let User: User = {
      email: this.form.value.mail,
      password: this.form.value.password
    } 
    
    if (User.password != '' && User.email !='') {
    this.router.navigate(['/pokemons'])
  }

   
  }

 
  ngOnInit(): void {

  }

}
