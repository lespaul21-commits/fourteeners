const peaks = ['longs', 'democrat'];

//gets all of the peak-picture elements in an array

const shiftPictures = (id) => {
    //Returns an array of all display elements
    let displays = document.getElementById(id).getElementsByClassName('display');

    for (let display of displays) {
        let i = 1;
        let picture = display.getElementsByClassName('peak-picture')[0];
        picture.onclick = function() {
            if (i !== 3) {
                i += 1;
            } else {
                i = 1;
            }
            picture.src = `./Resources/${id}/${i}.jpg`; 
            display.getElementsByClassName('picture-count')[0].innerHTML = `${i}/3`;
        }
    }
}

for (let peak of peaks) {
    shiftPictures(peak);
}