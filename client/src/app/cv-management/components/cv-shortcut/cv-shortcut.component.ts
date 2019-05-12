import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../../models/skill';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cv-shortcut',
  templateUrl: './cv-shortcut.component.html',
  styleUrls: ['./cv-shortcut.component.css']
})
export class CvShortcutComponent implements OnInit {

  constructor() { }
  pathimg = environment.API_URL_LABORER_AVATAR;
  @Input('idLaborer') IDLaborer: number;
  @Input('avatar') avatar: String = "";
  @Input('name') name: String = "";
  @Input('description')  description: String = '';
  @Input('arrSkills') arrSkills: Array<Skill> = [];
  ngOnInit() {
  }

}
