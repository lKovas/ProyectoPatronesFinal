import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from '../../services';


interface Pokemon {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})



export class PokemonsComponent implements OnInit {
  view = false;
  namePokemon: string = '';
  pokemons: Pokemon[] = Array();
  filtersPokemons: any = Array();


  
  constructor(
    public GetPokemonService: GetPokemonService
  ) {

  }

  ngOnInit(): void {
    for (let i = 1; i < 1000; i++) {
      this.GetPokemonService.getInformation(i)
        .subscribe(response => {
          this.pokemons.push(
            { id: i, image: response.sprites.front_default, name: response.name }
          );
        }, error => (alert(error))
        )
    }
  }

  getPokemon() {
    this.filtersPokemons = this.pokemons.filter((item:Pokemon) => item.name.includes(this.namePokemon));
  }
}
