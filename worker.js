import ImageTransformer from "./src/ImageTransformer.js";

self.onmessage = function(message) {
    console.log("Message from web worker:" + message.data);
    let transformer = new ImageTransformer(message.data);
    transformer.transform();
    self.postMessage(transformer.getImageData());
}; 