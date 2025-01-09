let pictures = document.getElementsByClassName('peak-picture');

for (let picture of pictures) {
    picture.onclick = function () {
        picture.src="./Resources/keyhole.jpg"
    }
}