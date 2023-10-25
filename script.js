const reviews = [
    {
        id:1,
        name: "Sara Jones",
        post: "UX Designer", 
        img: "images/face1.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, aspernatur!"
    },
    {
        id:2,
        name: "Khusboo Verma",
        post: "Senior Software Engineer", 
        img: "images/face2.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, aspernatur!"
    },
    {
        id:3,
        name: "Archi Mukharjee",
        post: "Team Lead", 
        img: "images/face3.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, aspernatur!"
    },
    {
        id: 4,
        name: "Dipti Dessai",
        post: "QA Tester", 
        img: "images/face4.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, aspernatur!"
    },
    {
        id: 5,
        name: "Prachi Naik",
        post: "Web Developer", 
        img: "images/face5.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, aspernatur!"
    }
]

const img = document.getElementById('person-face');
const author = document.getElementById('author')
const job = document.getElementById('job')
const prevBtn = document.querySelector('.btn_prev')
const nextBtn = document.querySelector('.btn_next')
const randomBtn = document.querySelector('.surprise_btn')

// console.log(img);
// console.log(author);
// console.log(job);
// console.log(prevBtn);
// console.log(nextBtn);
// console.log(randomBtn);

//setting the initial item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPersonInfo();
})

function showPersonInfo(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.post
}

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPersonInfo()
})

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length  - 1){
        currentItem = 0;
    }
    showPersonInfo()
})

randomBtn.addEventListener("click", function(){
    let randomNum = Math.floor(Math.random() * reviews.length);
    currentItem = randomNum;
    showPersonInfo()
})