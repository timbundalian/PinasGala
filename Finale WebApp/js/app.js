const nav = document.querySelector(".nav")

window.addEventListener("scroll",function(){
const scrollTop = window.scrollY

if (scrollTop > 40){
    nav.classList.add("active")

}
else{
    nav.classList.remove("active")
}
})

