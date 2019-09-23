import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name;
  age;
  gender;
  weight;
  height;
  pic: any;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  click() {
    this.navCtrl.navigateForward(['/home']);
  }

}
