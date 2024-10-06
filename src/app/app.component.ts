import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner/banner.component';
import {ComponentLoginComponent} from './components/component-login/component-login.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlanetOrbitComponent } from './components/planet-orbit/planet-orbit.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, ComponentLoginComponent, HeaderComponent, SidebarComponent, PlanetOrbitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-spaceApps';
}
