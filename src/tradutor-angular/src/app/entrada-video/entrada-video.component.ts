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
  url = 'https://teachablemachine.withgoogle.com/models/inkU1DgEq/';
  model;
  predictions;
  webcam;
  maxPredictions;
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
  }
}
