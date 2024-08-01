const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")
var windowWidth = window.innerWidth;

let idx = 0;

function carrossel() {
    idx++
    
    if(idx > img.length - 1) {
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * (img[idx].width)}px)`;
    console.log(img[idx].width)
}

if(screen.width > 1099) {
}
setInterval(carrossel, 2500)

