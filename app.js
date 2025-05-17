const buttons = document.querySelectorAll('.pill');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});


// cards hide show

function show() {
    let allCards = document.querySelectorAll('.hide');
    allCards.forEach(card => {
        card.style.display = 'block';
    });
    document.getElementById('show').style.display = 'none';
    document.getElementById('hide').style.display = 'block'
}

function hide() {
    let allCards = document.querySelectorAll('.hide');
    allCards.forEach(card => {
        card.style.display = 'none';
    });
    document.getElementById('show').style.display = 'block';
    document.getElementById('hide').style.display = 'none'
}

// local storage

// sign up page



let allUsers = JSON.parse(localStorage.getItem('all users')) || [];

function signIn() {
    let userName = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    if (!userName || !pass) {
        alert("Username aur password dono likho!");
        return;
    }

    let user = {
        name: userName,
        password: pass
    }

    allUsers.push(user);
    localStorage.setItem('all users', JSON.stringify(allUsers));
    alert("Signup successful");
}

function login() {
    let userName = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    let allUsers = JSON.parse(localStorage.getItem('all users')) || [];

    let match = allUsers.filter(user => user.name === userName && user.password === pass);

    if (match.length > 0) {
        console.log('success');
        localStorage.setItem('currentUser', JSON.stringify(match[0]));
        alert("Login successful!");
    } else {
        console.log('try again');
        alert("Invalid username or password!");
    }
}


// admin panel

let resturants = [];

function addItems() {
    let resturantName = document.getElementById('res-name').value;
    let resUrl = document.getElementById('res-thumbnail').value;
    let item = document.getElementById('item').value;
    let itemPrice = document.getElementById('item-price').value;
    let resCategory = document.getElementById('select').value
    let foodItem = {
        foodItem: item,
        price: itemPrice
    }
    let resturant = {
        name: resturantName,
        image: resUrl,
        foodItems: [],
        category: resCategory
    }
    resturant.foodItems.push(foodItem)
    resturants.push(resturant)
    localStorage.setItem('resturants', JSON.stringify(resturants))

}

// modal

function items() {
    let items = document.querySelector('.item-list');
    let item = document.getElementById('food');
    let itemPrice = document.getElementById('price')
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
    <p>${item.value}</p>
    <p>${itemPrice.value}</p>
    <i class="fa-solid fa-xmark style=" cursor: pointer;"></i>
    `
    items.appendChild(newItem)

}


function addRes() {
    let resName = document.getElementById('name');
    let resURL = document.getElementById('res-url');

let newRes = document.createElement('div');


}