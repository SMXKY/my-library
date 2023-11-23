import { bookData } from "./bookData.js";

function renderBooks(){2
    function selectItem(bookList){
        const pickingRandomItem = (min, max) => {
            let first = max - min + 1 ;
            let second = Math.random() * first ;
            let result = Math.floor(second) + min ;
    
            return result ;
        }
    
        const randomIndex = pickingRandomItem(0, bookList.length - 1) ;
        return bookList[randomIndex] ;
    }

    let newRandomBooks;

    function renderTrending(section, criteria){
        const trendingBooks = [] ;

        const randomBooks = [] ;

        bookData.forEach((book) => {
            if(criteria === 'trending'){
                if(book.metaData.trending === true){
                    trendingBooks.push(book) ;
                }
            }else if(criteria === 'recomended'){
                if(book.metaData.recomended === true){
                    trendingBooks.push(book) ;
                }
            }else if(criteria === 'new'){
                if(book.metaData.new === true){
                    trendingBooks.push(book) ;
                }
            }
        }) ;
        
        for(let i = 0; randomBooks.length < 5 ; i ++){
            const randomBook = selectItem(trendingBooks) ;

            randomBooks.push(randomBook) ;

            trendingBooks.forEach((book, index) => {
                if(book === randomBook){
                    trendingBooks.splice(index, 1) ;
                }
            }) ;
        } ;

        let bookHTML = '' ;

        randomBooks.forEach((book) => {
            if(book.title.length > 27){ 
                book.title = book.title.slice(0, 27) + '...' ;
            }
            bookHTML +=   `
            <div class="book-card-template card">
                <img src="images-and-icons/book-covers/${book.id}.jpg" alt="" class="book-img">
                <div class="book-info">
                    <p class="book-genre">${book.genre}</p>
                    <p class="book-name">${book.title}</p>
                    <p class="author">${book.author}</p>
                    <div class="book-options">
                        <button><img src="images-and-icons/read.png" alt="read"></button>
                        <button class="add-btn-${book.id} add-btn" data-name = ${Number(book.id)}><img src="images-and-icons/add.png" alt="add">
                        
                        </button>
                    </div>
                </div>
            </div>
        `  
        }) ;

        document.querySelector(`.js-${section}-section`).innerHTML = bookHTML ;

        newRandomBooks = randomBooks ;
    }

    renderTrending('trending', 'trending') ;
    renderTrending('rocomended', 'recomended') ;
    renderTrending('newReleases', 'new') ;


    document.querySelectorAll('.add-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            let bookName = '' ;
            const id = btn.dataset.name ;
            console.log(id)

            bookData.forEach((book) => {
                if(book.id === Number(id)){
                    bookName = book.title ;
                    console.log('Hi')
                }
            }) ;

            alert(`${bookName} has been added to your collection!!`) ;
            console.log(btn.dataset) ;
        }) ;
    }) ; 
}


export {renderBooks}