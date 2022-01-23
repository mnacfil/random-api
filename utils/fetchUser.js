const URL = 'https://randomuser.me/api/';

const getUser = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    const person = data.results[0];
    // destruction
    const {email,phone} = person;
    const {street: {number, name}} = person.location
    const {large: image} = person.picture
    const {dob: {age}} = person
    const {name : {first, last}} = person
    const {password} = person.login;
    return {
        phone,password,email,age,image,street: `${number} ${name}`, name: `${first, last}`,
    }

}

export default getUser