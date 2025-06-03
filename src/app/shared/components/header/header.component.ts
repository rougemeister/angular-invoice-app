import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { ProfileComponent } from "../profile/profile.component";
import { ThemeTogglerComponent } from "../theme-toggler/theme-toggler.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, ProfileComponent, ThemeTogglerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
