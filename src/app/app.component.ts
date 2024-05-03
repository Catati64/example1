import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/app-header/header/header.component';
import { BodyComponent } from './components/app-body/body/body.component';
import { FooterComponent } from './components/app-footer/footer/footer.component';
import { BannerLeftComponent } from './components/app-banner-left/banner-left/banner-left.component';
import { BannerRightComponent } from './components/app-banner-right/banner-right/banner-right.component';
import { FirstComponent } from './components/first/first/first.component';
import { NotFoundComponent } from './components/notFound/not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, BodyComponent, FooterComponent, BannerLeftComponent, BannerRightComponent, FirstComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example1';
}

