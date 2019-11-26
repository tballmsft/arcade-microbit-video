// Add your code here
function drawEmoji(img: Image, x: number, y: number, s: number, color: number = 6, awake: boolean = true) {
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
    scene.setBackgroundColor(10)
    let emoji = image.create(160, 120)
    let emojiSprite = sprites.create(emoji)
    for(let s=0; s<2; s += 0.1) {
        drawEmoji(emoji, 80, 60, s, 5, false)
        pause(100)
    }
    drawEmoji(emoji, 80, 60, 2, 5, true)
}