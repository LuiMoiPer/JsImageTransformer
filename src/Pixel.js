import Point from "./Point.js";
import Color from "./Color.js";

export default class Pixel {
    constructor(point, color) {
        this._point = structuredClone(point);
        this._color = color;
    }

    get point() {
        return structuredClone(this._point);
    }

    get color() {
        return structuredClone(this._color);
    }
}