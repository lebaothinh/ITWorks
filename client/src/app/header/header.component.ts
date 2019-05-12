import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignInComponent } from '../laborer-management/components/sign-in/sign-in.component';
import * as $ from 'jquery';
import { environment } from '../../environments/environment';
import { ProfileService } from '../services/profileService';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { Router } from '@angular/router';
import { CVService } from '../services/CVService';
import { NotificationService } from '../services/NotificationService';
import { Notification } from '../models/Notification';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private notificationService: NotificationService, private CVService: CVService, private profileService: ProfileService, private router: Router) { }
  pathimg = environment.API_URL_IMG;
  pathImg = environment.API_URL_COMPANY_LOGO;
  pathRoot = environment.API_URL;
  imgSrc = "";
  openAvatar = false;
  status: boolean;
  arrNotifications: Notification[] = [];

  ngOnInit() {
    $('#updatecvonline').hide();
    $('#createcvonline').hide();
    $('.employers').show();
    $('#notification').hide();
    $('#sign-in').show();
    $('#personalif').hide();
    if (localStorage.getItem('token')) {
      this.profileService.testTypeUser().subscribe((data: string) => {
        this.getNotifications();
        if (data != "") {
          $('#notification').show();
          $('#personalif').show();
          $('#profileem').hide();
          $('#profilela').hide();
          if (data == "true") {
            $('.employers').hide();
            $('#manage-work').show();
            $('#manage-apply-company').show();
            $('#manage-questions').show();
            $('#manage-apply').hide();
            $('#profileem').show();
            this.status = true;
          }
          else {
            this.checkCV();
            $('#sign-in').hide();
            $('#manage-work').hide();
            $('#manage-apply').show();
            $('#profilela').show();
            $('#manage-apply-company').hide();
            $('#manage-questions').hide();
            this.status = false;
          }
          this.getAvatar();
        }
        else {
          localStorage.removeItem('token');
          window.location.reload();
        }
      });
    }
    $(document).click((e: any) => {
      const container = $('.detail');
      const container1 = $('.notificationboard');
      if (!container.is(e.target)) {
        if ($(container).is(':visible')) {
          container.slideToggle('slow');
        }
      }
      if (!container1.is(e.target)) {
        if ($(container1).is(':visible')) {
          container1.slideToggle('slow');
        }
      }
    });
  }

  getNotifications() {
    this.notificationService.GetNotifications().subscribe(data => {
      this.arrNotifications = data;
      console.log(this.arrNotifications);
    }, error => {
      console.log(error);
    });
  }

  showAvatar(event) {
    event.stopPropagation();
    $('.detail').slideToggle('slow');
    this.openAvatar = !this.openAvatar;
  }

  showNotification(event) {
    event.stopPropagation();
    $('.notificationboard').slideToggle('notificationboard');
  }

  checkCV() {
    this.CVService.checkCV().subscribe(data => {
      if (data == true) {
        $('#updatecvonline').show();
        $('#createcvonline').hide();
      }
      else {
        $('#updatecvonline').hide();
        $('#createcvonline').show();
      }
    });
  }

  logout() {
    this.profileService.logout().subscribe(() => {
      window.location.reload();
    }, error => {
      console.log(error);
    });
    localStorage.removeItem('token');
  }
  getAvatar() {
    this.profileService.getAvatar().subscribe(data => {
      if (data == null) {
        console.log("Can't find out a logo!");
      }
      else this.imgSrc = this.pathimg + data;
    })
  }

  openSignInDialog() {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '46%',
      //data: new Customer(this.tenKhachHang,this.ngaySinh,this.gioiTinh,this.email,this.dienThoai,this.moTa,this.cV,this.anhDaiDien)
    });
  }
  openDialogSetting() {

  }

  openDialogChangePassword() {
    this.profileService.getID().subscribe(datar => {
      this.dialog.open(ChangePasswordComponent, {
        width: '28%',
        data: {
          ID: datar,
          Type: this.status
        }
      });
    })
  }
}
