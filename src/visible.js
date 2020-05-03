
const visible = (element) => {
    element.classList.remove("left")
    element.classList.remove("right")
    element.classList.add("visible")
}

const left = (element) => {
    element.classList.remove("visible")
    element.classList.remove("right")
    element.classList.add("left")
}

const right = (element) => {
    element.classList.remove("left")
    element.classList.remove("visible")
    element.classList.add("right")
}

export {visible,left,right};