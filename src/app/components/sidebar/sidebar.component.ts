import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../ui.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('openCloseSidebar', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(500),
        query('@linkAnim', [animateChild()])
      ]),
      transition(':leave', [
        animate(500, style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('linkAnim', [
      transition('*=>*', [
        query('#anim', style({ opacity: 0, transform: 'translateY(-25px)' })),
        query(
          '#anim',
          stagger('500ms', [
            animate('500ms', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        )
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
