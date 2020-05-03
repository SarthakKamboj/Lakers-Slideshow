import {visible,left,right} from "./visible"

(()=>{

    const next = () => {
        const currentElement = document.querySelector(".visible");
        console.log(currentElement)
        if (currentElement.nextElementSibling.classList.contains("img")){
            left(currentElement)
            visible(currentElement.nextElementSibling);
        }
    }

    const previous = () => {
        const currentElement = document.querySelector(".visible");
        console.log(currentElement)
        if (currentElement.previousElementSibling.classList.contains("img")){
            right(currentElement)
            visible(currentElement.previousElementSibling);
            console.log(currentElement);
        }
    }

    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn=>{
        btn.addEventListener("click",()=>{
            const playerName = btn.getAttribute("for");
            const playerElement = document.querySelector("."+playerName);
            visible(playerElement)
            let previousElement = playerElement.previousElementSibling;
            while (previousElement) {
                left(previousElement)
                previousElement = previousElement.previousElementSibling;
            }
            let nextElement = playerElement.nextElementSibling;
            while (nextElement) {
                if (nextElement.classList.contains("img")){
                    right(nextElement)
                }
                nextElement = nextElement.nextElementSibling;
            }
        })
    });
    const arrows = document.querySelector(".arrows").querySelectorAll("div");
    arrows.forEach(arrow=>{
        if (arrow.classList.contains("left-arrow")){
            arrow.addEventListener("click",()=>{
                previous();
            });

        } else if(arrow.classList.contains("right-arrow")) {
            arrow.addEventListener("click",()=>{
                next();
            });
        }
    })
})();

(()=>{
    const icons = [document.querySelector(".icon"),document.querySelector("#icon")]
    const menu = document.querySelector(".menu");
    const slideShowAfter = document.querySelector(".blur")
    console.log(slideShowAfter)
    icons.forEach(icon=>{
        icon.addEventListener("click",()=>{
            menu.classList.toggle("menu-hidden");
            slideShowAfter.classList.toggle("opaque");
        })
    })
})();