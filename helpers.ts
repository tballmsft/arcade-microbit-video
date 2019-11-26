function scaleUp(img: Image, s: number) {
    let largeOne = image.create(img.width * s, img.height * s)
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