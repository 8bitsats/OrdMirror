let symbols;
let symbolSize = 20;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    symbols = [];
    let x = 0;
    for (let i = 0; i <= width / symbolSize; i++) {
        let symbol = new Symbol(x, random(-1000, 0));
        symbols.push(symbol);
        x += symbolSize;
    }
    textSize(symbolSize);
}

function draw() {
    background(0, 150);
    symbols.forEach(symbol => {
        if (symbol.first) {
            fill(180, 255, 180);
        } else {
            fill(0, 255, 70);
        }
        text(symbol.value, symbol.x, symbol.y);
        symbol.rain();
        symbol.setToRandomSymbol();
    });
}

class Symbol {
    constructor(x, y, first, opacity) {
        this.x = x;
        this.y = y;
        this.value;
        this.speed = random(2, 5);
        this.first = first;
        this.opacity = opacity;
        this.switchInterval = round(random(2, 20));
        this.setToRandomSymbol();
    }

    setToRandomSymbol() {
        let charType = round(random(0, 5));
        if (frameCount % this.switchInterval == 0) {
            if (charType > 1) {
                this.value = String.fromCharCode(
                    0x30A0 + round(random(0, 96))
                );
            } else {
                this.value = round(random(0, 9));
            }
        }
    }

    rain() {
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }
}
