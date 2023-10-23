import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { PokemonsComponent } from './views/pokemons/pokemons.component';
import { HttpClientModule } from '@angular/common/http';
import { GetPokemonService } from './services';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
