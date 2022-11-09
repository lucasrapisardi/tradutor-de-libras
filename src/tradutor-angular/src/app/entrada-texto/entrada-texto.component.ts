import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-texto',
  templateUrl: './entrada-texto.component.html',
  styleUrls: ['./entrada-texto.component.scss'],
})
export class EntradaTextoComponent implements OnInit {
  texto: string;
  imgPath: string;
  showImg = false;
  cont: number = 0;

  constructor() {}

  ngOnInit(): void {}

  reproduzirSom() {
    var synth = window.speechSynthesis;
    var toSpeak = new SpeechSynthesisUtterance(this.texto);

    this.imgPath = 'assets/imagens-sinais/';
    this.imgPath += this.texto.toUpperCase() + '.png';
    this.showImg = true;

    synth.speak(toSpeak);
  }
}
