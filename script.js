//gets all of the peak-picture elements in an array
let pictures = document.getElementsByClassName('peak-picture');

//of accesses the values of the pictures array directly as opposed to in which accesses the indexes
for (let picture of pictures) {
    picture.onclick = function () {
        picture.src="./Resources/keyhole.jpg"
    }
}