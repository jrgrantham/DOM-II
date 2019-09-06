// Your code goes here

document.querySelector('.intro img').addEventListener('mouseover', () => {
    event.target.style.width = '400px'
});

let heading = document.querySelector('.nav-container');
document.addEventListener('keydown', () => {
    heading.style.backgroundColor = 'red'
})



let boat = document.querySelector('.content-destination img');

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    boat.style.transform = `scale(${scale})`;
}
let scale = 1;

boat.onwheel = zoom;


function adjustOpacity() {
    document.body.style.opacity = 
    ((window.innerWidth - 500)/1000)
}
window.addEventListener('resize', adjustOpacity);

