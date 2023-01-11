async function main() {

    let response = await fetch ('http://localhost:3001/listBooks')
    method:'PATCH',
    headers; {
        'Content-Type' ;'application/json'
    }
    let books = await response.json()
    books.forEach(renderBook)

    body ; JSON.stringify({
        "id" : 3,
        "title" : "Legends of Arathrae",
    });
};

const createBtn = (text = 'Update Books')=>{
    const btn = document.createElement('button');
    btn.innerText = 'Update Book';
    document.body.appendChild(btn);
   return btn;
};


/*"id": 3,
"title": "The Annals of Arathrae",
"description": "This anthology tells the intertwined narratives of six fairy tales.",
"year": 2016,
"quantity": "8",
"imageURL": "/assets/arathrae.jpeg"*/

function renderBook(book) {
    let bookContainer = document.querySelector('.book-container')
    bookContainer.innerHTML += `
        <div class="col-sm-3">
            <div class="card" style="width: 100%;">
                ${book.imageURL ? `
                    <img class="card-img-top" src="${book.imageURL}" />
                `
                : ``}
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Available: ${book.quantity}</h6>
                    <p class="card-text">${book.description}</p>
                </div>
            </div>
        </div>
    `
}

main()