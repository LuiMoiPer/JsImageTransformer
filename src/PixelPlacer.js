import Point from "./Point.js"
import Pixel from "./Pixel.js"

export default class PixelPlacer {
    constructor(height, width, colorProvider, neighborProvider) {
        this.height = height;
        this.width = width;
        this.colorProvider = colorProvider;
        this.neighborProvider = neighborProvider;
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
            if (this.visited.has(point.toString())) {
                continue;
            }

            this.visited.add(point.toString());
            nextPixel = new Pixel(point, this.colorProvider.nextColor());

            let neighbors = this.neighborProvider.neighbors;

            neighbors.forEach(neighbor => {
                let newNeighbor = new Point(point.x + neighbor.x, point.y + neighbor.y);
                if (newNeighbor.x >= 0 && newNeighbor.x < this.width
                    && newNeighbor.y >= 0 && newNeighbor.y < this.height
                    && this.visited.has(newNeighbor.toString()) == false
                ) {
                    this.frontier.push(newNeighbor);
                }
            });
        }

        return nextPixel;
    }
}