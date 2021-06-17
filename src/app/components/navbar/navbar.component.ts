import { Component, OnInit } from '@angular/core';
import { UiService } from '../../ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  

  constructor(private uiService: UiService) {
    
  }

  ngOnInit() {}
  toggleSidebar() {
    this.uiService.toggleSideBar();
  }
}
