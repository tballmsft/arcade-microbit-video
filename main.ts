let him = img`
    . . . . . 5 5 5 5 5 5 5 . . . . .
    . . . . 5 . . . . . . . 5 . . . .
    . . . . 5 . 5 . . . 5 . 5 . . . .
    . . . . 5 . . . . . . . 5 . . . .
    . . . . . 5 5 5 5 5 5 5 . . . . .
    . . . . . . . . . . . . . . . . .
    . . . . . . . . 2 . . . . . . . .
    . . . . . . . . 2 . . . . . . . .
    . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . .
    2 . . . 2 . . . 2 . . . 2 . . . 2
    2 . . . 2 . . . 2 . . . 2 . . . 2
    . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . .
    . . . . . . . . 2 . . . . . . . .
    . . . . . . . . 2 . . . . . . . .
    . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . .
    . . . . 2 . . . 2 . . . 2 . . . .
    . . . . 2 . . . 2 . . . 2 . . . .
    . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . .
    2 . . . . . . . . . . . . . . . 2
    2 . . . . . . . . . . . . . . . 2
`

let he = sprites.create(him, SpriteKind.Player)
he.setFlag(SpriteFlag.Invisible, true)

let her = img`
    . . . 7 7 7 7 7 7 7 . . .
    . . 7 . . . . . . . 7 . .
    . . 7 . 7 . . . 7 . 7 . .
    . . 7 . . . . . . . 7 . .
    . . . 7 7 7 7 7 7 7 . . .
    . . . . . . . . . . . . .
    . . . . . . 2 . . . . . .
    . . . . . . 2 . . . . . .
    . . . . . . . . . . . . .
    . . . . . . . . . . . . .
    2 . . 2 . . 2 . . 2 . . 2
    2 . . 2 . . 2 . . 2 . . 2
    . . . . . . . . . . . . .
    . . . . . . . . . . . . .
    . . . . . . 2 . . . . . .
    . . . . . . 2 . . . . . .
    . . . . . . . . . . . . .
    . . . . . . . . . . . . .
    . . . 2 . . 2 . . 2 . . .
    . . . 2 . . 2 . . 2 . . .
    . . . . . . . . . . . . .
    . . . . . . . . . . . . .
    2 . . . . . . . . . . . 2
    2 . . . . . . . . . . . 2
`
let she = sprites.create(her, SpriteKind.Player)
she.x = 40
she.setFlag(SpriteFlag.Invisible, true)


function scaleUp(img: Image, s: number) {
    let largeOne = image.create(img.width*s,img.height*s)
    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {
            let color = img.getPixel(x, y);
            let xs = s * x 
            let ys = s * y;
            largeOne.fillRect(xs, ys, s, s, color)
        }
    }
    return largeOne;
}

let she2 =sprites.create(scaleUp(she.image,2))

she2.y  =30
she2.x  = 130
scene.setBackgroundColor(0)

let he2 = sprites.create(scaleUp(he.image, 3))

function emoji(img: Image, x: number, y: number, s: number, awake: boolean=true) {
    let height = 10 * s
    let width = 18 * s
    let thick = 4 *s 
    let eye = 2
    for(let i=x;i<x+width;i += s) {
        img.fillCircle(i, y, height, 1)
    }
    for (let i = x; i < x+width; i += s) {
        img.fillCircle(i, y, height-thick, 0)
    }
    if (awake) {
        img.fillCircle(x, y, eye*s, 1)
        img.fillCircle(x+width, y, eye*s, 1)
    } else {
        img.fillRect(x-s*eye, y, eye * s *2, eye*s/2, 1)
        img.fillRect(x + width-s*eye, y, eye*s*2, eye * s/2, 1)
    }
}

let back = image.create(160, 120)
emoji(back, 60, 60 , 2, false)
scene.setBackgroundImage(back)

