// Your code goes here

document.querySelector('.intro img').addEventListener('mouseover', () => {
    event.target.style.width = '400px'
});

let heading = document.querySelector('h1');
document.addEventListener('keydown', () => {
    heading.style.backgroundColor = 'red'
})

let boat = document.querySelector('.content-destination img');








// let subHeading = document.querySelectorAll('h2');
// console.log(subHeading);
// subHeading.addEventListener('keydown', () => {
//     subHeading.forEach(el => el.style.color = 'red')
// });