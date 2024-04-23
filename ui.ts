import Button = button.Button
import Upgrade = upgrade.Upgrade
import UpgradeButton = upgrade.Upgrade
import Spud = clicker_game.Spud

//% block="UI" weight=102 color=#678f6c icon="\uf00b"
//% groups=["UIManager", "Button"]
namespace ui {
    const buttonArr: Button[] = []
    let cursor: Sprite = null

    // On game update
    game.onUpdate(function () {
        cursorOverlapsButton()
    })

    function getButton(index: number): Button {
        return buttonArr[index]
    }

    export function moveButtonTo(btnIndex: number, x: number, y: number) {
        const index = Math.round(btnIndex)
        // If index is invalid
        if (index < 0 || index >= buttonArr.length) {
            return
        }

        const button = getButton(index)
    }

    export function addSpud(sprite: Sprite): int32 {
        let button = new Spud(sprite)
        buttonArr.push(button)
        return buttonArr.length - 1
    }

    export function addUpgradeButton(sprite: Sprite,
        ppsBonus: number, basePrice: number, priceMod: number, upgradeType: string): int32 {
        const button = new UpgradeButton(sprite, ppsBonus, basePrice, priceMod, upgradeType)
        buttonArr.push(button)
        return buttonArr.length - 1
    }

    /** Sets the player cursor recognised by UI objects
     * Must be set for UI elements to work
     * @param sprite - The sprite of the cursor
     */
    //% block="Set|player|cursor $sprite"
    //% group="UIManager"
    export function setCursor(sprite: Sprite): void {
        cursor = sprite
        controller.moveSprite(cursor)
    }

    // Checks if the cursor overlaps a button
    function cursorOverlapsButton() {
        // Checks if player cursor has been set
        if (cursor == null) {
            return
        }
        // Iterates through each Button object
        for (let button of buttonArr) {
            // Checks if the button overlaps with the cursor
            if (button.sprite.overlapsWith(cursor)) {
                button.showInfo()
            }
        }
    }

    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        onClick()
    })
    // When the player clicks - checks if they clicked a button
    function onClick(): void {
        // Checks if player cursor has been set
        if (cursor == null) {
            return
        }
        // Iterates through each Button object
        for (let button of buttonArr) {
            // Checks if the button overlaps with the cursor
            if (button.sprite.overlapsWith(cursor)) {
                button.trigger()
            }
        }
    }
}