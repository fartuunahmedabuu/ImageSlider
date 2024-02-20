 let openBtn = document.querySelector("#menuBtn")
 let closeBtn = document.querySelector("#closeBtn")
 let links = document.querySelector("#links")


 openBtn.addEventListener("click", function(){
    links.style.display = "flex"
    openBtn.style.display = "none"
    closeBtn.style.display = "block"
 })

 closeBtn.addEventListener("click", function(){
    links.style.display ="none"
    closeBtn.style.display = "none"
    openBtn.style.display = "block"

 })
