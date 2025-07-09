import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from "../../components/side-menu-header/side-menu-header.component";
import { SideMenuOptionsComponent } from "../../components/side-menu-options/side-menu-options.component";
import { GifsSideMenuComponent } from "../../components/gifs-side-menu/gifs-side-menu.component";

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
  imports: [RouterOutlet,  GifsSideMenuComponent]
})
export default class DashboardPageComponent {

}
