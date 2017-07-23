export function getUsers(callback) {
	const USERS_URL = 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', USERS_URL, true);
    xhr.send();
    xhr.addEventListener('readystatechange', function() {
      if(xhr.readyState !== 4) return;
      callback(JSON.parse(xhr.responseText).results);
    })
    
}

