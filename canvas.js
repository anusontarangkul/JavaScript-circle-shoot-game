const canvas = document.querySelector('canvas');

const canvas2d = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = innerHeight;

class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
}