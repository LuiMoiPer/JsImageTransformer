import Point from "./Point.js";

export default class NeighborProvider {
    constructor() {
        this._neighbors = [];
        this._shuffle = false;
    }

    addPoint(point) {
        this._neighbors.push(point);
    }

    addPoints(points) {
        this._neighbors = this._neighbors.concat(points);
    }

    get neighbors() {
        if (this.shuffle == false) {
            return this._neighbors.slice();
        }
        else {
            return this._shuffleNeighbors();
        }
    }

    set doesShuffle(value) {
        this._shuffle = Boolean(value);
    }

    get doesShuffle() {
        return this._shuffle;
    }

    _shuffleNeighbors() {
        let temp = null;
        let shuffled = this._neighbors.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            let toSwap = Number.parseInt(Math.random() * (i + 1));
            temp = shuffled[i];
            shuffled[i] = shuffled[toSwap];
            shuffled[toSwap] = temp;
        }
        return shuffled;
    }
}

export function cardinal() {
    return [
        new Point(0, 1),
        new Point(1, 0),
        new Point(0, -1),
        new Point(-1, 0)
    ];
};

export function ordinal() {
    return [
        new Point(1, 1),
        new Point(1, -1),
        new Point(-1, 1),
        new Point(-1, -1)
    ];
};

export function octagonal() {
    return cardinal().concat(ordinal());
};