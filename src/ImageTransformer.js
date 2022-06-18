import PixelPlacer from "./PixelPlacer.js";
import IncreasingRgb from "./IncreasingRgb.js"

class ImageTransformer {
    constructor(imageData) {
        this.imageData = structuredClone(imageData);
        this.pixelPlacer = new PixelPlacer(imageData.height, imageData.width, new IncreasingRgb());
    }

    getImageData() {
        return structuredClone(this.imageData);
    }

    transfrom() {
        let data = this.imageData.data;
        while (this.pixelPlacer.isDone == false) {
            // Take a pixel
            let nextPixel = this.pixelPlacer.nextPixel();
            if (nextPixel == null) {
                continue;
            }

            // Place it
            let index = nextPixel.point.x * 4 + nextPixel.point.y * (this.imageData.width * 4);
            data[index] = nextPixel.color.r;
            data[index + 1] = nextPixel.color.g;
            data[index + 2] = nextPixel.color.b;
            data[index + 3] = nextPixel.color.a;
        }
    }
}

export default ImageTransformer;