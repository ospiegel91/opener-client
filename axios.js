const axios = require('axios');

let data = {

}

axios.post('http://localhost:3000/user/register',data).then((response)=>{
    console.log(response.status);
}).catch((err)=>{
    console.log('email username already in system');
})


axios.post('http://localhost:3000/user/login',data).then((response)=>{
    console.log(response.headers['x-auth']);
}).catch((err)=>{
    console.log('email username already is incorrect');
})

axios.get('http://localhost:3000/private/private',{headers:{
    'x-auth':''
}}).then((response)=>{
    console.log(response.headers['x-auth']);
}).catch((err)=>{
    console.log('email username already is incorrect');
})