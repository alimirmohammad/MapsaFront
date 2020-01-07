let person = {
    name: 'Ali',
    lastName: 'Mirmohammad'
};

localStorage.setItem('name', JSON.stringify(person));
alert(JSON.parse(localStorage.getItem('name')));