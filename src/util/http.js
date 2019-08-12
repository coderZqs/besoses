class HTTP {
    request(url, resolve, reject, method = "GET", data = {}) {
        return this._request(url, method, data, resolve, reject)
    }
    _request(url, method, data, resolve, reject) {
        console.log(this)
        return new Promise((resolve, reject) => {
            axios({
                url,
                method,
                data
            }).then((res) => {
                resolve(res)
            })
        })
    }
}

export {
    HTTP
}