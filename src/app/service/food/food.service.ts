import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
 

  constructor() {}


  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id == id)!;
  }


  getAllFoodByTag(tag:string):Foods[]{
    return tag == "All"?
    this.getAll():this.getAll().filter(food=>food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
      {name:'All',count:8},
      {name:'FastFood', count:6},
      {name:'Pizza',count:4},
      {name:'Lunch',count:3},
      {name:'SlowFood', count:2},
      {name:'Hamburger',count:1},
      {name:'Fry',count:1},
      {name:'Soup',count:1},
      {name:'Dessert',count:1}
    ];
  }
  getAll():Foods[]{
    return[
        {
         id:1,
         name:'Hamburger',
         cookTime: '10-20',
         price:10,
         favorite:false,
         origins:['U.S'],
         star:4.5,
         imageUrl:'assets/Image/Foods/food-1.jpg',
         tags:['FastFood','Hamburger','Lunch'] ,
        },
        {
          id:2,
          name:'Pizza',
          cookTime:'20-30',
          price:20,
          favorite:true,
          origins:['Italy'],
          star:4.2,
          imageUrl:'assets/Image/Foods/food-2.jpg',
          tags:['FastFood','Pizza','Dinner'],
        },
        {
          id:3,
          name:'Meatball',
          cookTime:'30-35',
          price:25,
          favorite:false,
          origins:['Turkey'],
          star:4.5,
          imageUrl:'assets/Image/Foods/food-3.jpg',
          tags:['FastFood','Meatball','Dinner'],
        },
        {
          id:4,
          name:'Fish',
          cookTime:'25-30',
          price:20,
          favorite:true,
          origins:['England'],
          star:4.0,
          imageUrl:'assets/Image/Foods/food-4.jpg',
          tags:['FastFood','Fish','Lunch'],
        },
        {
          id:5,
          name:'Soup',
          cookTime:'10-15',
          price:15,
          favorite:false,
          origins:['Denmark'],
          star:3.0,
          imageUrl:'assets/Image/Foods/food-5.jpg',
          tags:['SlowFood','Soup','Dinner'],
        },
        {
          id:6,
          name:'Dessert',
          cookTime:'5-10',
          price:20,
          favorite:true,
          origins:['Greek'],
          star:3.0,
          imageUrl:'assets/Image/Foods/food-6.jpg',
          tags:['SlowFood','Dessert','Lunch'],
        },
        {
          id:7,
          name:'Salad',
          cookTime:'0-5',
          price:25,
          favorite:true,
          origins:['Italy'],
          star:5.0,
          imageUrl:'assets/Image/Foods/food-7.jpg',
          tags:['SlowFood','Salad','Lunch'],
        },
        {
          id:8,
          name:'French fries',
          cookTime:'5-10',
          price:10,
          favorite:false,
          origins:['France'],
          star:2.0,
          imageUrl:'assets/Image/Foods/food-8.jpg',
          tags:['FastFood','Fry','Lunch'],
        },
        {
          id:9,
          name:'Pide',
          cookTime:'30-35',
          price:35,
          favorite:true,
          origins:['Turkey'],
          star:5.0,
          imageUrl:'assets/Image/Foods/food-9.jpg',
          tags:['FastFood','Pide','Dinner'],
        },
    ]
  }
}
