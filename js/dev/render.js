export function getUsers(callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',
            'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture',
            true);
    xhr.send();
    xhr.addEventListener('readystatechange', function() {
      if(xhr.readyState !== 4) return;
      callback(JSON.parse(xhr.responseText).results);
    })
    
}

