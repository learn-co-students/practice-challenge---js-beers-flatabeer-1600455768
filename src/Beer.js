class Beer{
    constructor(beer){
        this.beer = beer
        this.div = this.buildDiv()
        this.div.addEventListener("click", this.handleEventListeners)
    }

    buildDiv(){
        beerDetails.dataset.id = this.beer.id
        beerName.innerHTML = this.beer.name
        beerPic.src = this.beer.image_url
        textarea.innerText = this.beer.description
        const comment = document.createElement('li')
        reviews.appendChild(comment)
        return beerDetails
    }
    handleEventListeners = (e) => {
        e.preventDefault()
        const api = new ApiService
        if(e.target.id === "update-beer"){
            api.updateDescription(this.beer.id, this.description)  
            .then(beer => {
                textarea.innerText = `${beer.description}`})
         
        }else if(e.target.id === "submit"){

        }

    }
}