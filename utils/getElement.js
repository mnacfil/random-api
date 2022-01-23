
const getElement = selection => {
    const element = document.querySelector(selection);
    if(element) return element;
    throw new Error(`This ${element} is not exist.`)
}

export default getElement