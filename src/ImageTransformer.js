class ImageTransformer {
    constructor(imageData) {
        this.imageData = structuredClone(imageData);
    }

    getImageData() {
        return structuredClone(this.imageData);
    }

    transfrom() {
        let data = this.imageData.data;
        for (let i = 0; i < data.length; i += 4 * 3) {
            data[i] = 128;
            data[i + 1] = 255;
            data[i + 2] = 219;
            data[i + 3] = 255;
        }
    }
}

export default ImageTransformer;