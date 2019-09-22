import { Component } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  content;
  constructor(public navCtrl: NavController,
    public loadingController: LoadingController) {

    setTimeout(() => {
      this.navCtrl.navigateForward(['/login']);
      this.showAutoHideLoader();
    }, 2000);

    // let TIME_IN_MS = 5000;

    // let hideFooterTimeout = setTimeout(() => {
    //   this.showAutoHideLoader();
    //   this.navCtrl.navigateForward(['/login']);
    // }, TIME_IN_MS);
  }

  showAutoHideLoader() {
    this.loadingController.create({
      message: 'loading',
      duration: 10
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds');
      });
    });
  }

}
