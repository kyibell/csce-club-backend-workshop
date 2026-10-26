function getCoffees() {
  fetch('http://127.0.0.1:8000/coffees')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const body = document.querySelector('body');
      body.innerHTML += '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    });
}

function getCoffee(id) {
  fetch('http://127.0.0.1:8000/coffees/' + id)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const body = document.querySelector('body');
      body.innerHTML += '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    });
}

function postCoffee() {
  fetch('http://127.0.0.1:8000/coffees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: document.querySelector('#name').value, price: document.querySelector('#price').value })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const body = document.querySelector('body');
      body.innerHTML += '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    });
}

function deleteCoffee(id) {
  fetch('http://127.0.0.1:8000/coffees/' + id, {
    method: 'DELETE'
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const body = document.querySelector('body');
      body.innerHTML += '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    });
}

function clearPostContainer() {
  const postContainer = document.querySelector('#post-container');
  postContainer.innerHTML = '';
  postContainer.classList.add('d-none');
}

function showPostContainer() {
  const postContainer = document.querySelector('#post-container');
  postContainer.classList.remove('d-none');
}

function clearGetCoffeeContainer() {
  const getCoffeeContainer = document.querySelector('#get-coffee-container');
  getCoffeeContainer.innerHTML = '';
  getCoffeeContainer.classList.add('d-none');
}

function showGetCoffeeContainer() {
  const getCoffeeContainer = document.querySelector('#get-coffee-container');
  getCoffeeContainer.classList.remove('d-none');
}

function showDeleteCoffeeContainer() {
  const deleteCoffeeContainer = document.querySelector('#delete-coffee-container');
  deleteCoffeeContainer.classList.remove('d-none');
}

function clearDeleteCoffeeContainer() {
  const deleteCoffeeContainer = document.querySelector('#delete-coffee-container');
  deleteCoffeeContainer.innerHTML = '';
  deleteCoffeeContainer.classList.add('d-none');
}