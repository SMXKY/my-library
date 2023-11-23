import { bookData } from "./bookData.js";
function onSearchBar(){
    //New search functionality
    const allKeyWords = [] ;

    bookData.forEach((book) => {
        allKeyWords.push(book.genre) ;
        allKeyWords.push(book.title) ;
        allKeyWords.push(book.author) ;

        book.metaData.keywords.forEach((keyword) => {
            allKeyWords.push(keyword) ;
        }) ;
    }) ;

    const recBar = document.querySelector('.js-search-recomend') ;

    const searchInput = document.querySelector('.js-search-input') ;

    function searchData(target){
        const result = [] ;

        target = target.toLocaleLowerCase() ;

        bookData.forEach((book) => {
            if(book.title.toLocaleLowerCase() === target){
                result.push(book) ;
            }else if(book.author.toLocaleLowerCase() === target){
                result.push(book) ;
            }else if(book.metaData.releaseDate === Number(target)){
                result.push(book) ;
            }else{
                book.metaData.keywords.forEach((keyword) => {
                    if(keyword.toLocaleLowerCase() === target){
                        result.push(book) ;
                    }
                }) ;
            }
        }) ;

        let resultHtml = '' ;

        result.forEach((book) => {
            if(book.title.length > 27){ 
                book.title = book.title.slice(0, 27) + '...' ;
            }
            resultHtml +=   `
            <div class="book-card-template">
                <img src="images-and-icons/book-covers/${book.id}.jpg" alt="" class="book-img">
                <div class="book-info">
                    <p class="book-genre">${book.genre}</p>
                    <p class="book-name">${book.title}</p>
                    <p class="author">${book.author}</p>
                    <div class="book-options">
                        <button><img src="images-and-icons/read.png" alt="read"></button>
                        <button><img src="images-and-icons/add.png" alt="add"></button>
                    </div>
                </div>
            </div>
        `  
        }) ;

        document.querySelector('.actual-results').innerHTML = resultHtml ;

        if(resultHtml === ''){
            document.querySelector('.actual-results').innerHTML = `
                <div class="not-found">No results found</div>
            ` ;
        }
    }

    function scrollUp(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    function addSearchRec(value){
        let recHtml = '' ;
        const valArray = Array.from(value) ;
        const length = valArray.length ;
        const matchingKeys = [] ;

        allKeyWords.forEach((key) => {
            let counter = 0 ;

            const keyArray = Array.from(key) ;

            let Eacounter = 0 ;

            for(let i = 0; i < length ; i++){
                if(keyArray[i] === valArray[i]){
                    counter++ ;
                }
            }

            let exist = false ;

            if(counter === length){
                matchingKeys.forEach((keyM) => {
                    if(keyM === key){
                        exist = true ;
                    }
                }) ;
                
                if(exist === false){
                    matchingKeys.push(key) ;
                }
            }
        }); 

        console.log(matchingKeys) ;

        let checker = 0 ;

        matchingKeys.forEach((key) => {
            if(checker < 6){
                recHtml += `
                <div class="js-rec" data-name="${key}">
                    <img src="images-and-icons/search.png" alt="">
                    <span>${key}</span>
                </div>
                ` ;
            }

            checker++ ;
        }) ;

        document.querySelector('.js-search-recomend').innerHTML = recHtml ;

        document.querySelectorAll('.js-rec').forEach((rec) => {
            rec.addEventListener('mousedown', () => {
                searchData(rec.dataset.name) ;
                recBar.classList.remove('js-rec-on') ;
            }) ;
        }) ;
    }

    searchInput.addEventListener('input', () => {
        document.querySelector('.search-box').classList.remove('off') ;
        document.querySelector('.filter-section2').classList.remove('off') ;
        document.querySelector('.filter-section').classList.remove('off') ;
        recBar.classList.add('js-rec-on') ;
        searchData(searchInput.value) ;
        addSearchRec(searchInput.value) ;

        searchInput.addEventListener('change', () => {
            recBar.classList.remove('js-rec-on') ;
        }) ;

        scrollUp() ;
    }) ;

    document.querySelector('.search-button').addEventListener('click', () => {
        document.querySelector('.search-box').classList.remove('off') ;
        document.querySelector('.filter-section2').classList.remove('off') ;
        document.querySelector('.filter-section').classList.remove('off') ;
        searchData(searchInput.value) ;
        scrollUp() ;
    }) ;

    document.querySelector('.close-result').addEventListener('click', () => {
        document.querySelector('.search-box').classList.add('off') ;
        document.querySelector('.filter-section2').classList.add('off') ;
        document.querySelector('.filter-section').classList.add('off') ;
        searchInput.value = '' ;
        scrollUp() ;
    }) ;

    document.querySelectorAll('.sort-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const value = btn.dataset.genre ;
            document.querySelector('.search-box').classList.remove('off') ;
            document.querySelector('.filter-section2').classList.remove('off') ;
            document.querySelector('.filter-section').classList.remove('off') ;
            searchData(value) ;
            scrollUp() ;
        }) ;
    }) ;

    document.querySelectorAll('.date-input').forEach((btn) => {
        btn.addEventListener('input', () => {
            document.querySelector('.search-box').classList.remove('off') ;
            document.querySelector('.filter-section2').classList.remove('off') ;
            document.querySelector('.filter-section').classList.remove('off') ;
            searchData(btn.value) ;
            scrollUp() ;
        }) ;
    }) ;
}

export {onSearchBar}
