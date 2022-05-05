const imageInput = document.querySelector("#image_input");
var image = "";

imageInput.addEventListener("change", function(){
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
        image = fileReader.result;
        document.querySelector("#user_image").src = image;
    });
    fileReader.readAsDataURL(this.files[0]);
}); 