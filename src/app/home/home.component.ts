import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  food: any;
getAll(): any {
throw new Error('Method not implemented.');
}
  foods:Foods[]=[];
  constructor(private fs:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params=>{if(params['searchItem'])
      this.foods = this.fs.getAll().filter(food => this.food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.foods=this.fs.getAllFoodByTag(params['tag'])
      else
      this.foods = this.fs.getAll();
    })


    
  }

}
