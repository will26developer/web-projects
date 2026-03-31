import listeners from "./listener/listeners.js"


window.addEventListener("DOMContentLoaded",() => {
    const initApp = () => {
        listeners()
    }

    initApp()
})