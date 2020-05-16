const arrows = document.querySelectorAll('.arrow');
const circles = document.querySelectorAll('.circle');
const slider = document.querySelector('#slider');

for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', (event)=> {
        imageController(i + 1);
    })
}

let imageNum = 1;

const imageController = (num) => {
    slider.removeChild(slider.firstChild);
    newImage = document.createElement('img');
    newImage.src = 'photo' + num +'.jpg';
    newImage.id = 'image';
    slider.appendChild(newImage);
    newImage.style.opacity = '1';
    for (let k = 0; k < circles.length; k++) {
        circles[k].style.backgroundColor = "white";
    }
    circles[num - 1].style.backgroundColor = 'grey';
}

const timedSwitch = setInterval(function(){
    imageNum +=1;
    if (imageNum == 5) {imageNum = 1;}
    imageController(imageNum);
    

}, 5000);

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', (event)=> {
        for (let j = 0; j < arrows.length; j++) {
            arrows[j].style.borderColor = "grey";
        }
        event.target.style.borderColor = 'lightgrey';
        if (event.target.classList.contains('right')) {
            imageNum += 1;
            if (imageNum == 5) {imageNum = 1;}
        } else {
            imageNum -=1;
            if (imageNum == 0) {imageNum = 4;}
        }
        imageController(imageNum);
    })
}

