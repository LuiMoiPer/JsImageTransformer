import Point, {clonePoint} from "./Point.js";
import Color, {cloneColor} from "./Color.js";

export default class Pixel {
    constructor(point, color) {
        this._point = new Point(point.x, point.y);
        this._color = new Color(color.r, color.g, color.b, color.a);
    }

    get point() {
        return clonePoint(this._point);
    }

    get color() {
        return cloneColor(this._color);
    }
}