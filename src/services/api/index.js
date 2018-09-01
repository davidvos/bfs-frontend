export const fetchAPI = (body, endpoint) => {
    let data = {
      method: 'POST',
      body: JSON.stringify(
        body
      ),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
      }
    }
    return fetch('https://api.bestfittingshirt.com/run/' + endpoint, data)
    .catch((error) => {
        console.log(error);
        throw 'An unknown error occured';
    })
}

export const fetchAPIShirts = (body, endpoint) => {
    let data = {
      method: 'POST',
      body: JSON.stringify(
        body
      ),
      headers: {
        'Accept':       'application/json',
'Content-Type':'application/x-www-form-urlencoded'
      }
    }
    return fetch('https://api.bestfittingshirt.com/shirts/', data)
    .catch((error) => {
        console.log(error);
        throw 'An unknown error occured';
    })
}
