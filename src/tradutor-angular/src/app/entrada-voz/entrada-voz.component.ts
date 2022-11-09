import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, NgZone } from '@angular/core';
declare const annyang: any;

@Component({
  selector: 'app-entrada-voz',
  templateUrl: './entrada-voz.component.html',
  styleUrls: ['./entrada-voz.component.scss'],
})
export class EntradaVozComponent implements OnInit {

  voiceActiveSectionDisabled: boolean = true;
  voiceActiveSectionError: boolean = false;
  voiceActiveSectionSuccess: boolean = false;
  voiceActiveSectionListening: boolean = false;
  voiceText: any;
  imgPath = "assets/imagens-sinais/";
  showImg = false;
  cont: number = 0;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {}

  initializeVoiceRecognitionCallback(): void {
    annyang.addCallback('error', (err) => {
      if (err.error === 'network') {
        this.voiceText = 'Internet is require';
        annyang.abort();
        this.ngZone.run(() => (this.voiceActiveSectionSuccess = true));
      } else if (this.voiceText === undefined) {
        this.ngZone.run(() => (this.voiceActiveSectionError = true));
        annyang.abort();
      }
    });

    annyang.addCallback('soundstart', (res) => {
      this.ngZone.run(() => (this.voiceActiveSectionListening = true));
    });

    annyang.addCallback('end', () => {
      if (this.voiceText === undefined) {
        this.ngZone.run(() => (this.voiceActiveSectionError = true));
        annyang.abort();
      }
    });

    annyang.addCallback('result', (userSaid) => {
      this.ngZone.run(() => (this.voiceActiveSectionError = false));

      let queryText: any = userSaid[0];

      annyang.abort();

      this.voiceText = queryText;

      if (this.cont == 0){
        var text: string = this.voiceText.toString().toUpperCase();
        text = text.includes('LETRA') ? text.substring(6) : text;
        this.imgPath += (text + ".png");
        this.showImg = true;
      }

      this.cont++;

      this.ngZone.run(() => (this.voiceActiveSectionListening = false));
      this.ngZone.run(() => (this.voiceActiveSectionSuccess = true));
    });
  }

  startVoiceRecognition(): void {
    this.cont = 0;
    this.imgPath = "assets/imagens-sinais/";
    this.showImg = false;

    this.voiceActiveSectionDisabled = false;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceText = undefined;

    if (annyang) {
      let commands = {
        'demo-annyang': () => {},
      };

      annyang.addCommands(commands);

      this.initializeVoiceRecognitionCallback();

      annyang.start({ autoRestart: false });
    }
  }

  closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceActiveSectionListening = false;
    this.voiceText = undefined;

    if (annyang) {
      annyang.abort();
    }
  }
}
