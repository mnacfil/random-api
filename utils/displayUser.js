import get from './getElement.js';
import removeActive from './removeActive.js';

const userTitle = get('.user-title')
const userValue = get('.user-value')
const img = get('.user-img')
const btns = Array.from(document.querySelectorAll('.icon'))

const displayUser = (person) => {
    img.src = person.image
    userTitle.textContent = "My name is ";
    userValue.textContent = person.name;
    removeActive(btns)
    btns[0].classList.add('active')

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.label;
            userTitle.textContent = `My ${category} is`;
            userValue.textContent = person[category];
            removeActive(btns)
            btn.classList.add('active')
        })
    })
}

export default displayUser;