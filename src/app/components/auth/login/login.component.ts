import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../../../services/auth/auth.service';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, IonicModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup | any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private router: Router
  ) {
    /**
     * user login form
     */
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  /**
   * user form value for login
   */
  onSubmit() {
    console.log('(this.loginForm: ', this.loginForm);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          const user  = {
            jwt_token:response.token,
            userName:response.user.username,
            userId:response.user.id,
            userEmail:response.user.email
          }
          this.sharedService.setUser(user)
          this.router.navigate(['/app/home']);
          console.log('Login Successful', response);
        },
        (error) => {
          console.error('Login Failed', error);
          this.sharedService.errorToaster(
            'error lossssssssssssssssssssssssscate'
          );
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
      console.log('Form is not valid');
    }
  }
}
