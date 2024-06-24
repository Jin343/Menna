let header =document.querySelector("header")
let paragraphs = document.querySelectorAll("header p:not(:last-child)")
let specialWord = document.querySelector("header p:last-child")

hid = document.getElementById("A")
let observer = new IntersectionObserver((el) => {
    el.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("show");
        } 
    })
})

const hiddens = document.querySelectorAll(".hidden")
hiddens.forEach((el) => observer.observe(el))

// contact = document.getElementById("contact")
// contactUs = document.getElementById("contact-us")
// contactUs.onclick = () => {
//     contact.style.display = "flex"
//     contact.onmouseleave = () => {
//         contact.style.display = "none"
//     }
// }