import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  NgZone,
} from '@angular/core';
import * as tmImage from '@teachablemachine/image';

@Component({
  selector: 'app-entrada-video',
  templateUrl: './entrada-video.component.html',
  styleUrls: ['./entrada-video.component.scss'],
})
export class EntradaVideoComponent implements OnInit {
  url = 'https://teachablemachine.withgoogle.com/models/_2Zj_PRjb/';
  // url = 'https://teachablemachine.withgoogle.com/models/inkU1DgEq/';
  // url = 'https://teachablemachine.withgoogle.com/models/ZFXy1A5S9/';
  model;
  predictions;
  webcam;
  maxPredictions;
  textoReconhecido: string = "";
  @ViewChild('video', { static: false }) video: ElementRef;

  ngOnInit() {

  }

  async ngAfterViewInit() {
    const modelURL = this.url + 'model.json';
    const metadataURL = this.url + 'metadata.json';
    this.model = await tmImage.load(modelURL, metadataURL);
    this.maxPredictions = this.model.getTotalClasses();
    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    this.webcam = new tmImage.Webcam(200, 200, flip);
    await this.webcam.setup(); // request access to the webcam
    await this.webcam.play();
    requestAnimationFrame(() => this.loop());
    this.video.nativeElement.appendChild(this.webcam.canvas);
  }
  async loop() {
    this.webcam.update(); // update the webcam frame
    this.predictions = await this.model.predict(this.webcam.canvas, true);
    requestAnimationFrame(() => this.loop());

    var arrayProbability = new Array();
    this.predictions.forEach(element => {
      arrayProbability.push(element.probability);
    });
    var maiorProbability = Math.max(...arrayProbability);
    // var maiorProbability = Math.max.apply(null, arrayProbability);
    var item = this.predictions.find(element =>
      element.probability == maiorProbability);
    this.textoReconhecido = item.className;
  }
}
