import 'rxjs/add/operator/take'

import { Component, OnInit } from '@angular/core'
import * as moment from 'moment'

import { DeckService, shuffle} from './core/service/deck.service'
import LinkedList from 'ts-linked-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  deck = [];

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deck = this.deckService.getDeck()
  }

  shuffle(){
    let shuffledDeck = new LinkedList
    this.deck = shuffle(this.deck, shuffledDeck)
  }
}
