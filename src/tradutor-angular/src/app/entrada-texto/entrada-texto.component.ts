import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-texto',
  templateUrl: './entrada-texto.component.html',
  styleUrls: ['./entrada-texto.component.scss'],
})
export class EntradaTextoComponent implements OnInit {
  texto: string;

  constructor() {}

  ngOnInit(): void {}

  reproduzirSom() {
    var synth = window.speechSynthesis;
    var toSpeak = new SpeechSynthesisUtterance(this.texto);

    synth.speak(toSpeak);
  }
}
