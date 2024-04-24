namespace button {
    // ALL BUTTONS INHERIT FROM BASE BUTTON CLASS
    export abstract class Button {
        sprite: Sprite
        constructor(sprite: Sprite) {
            this.sprite = sprite
        }

        trigger(): void { }
        showInfo(): void { }
    }
    export class ClickUpgrade extends Button {
        price: number

        constructor(sprite: Sprite, price: number) {
            super(sprite)
            this.price = price
        }

        trigger() { 
            if(this.price <= clicker_game.scoreF) { 
                clicker_game.ppc += 1
                clicker_game.modifyScore(this.price*-1)
                this.price *= 4
                
            }
            
        }
        showInfo(){
            this.sprite.sayText("Price: " + this.price + " Adds 1 ppc", 3)
        }
    }
} 