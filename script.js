
let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")


document.getElementById('pop').addEventListener("click", ()=>{
    card1.classList.add("hide")
    card2.classList.add("cards")
})

document.querySelector(".close-btn").addEventListener("click", ()=>{
    card1.classList.remove("hide");
    card2.classList.remove("cards")
})

document.querySelector(".confirm-btn").addEventListener("click",()=>{
    alert("Hey Gusy")
})