import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Image } from 'src/app/_models/Image';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss']
})
export class ShowImageComponent implements OnChanges {
  @Input() image!: Image;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['image'].currentValue);
  }

}
