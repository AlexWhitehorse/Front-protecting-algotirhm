function getUserAgent() {
    const userAgent = window.navigator.userAgent;
    return userAgent
}

function sha512(str) {
    try {
        return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
        return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
        });
    }catch (TypeError) {
        // TypeError - тоже часть логики. Работает только с https протоколом))
        return 'TypeError';
    }
  }

async function compareHash() {
    const userAgentHash = await sha512(getUserAgent());
    const numbers = userAgentHash.replace(/\D+/g,"");
    const hashNumbers = await sha512(numbers);
    const cryptedInBack = document.cookie.replace(/(?:(?:^|.*;\s*)id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if ((userAgentHash+hashNumbers) === cryptedInBack) {
        return true;
    }
    return false;
}

compareHash().then(e => {
    if(e) {
        alert("Доступ разрешён");
    }
    else {
        alert("Доступа нет");
    }
})