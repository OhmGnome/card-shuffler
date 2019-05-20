import 'rxjs/add/operator/map'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { environment } from '../../../environments/environment.prod'
import LinkedList from 'ts-linked-list';

@Injectable()
export class DeckService {
  private deck = [] as string[]

  constructor() {
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

      for (let suit in suits) {
          for (let value in values) {
              this.deck.push(`${values[value]} of ${suits[suit]}`);
          }
      }
  }

  public getDeck(){
      return this.deck
  }
}

export function shuffle(deck: string[], shuffledDeck: LinkedList){
  const shuffleProxy = () => {
    return shuffle(deck, shuffledDeck)
  }

  if (!shuffledDeck.length){
    shuffledDeck.push(deck[0])
    return shuffleProxy()
  }

  deck.forEach(card => {
    let index = Math.floor(Math.random() * shuffledDeck.length)
    shuffledDeck.insertAt(index, card)
  })

  return shuffledDeck.toArray()
}