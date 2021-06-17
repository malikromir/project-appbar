import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../ui.service';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('openCloseSidebar', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(500)
      ]),
      transition(':leave', [
        animate(500, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {
  subscription!: Subscription;
  sideBarstatus = false;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.sideBarstatus = value;
    });
  }

  ngOnInit() {}
}
