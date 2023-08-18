import { Component, OnInit } from '@angular/core';
import { ImagesService } from './_services/images.service';
import { Observable } from 'rxjs';
import { Image } from './_models/Image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  images!: Observable<Image[]>;

  constructor(private serviceImages: ImagesService) {

  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.serviceImages.get().subscribe((res) => {
      this.images = this.serviceImages.images;
    })
  }

  title = 'angular-ssr';
}
