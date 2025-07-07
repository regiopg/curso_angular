import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from '../side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from '../side-menu-options/side-menu-options.component';

@Component({
  selector: 'gifs-side-menu',
  templateUrl: './gifs-side-menu.component.html',
  styleUrl: './gifs-side-menu.component.css',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent]
})
export class GifsSideMenuComponent {

}
