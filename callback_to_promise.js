//callback.js 에서 연습해본 콜백헬을 promise를 이용해서 바꿔주기


class UserStorage {                  
    loginUser(id, password){          //onsuccess, onerror같은 콜백함수 필요X
        return new Promise((resolve, reject) => {
            setTimeout(() => {                      
                if (
                    (id ==='ellie' && password === 'dream')||
                    (id ==='coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));    
                }
            }, 2000); 
        });
    }  

     
    getRoles(user){  
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie'){
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });    
    }
}

    const userStorage = new UserStorage();      //새로운 object 생성_ new + 클래스 이름
    const id = prompt('Enter your id');     
    const password = prompt('Enter your password');
    userStorage.loginUser(id, password)             //loginuser을 호출해서 id와 pw 전달
    .then((user) => userStorage.getRoles(user))        //==.then(userStorage.getRoles) 
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))   //userWithRole이 아니라 그냥 user
    .catch(console.log);