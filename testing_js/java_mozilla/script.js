var myHeading = document.getElementById('yo')
myHeading.textContent = 'Hello world!';


var button = document.getElementById('hello_alert')
button.onclick = function() {
    let name = prompt('Как вас зовут?');
    alert('Привет ' + name + ', рад тебя видеть!')
    localStorage.setItem('name', name);
}


var myNickname = document.getElementById('nickname')
if(localStorage.getItem('name')){
    let storageName = localStorage.getItem('name');
    myNickname.innerHTML = 'Hello, ' + storageName;
}


var Reset_Name = document.getElementById('reset_name')
Reset_Name.onclick = function(){
    myNickname.innerHTML = 'Hello, ...';
    localStorage.clear('name');
}

var tist = document.getElementById('test')
tist.onclick = function(){
    localStorage.setItem('test', test)
}