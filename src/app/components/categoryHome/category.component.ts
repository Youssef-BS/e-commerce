import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'app-home',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class HomeComponent implements OnInit {
  list: string;
  listCategory: Array<Category> = [];
  displayedCategories: Array<Category> = [];

  ngOnInit() {
    this.listCategory = [
      { id: 1, name: 'Men', picture: 'https://i0.wp.com/mylook.com.de/wp-content/uploads/2024/02/spring-2024-streetwear-fashion-trends-for-men.webp?fit=1024%2C1024&ssl=1', nbrLike: 15, available: true },
      { id: 2, name: 'Women', picture: 'https://sondeflor.com/cdn/shop/articles/Black_And_White_Outfits_For_Women.jpg?v=1694519845&width=500', nbrLike: 25, available: true },
      { id: 3, name: 'Kids', picture: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?cs=srgb&dl=pexels-vika-glitter-392079-1620760.jpg&fm=jpg', nbrLike: 10, available: true },
      { id: 4, name: 'Sports', picture: 'https://modelstudents.co.uk/assets/418-GGJJo-1540228694.jpg', nbrLike: 20, available: true },
      { id: 5, name: 'Accessories', picture: 'https://www.lamode.tn/42317-large_default/montre-homme-benyar-5120gm.webp', nbrLike: 8, available: true },
      { id: 6, name: 'Footwear', picture: 'https://citymode.tn/65778-large_default/blazer-mid-77.jpg', nbrLike: 5, available: true }
    ];

this.displayedCategories=this.listCategory.slice(0 , 6) ;

}

}
