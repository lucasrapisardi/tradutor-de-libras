import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>bem vindo</h1>', //Utilizando 'template', daria pra escrever todo o código html nesta área.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}


// import { Component, ElementRef, ViewChild, OnInit, NgZone } from '@angular/core';
// import * as tmImage from '@teachablemachine/image';
// declare const annyang: any;
// @Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
// //  url = 'https://teachablemachine.withgoogle.com/models/inkU1DgEq/';
// //  model;
// //  predictions;
// //  webcam;
// //  maxPredictions;
// //  @ViewChild('video', { static: false }) video: ElementRef;

// //  ngOnInit(){
// //   // var synth = window.speechSynthesis;
// //   // var toSpeak = new SpeechSynthesisUtterance('Ola, tudo bem');

// //   //       synth.speak(toSpeak);

// //   // var SpeechToText = window.speechRecognition || window.webkitSpeechRecognition
// //   // var SpeechToText = window.SpeechRecognitionAlternative || window.webk



// //  }


// //  async ngAfterViewInit() {
// //   const modelURL = this.url + 'model.json';
// //   const metadataURL = this.url + 'metadata.json';
// //   this.model = await tmImage.load(modelURL, metadataURL);
// //   this.maxPredictions = this.model.getTotalClasses();
// //   // Convenience function to setup a webcam
// //   const flip = true; // whether to flip the webcam
// //   this.webcam = new tmImage.Webcam(200, 200, flip);
// //   await this.webcam.setup(); // request access to the webcam
// //   await this.webcam.play();
// //   requestAnimationFrame(() =>
// //    this.loop()
// //   );
// //   this.video.nativeElement.appendChild(this.webcam.canvas);
// //  }
// // async loop() {
// //  this.webcam.update(); // update the webcam frame
// //  this.predictions = await this.model.predict(this.webcam.canvas,  true);
// //  requestAnimationFrame(() =>
// //   this.loop()
// //  );
// //  }



// ngOnInit(): void {

// }


// voiceActiveSectionDisabled: boolean = true;
// 	voiceActiveSectionError: boolean = false;
// 	voiceActiveSectionSuccess: boolean = false;
// 	voiceActiveSectionListening: boolean = false;
// 	voiceText: any;

//   constructor(private ngZone: NgZone){}

// 	initializeVoiceRecognitionCallback(): void {
// 		annyang.addCallback('error', (err) => {
//       if(err.error === 'network'){
//         this.voiceText = "Internet is require";
//         annyang.abort();
//         this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
//       } else if (this.voiceText === undefined) {
// 				this.ngZone.run(() => this.voiceActiveSectionError = true);
// 				annyang.abort();
// 			}
// 		});

// 		annyang.addCallback('soundstart', (res) => {
//       this.ngZone.run(() => this.voiceActiveSectionListening = true);
// 		});

// 		annyang.addCallback('end', () => {
//       if (this.voiceText === undefined) {
//         this.ngZone.run(() => this.voiceActiveSectionError = true);
// 				annyang.abort();
// 			}
// 		});

// 		annyang.addCallback('result', (userSaid) => {
// 			this.ngZone.run(() => this.voiceActiveSectionError = false);

// 			let queryText: any = userSaid[0];

// 			annyang.abort();

//       this.voiceText = queryText;

// 			this.ngZone.run(() => this.voiceActiveSectionListening = false);
//       this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
// 		});
// 	}

// 	startVoiceRecognition(): void {
//     this.voiceActiveSectionDisabled = false;
// 		this.voiceActiveSectionError = false;
// 		this.voiceActiveSectionSuccess = false;
//     this.voiceText = undefined;

// 		if (annyang) {
// 			let commands = {
// 				'demo-annyang': () => { }
// 			};

// 			annyang.addCommands(commands);

//       this.initializeVoiceRecognitionCallback();

// 			annyang.start({ autoRestart: false });
// 		}
// 	}

// 	closeVoiceRecognition(): void {
//     this.voiceActiveSectionDisabled = true;
// 		this.voiceActiveSectionError = false;
// 		this.voiceActiveSectionSuccess = false;
// 		this.voiceActiveSectionListening = false;
// 		this.voiceText = undefined;

// 		if(annyang){
//       annyang.abort();
//     }
// 	}
// }
