//% block="Clicker" weight=103 color=#c7a844 icon="\uf245"
//% groups=["Score", "Game", "Upgrade"]
namespace clicker_game {
    export let ppc: number = 0.5 // Potatoes per click
    export let pps: number = 0 // Potatoes per second
    export let scoreF: number = 0 // Floating point value of score
    let ppu: number = 0 // Potatoes per game update

    export class Spud extends Button {
        trigger() {
            clicker_game.onSpudClick()
        }
    }

    // On game update
    game.onUpdate(function () {
        // Adds passive ppu to score
        scoreF += ppu
        updateScoreDisplay()
    })

    // When the spud is clicked
    export function onSpudClick() {
        scoreF += ppc
        updateScoreDisplay()
    }

    export function increasePps(bonusPps: number) {
        pps += bonusPps
        recalculatePpu()
    }
    function recalculatePpu() {
        ppu = pps / 60
    }

    // Adds a value to the score
    export function modifyScore(mod: number) {
        scoreF += mod
        updateScoreDisplay
    }

    // Updates the displayed score
    function updateScoreDisplay() {
        info.setScore(Math.floor(scoreF))
    }

    /** Instances a new clickable Spud object and returns its index
    * @param sprite - The texture of the Spud
    */
    //% block="Instance|clickable|Spud $sprite" group="Button"
    //% group="Game"
    export function instanceSpud(sprite: Sprite): int32 {
        return ui.addSpud(sprite)
    }

    /**Sets the potatoes per click
     * @param newPpc - The new potatoes per click
     */
    //% block="Set ppc to $newPpc" group="Game" weight=0
    export function setPpc(newPpc: number) {
        ppc = newPpc
    }
    /**Changes the potatoes per click by an amount
     * @param mod - How much ppc changes by
     */
    //% block="Change ppc by $mod" group="Game" weight=1
    export function changePpcBy(mod: number) {
        ppc += mod
    }

    /**Returns the precise (floating point value) of the score
     */
    //%block="Precise Score" group="Score"
    export function getPreciseScore() {
        return scoreF
    }
    /**Returns the current potatoes per click
     */
    //%block="Ppc" group="Game"
    export function getPpc() {
        return ppc
    }
    /**Returns the current potatoes per second
     */
    //%block="Pps" group="Game"
    export function getPps() {
        return pps
    }
    /**Returns the current potatoes per update
     */
    //%block="Ppu" group="Game"
    export function getPpu() {
        return ppu
    }
}