let userName = prompt("Who?", "");

if(userName === 'Admin'){

    let password = prompt('password','');

    if(password === 'TheMaster')
    {
        alert('Welcome!');
    }else if(password === '' || password === null){
        alert('Canceled');
    }else{
        alert('Wrong password');
    }

} else if(userName === '' || userName === null){
    alert('Canceled');
}else{
    alert("I don't know you!");
}