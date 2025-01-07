import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(
    private toastController: ToastController,
    private translateService: TranslateService
  ) {}
  /**
   * Displays an error message in a toast notification.
   * @param {string} message - The error message to display.
   */
  async errorToaster(message: string) {
    console.log('message: ', message);
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      color: 'danger',
      mode: 'md',
      icon: 'alert-circle',
    });

    await toast.present();
  }

  /**
   * Displays a success message in a toast notification.
   * @param {string} message - The success message to display.
   */
  async successToaster(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      mode: 'md',
      position: 'bottom',
      color: 'success',
      icon: 'checkmark-circle',
    });

    await toast.present();
  }
  /**
   * Change the application language
   * @param lang The language code to switch to (e.g., 'en', 'es')
   */
  changeLang(lang: string) {
    this.translateService.use(lang);
  }

  /**
   * Checks if the current user is a guest user.
   * @returns {boolean} - Returns `true` if the user is a guest, otherwise `false`.
   */
  isGuestUser(): boolean {
    const isGuestUser = localStorage.getItem('isGuestUser');
    return isGuestUser ? JSON.parse(isGuestUser) : false;
  }

  /**
   * Sets the user data after login or signup.
   * @param {any} user - The user object to store in local storage.
   */
  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Retrieves the user data from local storage.
   * @returns {any} - The user object if it exists, otherwise `null`.
   */
  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  /**
   * Removes a specific item from local storage by key.
   * @param {string} key - The key of the item to remove.
   */
  removeFromStorage(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Checks if the user is authenticated.
   * @returns {boolean} - Returns `true` if a user is logged in or is a guest, otherwise `false`.
   */
  isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    const isGuestUser = this.isGuestUser();
    return user !== null || isGuestUser;
  }
}
