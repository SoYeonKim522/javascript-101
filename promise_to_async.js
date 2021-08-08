//promise를 이용해 바꾼 콜백헬을 async를 이용해 더 간단히 하기

function add(a,b){
    const sum = a+b;
    console.log(sum);
}
console.log(add(1,2));

function numAll ( param1, param2, param3 ) {
    for ( var i = 0; i < arguments.length; i++ ) {     
        alert(arguments[i]);
    };
 };


/* 
class UserStorage {                  
    loginUser(id, password){          //onsuccess, onerror같은 콜백함수 필요X
            setTimeout(() => {                      
                if (
                    (id ==='ellie' && password === 'dream')||
                    (id ==='coder' && password === 'academy')
                ) {
                    return(id);
                } else {
                    return(new Error('not found'));    
                }
            }, 2000); 
    }  

     
    getRoles(user){  
            setTimeout(() => {
                if (user === 'ellie'){
                    return({name: 'ellie', role: 'admin'});
                } else {
                    return(new Error('no access'));
                }
            }, 1000); 
    }
}

    const userStorage = new UserStorage();      
    const id = prompt('Enter your id');     
    const password = prompt('Enter your password');
    userStorage.loginUser(id, password)             //loginuser을 호출해서 id와 pw 전달
    try{
        .then((user) => userStorage.getRoles(user))       
        .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    }   
    .catch(console.log);
    */