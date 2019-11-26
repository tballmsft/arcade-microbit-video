// Add your code here
function emoji(img: Image, x: number, y: number, s: number, color: number = 6, awake: boolean = true) {
    // center it
    let height = 10 * s
    let width = 18 * s
    let thick = 4 * s
    let eye = 2
    x = x - width/2
    for (let i = x; i < x + width; i += s) {
        img.fillCircle(i, y, height, color)
    }
    for (let i = x; i < x + width; i += s) {
        img.fillCircle(i, y, height - thick, 0)
    }
    if (awake) {
        img.fillCircle(x, y, eye * s, color)
        img.fillCircle(x + width, y, eye * s, color)
    } else {
        img.fillRect(x - s * eye, y, eye * s * 2, eye * s / 2, color)
        img.fillRect(x + width - s * eye, y, eye * s * 2, eye * s / 2, color)
    }
}

function drumIntro() {
    scene.setBackgroundColor(0)
    scene.setBackgroundImage(microbit)
    let back = image.create(160, 120)
    let spriteBack = sprites.create(back)
    for(let s=0; s<4; s += 0.1) {
        emoji(back, 80, 60, s, 5, false)
        pause(100)
    }
    emoji(back, 80, 60, 4, 5, true)
}