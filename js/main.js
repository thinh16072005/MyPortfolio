function upDate(previewPic) {
    // Check that the event is triggering
    console.log("Event triggered");

    // Print out some information about the previewPic variable
    console.log("Source: " + previewPic.src);

    // Change the text of the element with the id of image
    const imageDiv = document.getElementById('image');
    if (imageDiv) {
        imageDiv.innerText = previewPic.alt;

        // Change the background image of the element with the id of image
        imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    } else {
        console.error("Element with id 'img' not found.");
    }
}

function undo() {
    // Update the url for the background image of the div with the id of image back to the original value
    const imageDiv = document.getElementById("image");
    if (imageDiv) {
        imageDiv.style.backgroundImage = "url('')";

        // Update the text of the div with the id of image back to the original text
        imageDiv.innerText = "Hover over an image below to display here.";
    } else {
        console.error("Element with id 'image' not found.");
    }
}

function pickImage() {
    options = ["20240717_152216.jpg", "IMG_0318.jpg", "IMG_0330.jpg", "IMG_0333.jpg"]
    currentImages = document.querySelectorAll("img");
    for (var i = 0; i < currentImages.length; i++) {
        console.log("Image:" + i)
        randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
        currentImages[i].src = randomImg;
        currentImages[i].setAttribute("tabindex", "0"); 
    }
}