const contentsText = [
    "loading",
    "ASMR2DEV"
]

const body = document.querySelector("body");

const loaders = contentsText.map(text => {
    const letters = text.split("");
    const loader = letters.map(letter => {
        return `<span>${letter}</span>`
    })

    return `<div class="loader">${loader.join("")}</div>`
})

const contents = loaders.join("");
body.innerHTML = contents;
body.innerHTML += `<a class="youtube" href="https://www.youtube.com/channel/UCbvqFHbUd26oY0esJPpRjaQ?sub_confirmation=1">Subscribe My <span>Youtube</span> Channel</a>`