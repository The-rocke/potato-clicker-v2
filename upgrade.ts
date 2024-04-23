//% blockNamespace=clicker_game 
namespace upgrade {
    export class Upgrade extends Button {
        ppsBonus: number
        basePrice: number // Initial price
        priceMod: number // Percentage price is increased by with each purchase
        upgradeType: string

        price: number = 0
        upgradesOwned: int32 = 0

        constructor(sprite: Sprite,
            ppsBonus: number, basePrice: number, priceMod: number, upgradeType: string) {
            super(sprite)
            this.ppsBonus = ppsBonus
            this.basePrice = basePrice
            this.priceMod = priceMod
            this.upgradeType = upgradeType

            this.price = basePrice
        }

        // On click event
        trigger() {
            if (clicker_game.scoreF >= this.price) {
                this.purchaseUpgrade()
            }
        }

        purchaseUpgrade() {
            clicker_game.increasePps(this.ppsBonus)
            clicker_game.modifyScore(this.price * -1)
            this.upgradesOwned++
            this.price = this.basePrice * this.upgradesOwned * this.priceMod
        }
        showInfo() {
            this.sprite.sayText("Price: " + this.price + " Adds " + this.ppsBonus + " pps", 3)
        }
    }

    /**Adds a new upgrade (and the corresponding button)
     * @param sprite - The texture of the button
     * @param ppsBonus - The increased potatoes per second it provides
     * @param upgradeType - The 'type' of upgrade it is
     * @param basePrice - The price of the upgrade (before modifications)
     * @param priceMod - Modifier to price with each purchasse
     */
    //% block="Add Upgrade| sprite:$sprite| ppsBonus:$ppsBonus basePrice:$basePrice priceMod:$priceMod type:$upgradeType"
    //% group="Upgrade"
    export function addUpgrade(sprite: Sprite,
        ppsBonus: number, basePrice: number, priceMod: number, upgradeType: string): int32 {
        return ui.addUpgradeButton(sprite, ppsBonus, basePrice, priceMod, upgradeType)
    }
}// Add your code here
