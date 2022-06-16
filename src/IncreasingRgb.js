import Color from "./Color.js";

const MAX_UINT_32 = 0xFFFFFFFF;

export default class IncreasingRgb {

    constructor() {
        this.currentValue = 0;
    }

    constructor(value) {
        this.currentValue = Number.parseInt(value);
    }

    isEmpty() {
        return this.currentValue >= MAX_UINT_32;
    }

    nextColor() {
        if (!this.isEmpty()) {
            let color = this._getColor();
            this.currentValue += 1;
            return color;
        }
    }

    _getColor() {
        let currentValue16 = this.currentValue.toString(16);
        let r = Number.parseInt(currentValue16.slice(0, 3), 16);
        let g = Number.parseInt(currentValue16.slice(3, 5), 16);
        let b = Number.parseInt(currentValue16.slice(5, 7), 16);
        let a = Number.parseInt(currentValue16.slice(7, 9), 16);
        return new Color(r, g, b, a);
    }
}