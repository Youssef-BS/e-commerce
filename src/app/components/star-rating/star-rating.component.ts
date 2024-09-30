import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-rating',
  template: `
    <span class="star"
          *ngFor="let star of stars; let i = index"
          (click)="rate(i + 1)">
      <i class="fa" [ngClass]="i < rating ? 'fa-star' : 'fa-star-o'" aria-hidden="true"></i>
    </span>
  `,
  styles: [`
    .star {
      cursor: pointer;
      color: #ffcc00;
    }
    .fa-star-o {
      color: #ccc;
    }
  `]
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
  stars: boolean[] = Array(5).fill(false);

  rate(rating: number) {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
  }
}
