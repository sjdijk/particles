export default class Rect {
    constructor(x,y,){
        this.props = {
            x: x,
            y: y,
                vel: {
                    x: Math.random() * 2 - 6,
                    y: Math.random() * 2 - 10
                },
            color: this.randomColor(),
            gravity: 0.2

        };
    }

    move() {

        this.props.vel.y += this.props.gravity;

        this.props.x += this.props.vel.x;
        this.props.y += this.props.vel.y;

    }

    draw(context) {
        context.fillStyle = this.props.color;

        context.fillRect(
            this.props.x,
            this.props.y,
            100,
            10);

    }

    randomColor() {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
}