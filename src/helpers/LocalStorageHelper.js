export let setToLocalStorage = (arr) => {
    localStorage.removeItem('todos')
    localStorage.setItem('todos', JSON.stringify(arr))
}

export let getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos"))
}