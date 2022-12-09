import Color from "./Color.js";

const MAX_UINT_32 = 0xFFFFFFFF;

export default class IncreasingRgb {

    constructor() {
        this.currentValue = 0;
    }

    get isEmpty() {
        return this.currentValue >= MAX_UINT_32;
    }

    nextColor() {
        if (!this.isEmpty) {
            let color = this._getColor();
            this.currentValue += 256;
            return color;
        }
    }

    _getColor() {
        let stringValue = this.currentValue.toString(16);
        stringValue = stringValue.padStart(8, "0");
        
        let r = Number.parseInt(stringValue.slice(0, 2), 16);
        let g = Number.parseInt(stringValue.slice(2, 4), 16);
        let b = Number.parseInt(stringValue.slice(4, 6), 16);
        let a = Number.parseInt(255);
        return new Color(r, g, b, a);
    }
}