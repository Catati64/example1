import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/app-header/header/header.component';
import { BodyComponent } from './components/app-body/body/body.component';
import { FooterComponent } from './components/app-footer/footer/footer.component';
import { BannerLeftComponent } from './components/app-banner-left/banner-left/banner-left.component';
import { BannerRightComponent } from './components/app-banner-right/banner-right/banner-right.component';
import { FirstComponent } from './components/first/first/first.component';
import { NotFoundComponent } from './components/notFound/not-found/not-found.component';
import { ObtenerDatosService } from './services/obtener-datos.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatButtonModule } from '@angular/material/button'
import { ObservablesService } from './services/observables.service';
import { AppLoaderComponent } from './components/loader/app-loader/app-loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatGridListModule,
    ReactiveFormsModule,
    CommonModule, 
    MatButtonModule,
    RouterLink,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BannerLeftComponent,
    BannerRightComponent,
    FirstComponent,
    NotFoundComponent,
    AppLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  valores: any = [];
  checkoutForm: any;
  loader: boolean = false;

  constructor(
    private obtenerDatosService: ObtenerDatosService,
    private formBuldier: FormBuilder,
    private observablesService: ObservablesService
  ) {
    this.checkoutForm = this.formBuldier.group({
      name: new FormControl(null, [Validators.minLength(1)]),
      url: new FormControl(null, [Validators.maxLength(3)]),
      email: new FormControl(null, [Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])
    })
  }
  ngOnInit(): void {
    this.getPokemon();
    this.observablesService.loaderObs.subscribe((valor: boolean) => {
      this.loader = valor
    })
  }
  onSubmit(valorFomr:any){
    if(this.checkoutForm.invalid){
      alert('Tas mal pa');
    } else {
      this.valores.push(valorFomr);
      this.checkoutForm.reset;
    }
  }

  getPokemon(): void {
    this.obtenerDatosService.getPokemon("https://pokeapi.co/api/v2/pokemon/")
      .subscribe(
        (items: any) => {
          this.valores = items.results
          setTimeout(() => this.observablesService.actualizarValorLoader(false), 5000)
        }
      );
  }

  funcionejemplo(): void  {
    alert("adios")
  }

  title = 'example1';
}

