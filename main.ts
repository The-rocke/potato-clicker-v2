namespace SpriteKind {
    export const Clickable = SpriteKind.create()
}
info.setScore(0)
clicker_game.setPpc(1)
let Sexy_Potato = sprites.create(assets.image`Sexy Potato`, SpriteKind.Clickable)
Sexy_Potato.setScale(3.5, ScaleAnchor.Middle)
Sexy_Potato.setPosition(30, 60)
let spud = clicker_game.instanceSpud(Sexy_Potato)
let farmUpgrade = 0
