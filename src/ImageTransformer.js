import PixelPlacer from "./PixelPlacer.js";
import IncreasingRgb from "./IncreasingRgb.js"
import NeighborProvider from "./NeighborProvider.js";
import Point from "./Point.js";
import { octagonal, cardinal, ordinal, knight} from "./NeighborProvider.js";

class ImageTransformer {
    constructor(imageData) {
        this.imageData = structuredClone(imageData);
        let neighborProvider = new NeighborProvider();
        neighborProvider.doesShuffle = false;
        neighborProvider.addPoints(knight());
        this.pixelPlacer = new PixelPlacer(imageData.height, 
            imageData.width, 
            new IncreasingRgb(),
            neighborProvider);
    }

    getImageData() {
        return structuredClone(this.imageData);
    }

    transform() {
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