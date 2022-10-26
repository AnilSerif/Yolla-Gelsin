import { Foods } from "./food";

export class CartItem{
    constructor(food:Foods){
        this.food=food;
        
    }
    
    food:Foods;
    quantiy:number=1;
    get price(): number{
        return this.food.price * this.quantiy;
    }
}