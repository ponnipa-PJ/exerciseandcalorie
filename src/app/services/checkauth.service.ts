import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class CheckauthService {
  authenticationState = new BehaviorSubject(false);
  
  constructor(private storage: Storage, private plt: Platform) { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  
  login(id) {
    return this.storage.set(TOKEN_KEY, id).then(() => {
      this.authenticationState.next(true);
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

}
