
document.addEventListener('keydown', (event) => {
   
    if (event.code === 'Space') {
        event.preventDefault(); 
    }
});
/* I was having an issue, where whenever i would press space for the pictures to shuffle, the screen would scroll downward. I googled how to correct it and got the above code. */

const troyPics = [
    { path: 'photos/1.jpg' },
    { path: 'photos/2.jpg' },
    { path: 'photos/3.jpg' },
    { path: 'photos/4.jpg' },
    { path: 'photos/5.jpg' },
    { path: 'photos/6.jpg' },
    { path: 'photos/7.jpg' },
    { path: 'photos/8.jpg' }
   
];


function setRandomImage() {
    const index = Math.floor(Math.random() * troyPics.length);
    document.body.style.backgroundImage = `url(${troyPics[index].path})`;
   
}


document.addEventListener("DOMContentLoaded", () => {
    setRandomImage(); 

    document.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
            setRandomImage(); 
        }
    });
});
