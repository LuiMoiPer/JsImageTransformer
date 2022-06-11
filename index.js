const imageInput = document.querySelector("#image_input");

imageInput.addEventListener("change", function(){
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
        displayImage(fileReader.result);
        makeNewImage();
    });
    fileReader.readAsDataURL(this.files[0]);
}); 

function displayImage(result) {
    // set the preview to show the image they selected
    const userImage = document.querySelector("#user_image");
    userImage.src = result;

    // Make an image to store the data of the file selected
    image = new Image();
    image.src = result;

    // Make the canvas match the size of the image and draw it to the canvas
    const canvas = document.querySelector("#output_canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0);
}

function makeNewImage() {
    // Grab the canvas and extract the byte data
    const canvas = document.querySelector("#output_canvas")
    const context = canvas.getContext("2d");
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Set some of the pixels to be a new color
    for (let i = 0; i < data.length; i += 4 * 3) {
        data[i] = 128; //128
        data[i + 1] = 255; //255
        data[i + 2] = 219; //219
        data[i + 3] = 255;
    }
    context.putImageData(imageData, 0, 0);
}