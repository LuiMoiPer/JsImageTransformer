const imageInput = document.querySelector("#image_input");
var image = new Image(100,100);

imageInput.addEventListener("change", function(){
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
        displayImage(fileReader.result);
    });
    fileReader.readAsDataURL(this.files[0]);
}); 

function displayImage(result) {
    image.src = result;
    document.querySelector("#user_image").src = image.src;
}