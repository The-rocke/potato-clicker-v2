namespace SpriteKind {
    export const Clickable = SpriteKind.create()
}
info.setScore(0)
clicker_game.setPpc(1)
let Sexy_Potato = sprites.create(assets.image`Sexy Potato`, SpriteKind.Clickable)
Sexy_Potato.setScale(3.5, ScaleAnchor.Middle)
Sexy_Potato.setPosition(30, 60)
let spud = clicker_game.instanceSpud(Sexy_Potato)
let Farm_Upgrade_Clickable = sprites.create(assets.image`Potato Flower`, SpriteKind.Clickable)
let farmUpgrade = upgrade.addUpgrade(
Farm_Upgrade_Clickable,
1,
10,
2,
"sigma"
)
Farm_Upgrade_Clickable.setPosition(120, 60)
let Click_Upgrade_Sprite = sprites.create(assets.image`Cursor Upgrade`, SpriteKind.Clickable)
Click_Upgrade_Sprite.setPosition(80, 60)
let Click_Upgrade = ui.addClickerButton(Click_Upgrade_Sprite, 20)
let Curser = sprites.create(assets.image`Cursor`, SpriteKind.Player)
Curser.changeScale(0.001, ScaleAnchor.Middle)
ui.setCursor(Curser)
