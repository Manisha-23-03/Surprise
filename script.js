function checkPassword() {
    let password = prompt("Enter the Secret Password");

    if (password === "Thangoo") {
        document.getElementById("wish").style.display = "block";
    } else {
        alert("❌ Wrong Password!");
    }
}

function showPhoto() {
    document.getElementById("photo").style.display = "block";
}

let current = 1;

function nextPhoto() {
    let img = document.getElementById("image");

    if (current === 1) {
        img.src = "photo2.jpg";
        current = 2;

        // Show the quote after the second photo
        document.getElementById("quote").style.display = "block";
    } else {
        img.src = "photo.jpg";
        current = 1;

        // Hide the quote when going back to the first photo
        document.getElementById("quote").style.display = "none";
    }
}