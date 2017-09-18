import Dot from "./dot.es6";
import Rect from "./rect.es6";

class Controller {
    constructor() {
        this.dots = [];
        this.rect = [];

        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");

        this.mousePos = {
            x: 0,
            y: 0
        };

        window.addEventListener("mousemove", e => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
        });

        this.loop();
    }

    loop() {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.dots.push(new Dot(this.mousePos.x, this.mousePos.y));

        this.rect.push(new Rect(this.mousePos.x, this.mousePos.y));



        this.dots.forEach(dot => {
            dot.move();
            dot.draw(this.context);
        });
        this.rect.forEach(rect => {
            rect.move();
            rect.draw(this.context);
        });

        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}

var c = new Controller();