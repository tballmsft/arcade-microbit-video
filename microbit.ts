// Add your code here

let microbit = img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f . . .
    . . 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 f 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f . .
    . 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 5 5 5 5 5 f f f 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 5 5 5 5 f f f f 5 5 f f f f f f f 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 5 5 5 f f f f f 5 f f f f f f f 5 f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 5 5 f f f f f f f f f f f f f f 5 f 5 f f f 5 f 5 f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 5 f f f f f f f f f f f f f f f 5 f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f .
    . 5 5 5 f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f .
    . 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . 5 f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 f f f f f .
    . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 f f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f 5 f f f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f c b b b b c f f f f f f f f f f f f f f f f f f f f f f f f f f f c b b b b c f f f f f .
    . f f f f b b f f b b f f f f f f f f f f f f f f f f f f f f f f f f f f f b b f f b b f f f f f .
    . f f 8 f b f f f f b f f f f f c f f f c f f f c f f f c f f f c f f f f f b f f f f b f 8 f f f .
    . f f f f b f f f f b f f f f f c f f f c f f f c f f f c f f f c f f f f f b f f f f b f f f f f .
    . f f f f b b f f b b f f f f f f f f f f f f f f f f f f f f f f f f f f f b b f f b b f f f f f .
    . f f f f c b b b b c f f f f f f f f f f f f f f f f f f f f f f f f f f f c b b b b c f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f f 5 f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . f f f f 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f f f f f f f f f f f c f f f c f f f c f f f c f f f c f f f f f f f f f f f f f f f f .
    . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f .
    . f f f f 4 4 4 4 f f f f f 4 4 4 4 f f f f f 4 4 4 4 f f f f f 4 4 4 4 f f f f f 4 4 4 4 f f f f .
    . f f f 4 4 f f 4 4 f f f 4 4 f f 4 4 f f f 4 4 f f 4 4 f f f 4 4 f f 4 4 f f f 4 4 f f 4 4 f f f .
    . f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f .
    . f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f 4 f f f f 4 f f f .
    . 4 4 f 4 4 f f 4 4 f 4 f 4 4 f f 4 4 f 4 f 4 4 f f 4 4 f 4 f 4 4 f f 4 4 f 4 f 4 4 f f 4 4 f 4 4 .
    . 4 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 4 .
    . 4 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 4 .
    . . 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 . .
    . . . f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f 4 f 4 4 4 4 4 4 f . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
` 


let misc = img`
    . . . . . . . . . . . . . . . . . . . . . . . . . .
    . 5 5 . . . . . . . . . . . . . . . . . . . . . . .
    . . 5 5 . . . . . . . . . . . 5 . . . 5 . . . . . .
    . . . 5 5 . . . . . . . . . . 5 5 . . 5 5 . . . . .
    . . . 5 5 . . . . . . . . . . 5 5 5 . 5 5 5 . . . .
    . . . . 5 5 . . . . . . . . . 5 5 5 5 5 5 5 5 . . .
    . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 5 . . 5 . . .
    . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
    . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . .
    . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . .
    . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
    . . . . . 5 5 . . 5 5 . . . 5 5 . . 5 5 . . . . . .
    . . . . . 5 5 . . 5 5 . . . 5 5 . . 5 5 . . . . . .
    . . . . . 5 5 5 . 5 5 5 . . 5 5 5 . 5 5 5 . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . .
` 
