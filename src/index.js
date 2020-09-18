const beerName = document.querySelector(".beer-details").firstElementChild
const beerPic = document.querySelector(".beer-details").firstElementChild.nextElementSibling
const formDesc = document.querySelector(".description")
const button = document.getElementsByTagName("button")
const reviewForm = document.querySelector(".review-form")
const reviews = document.querySelector(".reviews")

document.addEventListener("DOMContentLoaded", () => fetchbeer())

function fetchbeer() {
    fetch("http://localhost:3000/beers/1")
        .then(response => response.json())
        .then(beer => renderBeer(beer))
}

function renderBeer(beer) {

    beerName.innerHTML = beer.name
    beerPic.src = beer.image_url

    //create comment li and append to reviews
    const comment = document.createElement('li')
    reviews.appendChild(comment)
        //listen to button
    reviewForm.lastElementChild.addEventListener("click", function(e) {
        e.preventDefault()

        const data = {
            name: beer.name,
            id: beer.id,
            description: beer.description,
            image_url: beer.image_url,
            reviews: reviewForm.firstElementChild.value
        }

        fetch(`http://localhost:3000/beers/${beer.id}`, {
                method: 'PATCH', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(beer => {

                comment.innerText = `${beer.reviews}`
                    // reviews.appendChild(comment)

            })
    })

}

formDesc.lastElementChild.addEventListener("click", function(e) {
    e.preventDefault()
        // formDesc.firstElementChild.innerHTML
})