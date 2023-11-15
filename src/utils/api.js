class Api {
  _headers;
  _url;
  constructor(options) {
    this._headers = options.headers;
    this._url = options.baseUrl;
  }

  postMessage(motoName, name, mobileNumber, message) {
    const requestBody = {
      motoName,
      name,
      mobileNumber,
      ...(message !== '' && { message }),
    };

    return this._request(`${this._url}/send-info`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(requestBody),
    });
  }

  postMotoPhotos(formData, motoName) {
    return this._request(`${this._url}/photos?motoName=${motoName}`, {
      method: 'POST',
      body: formData,
    });
  }

  deleteMotoPhotos(photoArr) {
    console.log(photoArr);
    const requestBody = {
      photoArr,
    };
    return this._request(`${this._url}/photos`, {
      headers: this._headers,
      method: 'DELETE',
      body: JSON.stringify(requestBody),
    });
  }

  postMotorcycles(
    motoName,
    motoPrice,
    description,
    motoPerformance,
    motoLinks,
  ) {
    const requestBody = {
      motoName,
      motoPrice,
      description,
      motoPerformance,
      motoLinks,
    };

    return this._request(`${this._url}/motorcycles`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(requestBody),
    });
  }

  deleteMotorcycle(motoName) {
    const requestBody = {
      motoName,
    };
    return this._request(`${this._url}/motorcycles`, {
      method: 'DELETE',
      headers: this._headers,
      body: JSON.stringify(requestBody),
    });
  }

  getToSignout() {
    return this._request(`${this._url}/signout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getMotorcycles() {
    return this._request(`${this._url}/motorcycles`, {
      method: 'GET',
      headers: this._headers,
    });
  }

  changeMotoInfo(motoName, motoPrice, description, motoLinks) {
    const requestBody = { motoName };
    if (motoPrice) requestBody.motoPrice = motoPrice;
    if (description.length > 0) requestBody.description = description;
    if (motoLinks?.length > 0) requestBody.motoLinks = motoLinks;

    return this._request(`${this._url}/motorcycles`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(requestBody),
    });
  }

  postToSignin(login, password) {
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        login,
        password,
      }),
    });
  }

  _checkResponse(res) {
    if (res.ok) {
      if (res.status === 204) {
        return null;
      } else {
        return res.json();
      }
    }
    return res.json().then((error) => Promise.reject(error));
  }

  _request(url, options) {
    const updatedOptions = {
      ...options,
      credentials: 'include',
    };

    return fetch(url, updatedOptions).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  baseUrl: 'https://benellispb.ru/apiS',
  headers: {
    'Content-Type': 'application/json',
  },
});

// https://benellispb.ru/apiS
// http://localhost:3000/apiS
export default api;
