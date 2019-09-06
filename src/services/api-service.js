

const PetsApiService = {
    getCat() {
        return fetch('https://petful-chris-paul.herokuapp.com/api/cat')
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },

    getDog() {
        return fetch('https://petful-chris-paul.herokuapp.com/api/dog')
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
    deleteCat(){
        return fetch(`https://petful-chris-paul.herokuapp.com/api/cat`,{
            method: 'DELETE',
            headers: {
            }
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res
        )
        .catch(e => console.error(e))
    },
    deleteDog(){
        return fetch(`https://petful-chris-paul.herokuapp.com/api/dog`,{
            method: 'DELETE',
            headers: {
            }
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res
        )
        .catch(e => console.error(e))
    }
}

export default PetsApiService;