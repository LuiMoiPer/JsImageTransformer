import ImageTransformer from "./src/ImageTransformer.js";

self.onmessage = function(message) {
    console.log("Message from web worker:" + message.data);
    let transformer = new ImageTransformer(message.data);
    transformer.transform();
    console.log("Finished image transformation, sending data to main thread");
    self.postMessage(transformer.getImageData());
}; 