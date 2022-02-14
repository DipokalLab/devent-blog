// DeVent CDN | jwt-token.js

try {
    let token = getToken('user')
    if (checkToken(token)) {
        document.querySelector("#login_handle_btn").innerHTML = `<i class="fas fa-user-minus"></i>`
        document.querySelector("#login_handle_btn").setAttribute('onclick', 'logout()')
        document.querySelector("#intro").innerText = '사용자로 로그인 완료'
    }
} catch (error) {
    
}

function getToken(key) {
    let cookieKey = key + "="; 
    let result = "";
    const cookieArr = document.cookie.split(";");
    
    for(let i = 0; i < cookieArr.length; i++) {
        if(cookieArr[i][0] === " ") {
        cookieArr[i] = cookieArr[i].substring(1);
        }
        
        if(cookieArr[i].indexOf(cookieKey) === 0) {
        result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
        return result;
        }
    }
    return result;
}


function checkToken(token) {
    try {
        let decoded = JSON.parse(atob(token.split('.')[1]));
        return 1
    } catch (error) {
        return 0
    }
}

function getUserInfo(token) {
    try {
        let decoded = JSON.parse(atob(token.split('.')[1]));
        return decoded
    } catch (error) {
        return 0
    }
}

function logout() {
    try {
        document.cookie = 'user=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
        location.href = '/'
    } catch (error) {
        return 0
    }
}