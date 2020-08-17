import { Component, OnInit } from '@angular/core';
import { CheckauthService } from '../services/checkauth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pageservice = [
    {
      title: 'Dashboard',
      url: '/menu/dashboard',
      icon: 'home'
    },
    {
      title: 'แก้ไขข้อมูล',
      url: '/menu/profile',
      icon: 'create'
    }
  ];

  constructor(private authService: CheckauthService,) {
   }

  ngOnInit() {
  }

}
