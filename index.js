const imageInput = document.querySelector("#image_input");
const worker = new Worker("worker.js");

imageInput.addEventListener("change", function(){
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
        displayImage(fileReader.result);
        makeNewImage(fileReader.result);
    });
    fileReader.readAsDataURL(this.files[0]);
}); 

function displayImage(result) {
    // set the preview to show the image they selected
    let userImage = document.querySelector("#user_image");
    userImage.src = result;
}

function makeNewImage(result) {
    let image = new Image();
    image.onload = function () {
        // Make the canvas match the size of the image and draw it to the canvas
        let canvas = document.querySelector("#output_canvas");
        canvas.width = image.width;
        canvas.height = image.height;

        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);

        let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        worker.postMessage(imageData);
        worker.onmessage = function(message) {
            context.putImageData(message.data, 0, 0);
        }
    }
    image.src = result;
}