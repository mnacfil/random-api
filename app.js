// import modules
import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js'
const randomBtn = get('.btn')

const showUser = async () => {
    const person = await getUser()
    displayUser(person)
}

window.addEventListener('DOMContentLoaded', showUser);
randomBtn.addEventListener('click', showUser);



