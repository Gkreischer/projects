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
  pageNumber: number = 1;

  constructor(private serviceImages: ImagesService) {

  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.serviceImages.get().subscribe((res) => {
      console.log(res)
      this.images = this.serviceImages.images;
    })
  }

  previousPage() {

    if(this.pageNumber === 1) return;

    this.pageNumber--;
    this.serviceImages.get((this.pageNumber).toString()).subscribe((res) => {
      this.images = this.serviceImages.images;
    })
  }

  nextPage() {
    this.pageNumber++;
    console.log(this.pageNumber)
    this.serviceImages.get((this.pageNumber).toString()).subscribe((res) => {
      this.images = this.serviceImages.images;
    })
  }

  trackByImage(index: number, image: Image) {
    return image.id;
  }

  title = 'angular-ssr';
}
