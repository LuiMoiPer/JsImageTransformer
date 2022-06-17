import Point from "./Point.js"
import Pixel from "./Pixel.js"

export default class PixelPlacer {
    constructor(height, width, colorProvider) {
        this.height = height;
        this.width = width;
        this.colorProvider = colorProvider;
        this.visited = new Set();
        this.frontier = [new Point(0, 0)];
    }

    get isDone() {
        return (this.frontier.length == 0 || this.colorProvider.isEmpty);
    }

    nextPixel() {
        if (this.isDone) {
            return null;
        }

        let nextPixel = null;
        while (this.frontier.length > 0 && nextPixel == null) {
            let point = this.frontier.shift();
            if (this.visited.has(point)) {
                continue;
            }

            this.visited.add(point);
            nextPixel = new Pixel(point, this.colorProvider.nextColor());

            let neighbors = [
                new Point(point.x + 1, point.y),
                new Point(point.x - 1, point.y),
                new Point(point.x, point.y + 1),
                new Point(point.x, point.y - 1)
            ];

            neighbors.forEach(neighbor => {
                if (neighbor.x >= 0 && neighbor.x < this.width
                    && neighbor.y >= 0 && neighbor.y < this.height
                    && this.visited.has(neighbor) == false
                ) {
                    this.frontier.push(neighbor);
                }
            });
        }
        return nextPixel;
    }
}