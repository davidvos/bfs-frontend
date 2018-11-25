export const fetchAPI = (body, endpoint) => {
    let data = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(
        body
      ),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
        //'Access-Control-Allow-Origin':'*',
      }
    }
    return fetch('https://api.bestfittingshirt.nl/run/' + endpoint, data)
    .catch((error) => {
        console.log(error);
        throw 'An unknown error occured';
    })
}

export const fetchAPIShirts = (body) => {
    let data = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(
        body
      ),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
        //'Access-Control-Allow-Origin':'*',
        }
    }
    return fetch('https://api.bestfittingshirt.nl/shirts', data)
    .catch((error) => {
        console.log(error);
        throw 'An unknown error occured';
    })
}

export const fetchAPIRegister = (body) => {
  let data = {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(
      body
    ),
    headers: {
      'Accept':       'application/json',
      'Content-Type': 'application/json'
      //'Access-Control-Allow-Origin':'*',
      }
  }
  return fetch('https://api.bestfittingshirt.nl/register', data)
  .catch((error) => {
      console.log(error);
      throw 'An unknown error occured';
  })
}
