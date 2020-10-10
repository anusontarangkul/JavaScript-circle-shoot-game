const canvas = document.querySelector('canvas');

const canvas2d = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = innerHeight;

class Player {

    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw() {
        canvas2d.beginPath();
        canvas2d.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        canvas2d.fillStyle = this.color;
        canvas2d.fill()


    }
}
const player = new Player(100, 100, 30, 'blue')
player.draw();

