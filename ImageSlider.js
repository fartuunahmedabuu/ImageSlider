const ImageSlider = document.querySelector("#ImageSlider")
const NextBtn = document.querySelector("#NextButton")
const PrevBtn = document.querySelector("#PrevButton")


const images =[
    "https://img.freepik.com/free-photo/beautiful-shot-dusk-new-york_181624-537.jpg?size=626&ext=jpg&uid=R138474855&ga=GA1.1.1427391211.1704538381&semt=ais",
    "https://img.freepik.com/free-photo/new-york-cityscape-sunset_181624-42314.jpg?size=626&ext=jpg&uid=R138474855&ga=GA1.1.1427391211.1704538381&semt=ais",
    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-567.jpg?size=626&ext=jpg&uid=R138474855&ga=GA1.2.1427391211.1704538381&semt=ais",
    "https://img.freepik.com/free-photo/view-new-york-city-usa_53876-160509.jpg?size=626&ext=jpg&uid=R138474855&ga=GA1.2.1427391211.1704538381&semt=ais"
]

let  indexImage = 0

function currentImage(){
    ImageSlider.src = images[indexImage]
}
//Handle next Button

NextBtn.addEventListener("click" , function(){
    indexImage++;
    if(indexImage > images.length - 1){
        indexImage = 0
    }
    currentImage()
})

PrevBtn.addEventListener("click", function(){
    indexImage--;
    if(indexImage < 0){
        indexImage = 0
    }
    currentImage()
})




currentImage()