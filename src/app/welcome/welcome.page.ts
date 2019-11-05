import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public navCtrl: NavController,
    public loadingController: LoadingController) {

    setTimeout(() => {
      this.navCtrl.navigateForward(['/login']);
      this.showAutoHideLoader();
    }, 2000);
  }

  ngOnInit() {
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
