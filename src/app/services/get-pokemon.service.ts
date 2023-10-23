import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { pokemonInformation } from '../models';
 
@Injectable()
export class GetPokemonService {
  pokemonApiURL = 'https://pokeapi.co/api/v2/pokemon/';


  constructor(private http: HttpClient) { 

  }

  getInformation(request : number) : Observable<pokemonInformation> {
    const pokemonURL = this.pokemonApiURL + request;
    const response = new Observable<pokemonInformation> (
      (observer: { next: (arg0: pokemonInformation) => void; complete: () => void; error: (arg0: any) => void; }) => {
        this.http.get <pokemonInformation> (pokemonURL)
        .subscribe(
          response => {
            observer.next (response);
            observer.complete();
          },
          error => {
            observer.error(error)
          }
        )

      }
    )
    return response;
  }
}
