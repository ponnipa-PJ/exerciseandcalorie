import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CheckauthService } from '../../services/checkauth.service';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.page.html',
  styleUrls: ['./dashboards.page.scss'],
})
export class DashboardsPage implements OnInit {
  data;
  name;
  age;
  gender
  gendervalue;
  weight;
  height;
  wrist;
  brachium;
  waistline;
  hipcircumference;
  pic: any;
  bfc;
  bmr;
  bmi;
  ibm;
  lbm;
  bfw;
  fatdesc;
  burns;
  activity;
  activitytext;
  bmitext;
  bmistatustext;
  cal;
  imgbfc;
  textbfc;
  titlebfc;

  constructor(private storage: Storage,
    private authService: CheckauthService,) { }

  ngOnInit() {
    setTimeout(() => {
      this.getLocal();
    }, 500);
  }

  getLocal() {
    this.storage.get(TOKEN_KEY).then(res => {
      this.data = res
      this.age = this.data.data.age;
      this.gendervalue = this.data.gender
      this.activity = this.data.activity
      this.age = this.data.data.age
      this.weight = this.data.data.weight
      this.height = this.data.data.height
      this.wrist = this.data.data.wrist
      this.brachium = this.data.data.brachium
      this.waistline = this.data.data.waistline
      this.hipcircumference = this.data.data.hipcircumference
      this.calvalue();
      console.log(res);

    })
  }

  calvalue() {
    if (this.gendervalue == 'female') {
      this.gender = 'หญิง'

      //#region BFC
      let pond = this.weight * 2.2
      // console.log(pond);
      let one = (pond * 0.732) + 8.987
      let two = this.wrist / 3.140
      let three = this.waistline * 0.157
      let four = this.hipcircumference * 0.249
      let five = this.brachium * 0.434

      //น้ำหนักส่วนต่างๆของร่างกายที่ไม่ใช่ไขมัน
      this.lbm = one + two - three - four + five
      //น้ำหนักไขมันในร่างกายทั้งหมด
      this.bfw = pond - this.lbm
      //%ไขมัน
      this.bfc = (this.bfw * 100) / pond
      this.bfc = this.bfc.toFixed()
      if (this.bfc < 19) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 15%'
        this.textbfc = 'เป็นระดับที่มีไขมันในร่างกายต่ำมาก ๆ  เห็นกล้ามเนื้อรายละเอียดของกล้ามเนื้อที่ชัดเจนในส่วนของท้อง, ขา, แขน, และหัวไหล่มีเส้นเลือดเล็กน้อยและมีกล้ามเนื้อบางส่วนแยกออกจากกัน  ในส่วนของสะโพก,  บั้นท้าย , และต้นขา  โดยทั่วไปแล้วจะมีขนาดเล็กลงเล็กน้อยเนื่องจากมีไขมันในร่างกายที่น้อยลง'
        this.imgbfc = '../../assets/icon/femalebfc15.png'
      } else if (this.bfc >= 20 && this.bfc < 24) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 20%'
        this.textbfc = 'เป็นกำลังอยู่ในช่วง "พอดี" ไม่ผอมหรือไม่อ้วนจนเกินไป  ส่วนเว้าของสะโพกจะมีมากขึ้นเนื่องจากมีไขมันที่มากขึ้นที่บั้นท้ายและต้นขา'
        this.imgbfc = '../../assets/icon/femalebfc20.png'
      } else if (this.bfc >= 25 && this.bfc < 29) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 25%'
        this.textbfc = 'ไม่ผอมหรือไม่อ้วนจนเกินไป  ส่วนเว้าของสะโพกจะมีน้อยลงเนื่องจากมีไขมันที่มากขึ้นที่บั้นท้ายและต้นขา'
        this.imgbfc = '../../assets/icon/femalebfc25.png'
      } else if (this.bfc >= 30 && this.bfc < 34) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 30%'
        this.textbfc = 'ไขมันจะกระจายไปตามส่วนต่าง ๆ ของร่างกายด้วย ที่สะโพก, บั้นท้าย, และต้นขา ที่จะเริ่มมีขนาดที่อวบขึ้น'
        this.imgbfc = '../../assets/icon/femalebfc30.png'
      } else if (this.bfc >= 35 && this.bfc < 39) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 35%'
        this.textbfc = 'สะโพกเริ่มมีขนาดกว้างมากขึ้น และใบหน้าและลำคอจะดูอวบอิ่มมากขึ้น เส้นรอบวงของสะโพกจะเริ่มมีขนาด  40  นิ้วขึ้นไปและรอบเอวขนาด  32 นิ้วขึ้นไปเช่นกันและเริ่มมีไขมันสะสมที่หน้าท้องเป็นก้อนยื่นออกจากเอว'
        this.imgbfc = '../../assets/icon/femalebfc35.png'
      } else if (this.bfc >= 40 && this.bfc < 44) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 40%'
        this.textbfc = 'ขนาดของสะโพกและต้นขาจะใหญ่ขึ้น เส้นรอบวงของสะโพกสามารถขึ้นไปแตะถึง 42 นิ้วหรืออาจมากกว่า, รอบเอวอาจมีขนาด 52 นิ้ว, และต้นขาอาจใหญ่ถึง 25 นิ้ว'
        this.imgbfc = '../../assets/icon/femalebfc40.png'
      } else if (this.bfc > 45) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกายมากกว่า 45%'
        this.textbfc = 'ผิวหนังจะเริ่มสูญเสียความเรียบแล้วเพราะมีไขมันสะสมที่มากขึ้น เส้นรอบวงของสะโพกอาจพุ่งแตะถึง 45 นิ้วหรือมากกว่า และรอบเอวอาจถึง 35 นิ้ว ซึ่งบางทีความกว้างของสะโพกอาจมีมากกว่าความกว้างของไหล่'
        this.imgbfc = '../../assets/icon/femalebfc45.png'
      }

      console.log(this.imgbfc);
      console.log(this.lbm);
      console.log(this.bfw);
      console.log(this.bfc);

      this.calbfc();
      //#endregion

      //#region BMR
      this.bmr = (10 * this.weight) + 6.25 * this.height - 5 * this.age - 161
      console.log(this.bmr);
      this.calbmr();
      //#endregion

      //#region BMI
      this.bmi = this.weight / ((this.height / 100) * (this.height / 100))
      this.bmi = this.bmi.toFixed()
      console.log(this.bmi);
      this.calbmi();
      //#endregion

      //#region IBW
      this.ibm = this.height - 110
      console.log(this.ibm);
      //#endregion  

    } else {
      this.gender = 'ชาย'

      //#region BFC
      let pond = this.weight * 2.2
      let ones = (pond * 1.082) + 94.42
      let twos = this.waistline * 4.15
      //น้ำหนักส่วนต่างๆของร่างกายที่ไม่ใช่ไขมัน
      this.lbm = ones - twos
      //น้ำหนักไขมันในร่างกายทั้งหมด
      this.bfw = pond - this.lbm
      //%ไขมัน
      this.bfc = (this.bfw * 100) / pond
      this.bfc = this.bfc.toFixed()
      console.log(this.lbm);
      // console.log(bfms);
      console.log(this.bfc);
      this.calbfc();
      if (this.bfc < 11) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 8%'
        this.textbfc = 'เป็นเปอร์เซ็นต์ไขมันของช่วงไดเอ็ต   ใบหน้าของของคุณจะซูบ   เห็นกล้ามเนื้อในทุก ๆ มัดมีความชัดเจนมาก และจะเริ่มเห็นเส้นเลือดชัดมากขึ้น  โดยเฉพาะที่แขน, ขา, และหน้าท้อง เส้นเลือดที่หน้าท้องจะเริ่มเห็นเมื่อมีไขมันในร่างกายที่ต่ำมาก ๆ และทำให้กล้ามเนื้อดูชัดเจนขึ้น'
        this.imgbfc = '../../assets/icon/malebfc8.png'
      } else if (this.bfc >= 12 && this.bfc < 14) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 12%'
        this.textbfc = 'เป็นระดับที่คงตัวของไขมันในร่างกาย สามารถรักษาตัวเลขของเปอร์เซ็นต์ไขมันระดับนี้ได้ โดยไม่ต้องเข้าสู่ช่วงไดเอ็ต  ในระดับนี้จะเริ่มเห็นกล้ามท้องชัดเจนขึ้น'
        this.imgbfc = '../../assets/icon/malebfc12.png'
      } else if (this.bfc >= 15 && this.bfc < 19) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 15%'
        this.textbfc = 'อยู่ในเกณฑ์กำลังพอดีแบบทั่วๆ ไป กล้ามเนื้อเริ่มพอมองเห็นบ้างแต่ยังขาดความชัดของกล้ามเนื้อ เส้นเลือดอาจจะยังไม่ค่อยเห็นมากนักเนื่องจากถูกปกคลุมด้วยชั้นไขมันบาง ๆ'
        this.imgbfc = '../../assets/icon/malebfc15.png'
      } else if (this.bfc >= 20 && this.bfc < 24) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 20%'
        this.textbfc = 'การแยกกันระหว่างกล้ามเนื้อเริ่มจะมองไม่เห็นแล้ว และเส้นเลือดเกือบจะมองไม่เห็นแล้วแต่ยังพอมองเห็นกล้ามเนื้ออยู่นิดหน่อย '
        this.imgbfc = '../../assets/icon/malebfc20.png'
      } else if (this.bfc >= 25 && this.bfc < 29) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 25%'
        this.textbfc = 'ความชัดเจนของกล้ามเนื้อแทบจะมองไม่เห็นแล้ว ไม่มีเส้นเลือด และมองไม่เห็นมัดกล้ามเนื้อเลย เอวเริ่มมีขนาดใหญ่ขึ้นเริ่มมีไขมันที่คอเล็กน้อย ผู้ที่มีไขมันในร่างกายเกินกว่า 25%จะถือว่าเป็นโรคอ้วน '
        this.imgbfc = '../../assets/icon/malebfc25.png'
      } else if (this.bfc >= 30 && this.bfc < 34) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกาย 30%'
        this.textbfc = 'มีไขมันอยู่รอบๆ ทั้งตัวประกอบไปด้วย เอว, หลัง, ต้นขา, และน่อง โดยจะเห็นว่าขนาดของเอวจะใหญ่กว่าสะโพก พุงก้อนกลม ๆ  เริ่มพุ่งออกมาอย่างเห็นได้ชัด '
        this.imgbfc = '../../assets/icon/malebfc30.png'
      } else if (this.bfc > 35) {
        this.titlebfc = 'เปอร์เซ็นต์ไขมันในร่างกายมากกว่า 35%'
        this.textbfc = 'มีไขมันเพิ่มขึ้นไปเรื่อยๆ ไขมันสะสมที่หน้าท้องจนมองเห็นได้ชัด  ย้อยลงมาปิดเอว ร่างกายเริ่มเหมือนคนบวมน้ำ'
        this.imgbfc = '../../assets/icon/malebfc35.png'
      }
      //#endregion

      //#region BMR
      this.bmr = (10 * this.weight) + 6.25 * this.height - 5 * this.age + 5
      console.log(this.bmr);
      this.calbmr();
      //#endregion

      //#region BMI
      this.bmi = this.weight / ((this.height / 100) * (this.height / 100))
      this.bmi = this.bmi.toFixed()
      console.log(this.bmi);
      this.calbmi();
      //#endregion

      //#region IBW
      this.ibm = this.height - 105
      console.log(this.ibm);
      //#endregion      
    }
  }

  calbfc() {
    console.log(this.bfc);
    Number(this.bfc);
    if (this.gendervalue == 'female') {
      if (this.bfc >= 10 && this.bfc <= 13) {
        //ปกติ
        this.fatdesc = "ไขมันค่อนข้างน้อย"
      } else if (this.bfc >= 14 && this.bfc <= 20) {
        this.fatdesc = "ไขมันพอประมาณ"
      } else if (this.bfc >= 21 && this.bfc <= 24) {
        this.fatdesc = "ไขมันพอประมาณ"
      } else if (this.bfc >= 25 && this.bfc <= 31) {
        this.fatdesc = "ไขมันพอประมาณ"
      } else if (this.bfc >= 32) {
        this.fatdesc = "ไขมันมากเกินไป"
      }
    } else {
      if (this.bfc >= 2 && this.bfc <= 5) {
        //ปกติ
        this.fatdesc = "ไขมันค่อนข้างน้อย"
      } else if (this.bfc >= 6 && this.bfc <= 13) {
        this.fatdesc = "ไขมันพอประมาณ"
      } else if (this.bfc >= 14 && this.bfc <= 17) {
        this.fatdesc = "ไขมันพอประมาณ"
      } else if (this.bfc >= 18 && this.bfc <= 25) {
        this.fatdesc = "ไขมันพอประมาณ"
      } else if (this.bfc >= 25) {
        this.fatdesc = "ไขมันมากเกินไป"
      }
    }
    console.log(this.fatdesc);
  }

  calbmr() {
    Number(this.bmr);
    Number(this.activity);
    this.burns = this.bmr * this.activity;
    this.burns = this.burns.toFixed()
    if (this.activity == "1.2") {
      this.activitytext = "ไม่ได้ออกกำลังกายเลย"
    } else if (this.activity == "1.375") {
      this.activitytext = "ออกกำลังกายอาทิตย์ละ 3-5 วัน"
    } else if (this.activity == "1.55") {
      this.activitytext = "ออกกำลังกายอาทิตย์ละ 6-7 วัน"
    } else if (this.activity == "1.725") {
      this.activitytext = "ออกกำลังกายทุกวันเช้าเย็น"
    } else if (this.activity == "1.9") {
      this.activitytext = "ออกกำลังกายอาทิตย์ละ 1-3 วัน"
    }
    Number(this.activity)
    this.cal = this.weight * this.height * this.age * this.activity;
  }

  calbmi() {
    Number(this.bmi);
    if (this.bmi <= 18.50) {
      this.bmitext = "น้ำหนักน้อย";
      this.bmistatustext = "มากกว่าคนปกติ";
    } else if (this.bmi > 18.50 && this.bmi <= 22.90) {
      this.bmitext = "ปกติ"
      this.bmistatustext = "เท่าคนปกติ";
    } else if (this.bmi > 25 && this.bmi <= 29.90) {
      this.bmitext = "อ้วน"
      this.bmistatustext = "อันตรายระดับ 2";
    } else if (this.bmi >= 30) {
      this.bmitext = "อ้วนมาก"
      this.bmistatustext = "อันตรายระดับ 3";
    }
  }

  delete() {
    this.authService.logout();
  }
}
