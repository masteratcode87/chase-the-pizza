sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Pizza.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(20)
    music.magicWand.play()
})
let Pizza: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . d f d f d . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . . d f f f d . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . d 8 8 8 8 5 8 8 8 8 d . . 
    . . . . . . 8 2 2 2 8 8 . . . . 
    . . . . . . 8 8 5 8 8 8 . . . . 
    . . . . . . 8 2 2 2 8 8 . . . . 
    . . . . . . 8 8 5 8 8 8 . . . . 
    . . . . . . 8 . . . . 8 . . . . 
    `, SpriteKind.Player)
Pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
controller.moveSprite(mySprite)
