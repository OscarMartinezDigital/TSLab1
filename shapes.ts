abstract class Shape {
    color: String;

    constructor(color: string){
        this.color = color
    }

    abstract getArea():number;
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number){
        super(color);
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2
    }
}

class Rectangle extends Shape{
    width: number;
    height: number;

    constructor(color: string, width:number, heigth:number){
        super(color)
        this.width = width
        this.height = heigth
    }

    getArea(): number {
        return this.width * this.height
    }
}

const redCircle = new Circle('red',5);
console.log(redCircle.getArea());

const blueRectangle = new Rectangle('blue',4,6);
console.log(blueRectangle.getArea());


