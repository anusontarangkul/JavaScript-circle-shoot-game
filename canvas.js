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
    draw() {
        canvas2d.beginPath();
        canvas2d.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        canvas2d.fillStyle = this.color;
        canvas2d.fill()


    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        canvas2d.beginPath();
        canvas2d.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        canvas2d.fillStyle = this.color;
        canvas2d.fill()
    }
}
const x = canvas.width / 2;
const y = canvas.height / 2;

const player = new Player(x, y, 30, 'blue')
player.draw();

addEventListener('click', (event) => {
    const projectile = new Projectile(event.clientX, event.clientY, 5, 'red', null)


    projectile.draw();
});
