namespace SpriteKind {
    export const Clickable = SpriteKind.create()
}
info.setScore(0)
clicker_game.setPpc(1)
let Sexy_Potato = sprites.create(assets.image`Sexy Potato`, SpriteKind.Clickable)
Sexy_Potato.setScale(3.5, ScaleAnchor.Middle)
Sexy_Potato.setPosition(30, 60)
let spud = clicker_game.instanceSpud(Sexy_Potato)
let Farm_Upgrade_Clickable = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 7 7 7 . . . . . . . . . 
    . . 4 e 4 . 7 7 . . . . . . . . 
    . 4 4 4 4 4 . 7 7 . . . . . . . 
    . 4 e e 4 e . . 7 . . . . . . . 
    . . 4 e 4 4 . . 7 . . . . . . . 
    . . . 4 4 . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    `, SpriteKind.Clickable)
let farmUpgrade = upgrade.addUpgrade(
Farm_Upgrade_Clickable,
1,
10,
2,
"Sigma"
)
Farm_Upgrade_Clickable.setPosition(120, 60)
let Curser = sprites.create(assets.image`Curser`, SpriteKind.Player)
Curser.changeScale(0.001, ScaleAnchor.Middle)
ui.setCursor(Curser)
