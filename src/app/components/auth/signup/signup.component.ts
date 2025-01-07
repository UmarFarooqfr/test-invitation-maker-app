import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { SharedService } from '../../../services/shared/shared.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, IonicModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  signupForm: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private router: Router
  ) {}
  ngOnInit(): void {
    /**
     * user signup form
     */
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  /**
   * user form value for signup
   */
  onSubmit(): void {
    if (
      this.signupForm.valid &&
      this.signupForm.value.confirmPassword === this.signupForm.value.password
    ) {
      delete this.signupForm.value.confirmPassword;
      this.authService.signup(this.signupForm.value).subscribe(
        (response) => {
          const user  = {
            jwt_token:response.token,
            userName:response.user.username,
            userId:response.user.id,
            userEmail:response.user.email
          }
          this.sharedService.setUser(user)
          console.log('Signup Successful', response);
          this.router.navigate(['/app/home']);
        },
        (error) => {
          console.error('Signup Failed', error);
          this.sharedService.errorToaster(
            'error lossssssssssssssssssssssssscate'
          );
        }
      );
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
