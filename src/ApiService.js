class ApiService{
    static getBeer(beerId){
        return fetch(`http://localhost:3000/beers/${beerId}`)
        .then(res => res.json())
    }

    static updateDescription(beerId, data){
        fetch(`http://localhost:3000/beers/${beerId}`, {
                method: 'PATCH', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({description: data}),
            })
            .then(response => response.json())
    }
}