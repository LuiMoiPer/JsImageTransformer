export default class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    toString() {
        return this.x + "," + this.y;
    }
}

export function clonePoint(point) {
    return new Point(point.x, point.y);
}