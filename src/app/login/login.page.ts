import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    //#region BFC
    //female
    let pond = 40 * 2.2
    // console.log(pond);
    let one = (pond * 0.732) + 8.987
    let two = 5 / 3.140
    let three = 28 * 0.157
    let four = 28 * 0.249
    let five = 5 * 0.434
    let lbm = one + two - three - four + five
    let bfw = pond - lbm
    let per = (bfw * 100) / pond
    // console.log(lbm);
    // console.log(bfw);
    // console.log(per);

    //male
    let ones = (pond * 1.082) + 94.42
    let twos = 28 * 4.15
    let lbms = ones - twos
    let bfms = pond - lbms
    let pers = (bfms * 100) / pond
    // console.log(lbms);
    // console.log(bfms);
    // console.log(pers);

    //#endregion

    //#region BMR

    //female
    let weight = 40
    let height = 160
    let age = 20
    let bmrs = (10 * weight) + 6.25 * height - 5 * age - 161
    // console.log(bmrs);

    //male
    let bmr = (10 * weight) + 6.25 * height - 5 * age + 5
    // console.log(bmr);   

    //#endregion
    
    //#region BMI
    let w = 60
    let h = 160
    let bmi = w / ((h / 100) * (h / 100))
    // console.log(bmi);

    //#endregion
    
    //#region IBW
    //female
    let ibm = h - 110
    console.log(ibm);

    //male
    let ibms = h - 105
    console.log(ibms);

    //#endregion
  }


  click() {
    this.navCtrl.navigateForward(['/profile']);
  }

}
