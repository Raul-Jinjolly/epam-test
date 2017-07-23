import {getUsers} from './getusers'
import {User} from './User'


getUsers((users) => {
  let wrapper = document.querySelector('#wrapper');
  let addButton = document.querySelector('#add');
  let allUsers = document.querySelector('#users');
  let userPopUp = document.createElement('div');
  let select = document.querySelector('select');
  
  addButton.addEventListener('click', function() {
    addButton.style.display = 'none';
    select.classList.remove('hidden');
    allUsers.classList.remove('hidden');
    users.forEach( function( user, i ) {
      user[i] = new User();
      let userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = `<img src="${user.picture.medium}">
                          <span class="info">see more info</span>
                          <h2><span>${user.name.title}</span>. ${user.name.first} ${user.name.last}</h2>
                          <span class="gender">${user.gender}</span>`
      allUsers.appendChild(userDiv);

      let template = `<div class="ava"><img src="${user.picture.large}"><h2>${user.name.first} ${user.name.last}</h2>
                      </div><img src="https://image.flaticon.com/icons/svg/1/1193.svg" class="close">
                      <p><span>${user.location.city}</span>, ${user.location.state}</p>
                      <div class="contacts">
                      <ul class="contacts_images">
                      <li class="phone"></li><li class="email"></li><li class="street"></li><li class="postcode"></li>
                      </ul>
                      <ul class="contacts_info">
                      <li>${user.phone}</li><li>${user.email}</li><li>${user.location.street}</li><li>${user.location.postcode}</li>
                      </ul>
                      </div>`;

      userDiv.querySelector('.info').addEventListener('click', function() {
        userPopUp.classList.add('user_popup');
        userPopUp.classList.remove('hidden');
        userPopUp.innerHTML = template;
        wrapper.appendChild(userPopUp);

        userPopUp.querySelector('.close').addEventListener('click', function() {
          userPopUp.classList.add('hidden');
        })
      })

      select.addEventListener('change', function() {
          allUsers.innerHTML = '';
          if(this.options[this.selectedIndex].value == 'alphabetFirstName') {
            users.sort(compareFirstName);
            users.forEach( function (user, i) {

              let userDiv = document.createElement('div');
              userDiv.classList.add('user');
              userDiv.innerHTML = `<img src="${user.picture.medium}">
                          <span class="info">see more info</span>
                          <h2><span>${user.name.title}</span>. ${user.name.first} ${user.name.last}</h2>
                          <span class="gender">${user.gender}</span>`
              allUsers.appendChild(userDiv);

              userDiv.querySelector('.info').addEventListener('click', function() {
                userPopUp.classList.add('user_popup');
                userPopUp.classList.remove('hidden');
                userPopUp.innerHTML = `<div class="ava"><img src="${user.picture.large}"><h2>${user.name.first} ${user.name.last}</h2>
                  </div><img src="https://image.flaticon.com/icons/svg/1/1193.svg" class="close">
                    <p><span>${user.location.city}</span>, ${user.location.state}</p>
                  <div class="contacts">
                    <ul class="contacts_images">
                      <li class="phone"></li><li class="email"></li><li class="street"></li><li class="postcode"></li>
                    </ul>
                    <ul class="contacts_info">
                      <li>${user.phone}</li><li>${user.email}</li><li>${user.location.street}</li><li>${user.location.postcode}</li>
                    </ul>
                  </div>`;
                wrapper.appendChild(userPopUp);

                userPopUp.querySelector('.close').addEventListener('click', function() {
                  userPopUp.classList.add('hidden');
                })
              })
            })
          }
          if(this.options[this.selectedIndex].value == 'reverseFirstName') {
            users.sort(compareFirstName).reverse();
            users.forEach( function (user, i) {

              let userDiv = document.createElement('div');
              userDiv.classList.add('user');
              userDiv.innerHTML = `<img src="${user.picture.medium}">
                          <span class="info">see more info</span>
                          <h2><span>${user.name.title}</span>. ${user.name.first} ${user.name.last}</h2>
                          <span class="gender">${user.gender}</span>`
              allUsers.appendChild(userDiv);

              userDiv.querySelector('.info').addEventListener('click', function() {
                userPopUp.classList.add('user_popup');
                userPopUp.classList.remove('hidden');
                userPopUp.innerHTML = `<div class="ava"><img src="${user.picture.large}"><h2>${user.name.first} ${user.name.last}</h2>
                  </div><img src="https://image.flaticon.com/icons/svg/1/1193.svg" class="close">
                    <p><span>${user.location.city}</span>, ${user.location.state}</p>
                  <div class="contacts">
                    <ul class="contacts_images">
                      <li class="phone"></li><li class="email"></li><li class="street"></li><li class="postcode"></li>
                    </ul>
                    <ul class="contacts_info">
                      <li>${user.phone}</li><li>${user.email}</li><li>${user.location.street}</li><li>${user.location.postcode}</li>
                    </ul>
                  </div>`;
                wrapper.appendChild(userPopUp);

                userPopUp.querySelector('.close').addEventListener('click', function() {
                  userPopUp.classList.add('hidden');
                })
              })
            })
          }
          if(this.options[this.selectedIndex].value == 'alphabetLastName') {
            users.sort(compareLastName);
            users.forEach( function (user, i) {

              let userDiv = document.createElement('div');
              userDiv.classList.add('user');
              userDiv.innerHTML = `<img src="${user.picture.medium}">
                          <span class="info">see more info</span>
                          <h2><span>${user.name.title}</span>. ${user.name.first} ${user.name.last}</h2>
                          <span class="gender">${user.gender}</span>`
              allUsers.appendChild(userDiv);

              userDiv.querySelector('.info').addEventListener('click', function() {
                userPopUp.classList.add('user_popup');
                userPopUp.classList.remove('hidden');
                userPopUp.innerHTML = `<div class="ava"><img src="${user.picture.large}"><h2>${user.name.first} ${user.name.last}</h2>
                  </div><img src="https://image.flaticon.com/icons/svg/1/1193.svg" class="close">
                    <p><span>${user.location.city}</span>, ${user.location.state}</p>
                  <div class="contacts">
                    <ul class="contacts_images">
                      <li class="phone"></li><li class="email"></li><li class="street"></li><li class="postcode"></li>
                    </ul>
                    <ul class="contacts_info">
                      <li>${user.phone}</li><li>${user.email}</li><li>${user.location.street}</li><li>${user.location.postcode}</li>
                    </ul>
                  </div>`;
                wrapper.appendChild(userPopUp);

                userPopUp.querySelector('.close').addEventListener('click', function() {
                  userPopUp.classList.add('hidden');
                })
              })
            })
          }
          if(this.options[this.selectedIndex].value == 'revesreLastName') {
            users.sort(compareLastName).reverse();
            users.forEach( function (user, i) {

              let userDiv = document.createElement('div');
              userDiv.classList.add('user');
              userDiv.innerHTML = `<img src="${user.picture.medium}">
                          <span class="info">see more info</span>
                          <h2><span>${user.name.title}</span>. ${user.name.first} ${user.name.last}</h2>
                          <span class="gender">${user.gender}</span>`
              allUsers.appendChild(userDiv);

              userDiv.querySelector('.info').addEventListener('click', function() {
                userPopUp.classList.add('user_popup');
                userPopUp.classList.remove('hidden');
                userPopUp.innerHTML = `<div class="ava"><img src="${user.picture.large}"><h2>${user.name.first} ${user.name.last}</h2>
                  </div><img src="https://image.flaticon.com/icons/svg/1/1193.svg" class="close">
                    <p><span>${user.location.city}</span>, ${user.location.state}</p>
                  <div class="contacts">
                    <ul class="contacts_images">
                      <li class="phone"></li><li class="email"></li><li class="street"></li><li class="postcode"></li>
                    </ul>
                    <ul class="contacts_info">
                      <li>${user.phone}</li><li>${user.email}</li><li>${user.location.street}</li><li>${user.location.postcode}</li>
                    </ul>
                  </div>`;
                wrapper.appendChild(userPopUp);

                userPopUp.querySelector('.close').addEventListener('click', function() {
                  userPopUp.classList.add('hidden');
                })
              })
            })
          }
      })
    })
  })
})

function compareFirstName (obj1, obj2) {
  if(obj1.name.first > obj2.name.first) return 1;
  if(obj1.name.first < obj2.name.first) return -1;
}

function compareLastName (obj1, obj2) {
  if(obj1.name.last > obj2.name.last) return 1;
  if(obj1.name.last < obj2.name.last) return -1;
}