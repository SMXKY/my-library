function carousel(){
    const carouselData = [
        {
            imageIndex: 0,
            imageText: "Unlimited Titles To Binge On My Library"
        },

        {
            imageIndex: 1,
            imageText: "Harry Potter Collection"
        },

        {
            imageIndex: 2,
            imageText: "50 Shades Of Gray Collection"
        },

        {
            imageIndex: 3,
            imageText: "Charles Dickens Collection"
        }
    ] ;


    const image = document.querySelector('.js-carousel-image') ;
    const title = document.querySelector('.js-carousel-title') ;
    let counter = 0 ;


    function checkingCounter(){
        if(counter === 0){
            image.src = 'images-and-icons/carousel-images/0.jpg' ;
            title.innerHTML = carouselData[counter].imageText ;
            document.querySelector('.js-span-0').classList.add('on-span') ;
            document.querySelector('.js-span-1').classList.remove('on-span') ;
            document.querySelector('.js-span-2').classList.remove('on-span') ;
            document.querySelector('.js-span-3').classList.remove('on-span') ;
        }else if(counter === 1){
            image.src = 'images-and-icons/carousel-images/1.jpg' ;
            title.innerHTML = carouselData[counter].imageText ; 
            document.querySelector('.js-span-1').classList.add('on-span') ;
            document.querySelector('.js-span-0').classList.remove('on-span') ;
            document.querySelector('.js-span-2').classList.remove('on-span') ;
            document.querySelector('.js-span-3').classList.remove('on-span') ;
        }else if(counter === 2){
            image.src = 'images-and-icons/carousel-images/2.jpg' ;
            title.innerHTML = carouselData[counter].imageText ;
            document.querySelector('.js-span-2').classList.add('on-span') ;
            document.querySelector('.js-span-1').classList.remove('on-span') ;
            document.querySelector('.js-span-0').classList.remove('on-span') ;
            document.querySelector('.js-span-3').classList.remove('on-span') ;
        }else{
            image.src = 'images-and-icons/carousel-images/3.jpeg' ;
            title.innerHTML = carouselData[counter].imageText ;
            //counter = 0 ;
            document.querySelector('.js-span-3').classList.add('on-span') ;
            document.querySelector('.js-span-1').classList.remove('on-span') ;
            document.querySelector('.js-span-2').classList.remove('on-span') ;
            document.querySelector('.js-span-0').classList.remove('on-span') ;
        }
    }

    image.src = 'images-and-icons/carousel-images/0.jpg' ;
    title.innerHTML = carouselData[counter].imageText ;
    document.querySelector('.js-span-0').classList.add('on-span') ;

    let carouselId;

    carouselId = setInterval(() => {
        if(counter > 2){
            counter = 0 ;
        }else{
            counter++ ;
        }

        checkingCounter() ;
    }, 4000) ;


    //Left and Right Carousel Buttons

    const leftButton = document.querySelector('.js-carousel-left-button') ;
    const rightButton = document.querySelector('.js-carousel-right-button') ;

    leftButton.addEventListener('click', () => {
        if(counter === 0){
            counter = 3 ;
        }else{
            counter-- ;
        }
        
        checkingCounter() ;
        clearInterval(carouselId) ;
        carouselId = setInterval(() => {
            if(counter > 2){
                counter = 0 ;
            }else{
                counter++ ;
            }
    
            checkingCounter() ;
        }, 4000) ;
    }) ;

    rightButton.addEventListener('click', () => {
        if(counter > 2){
            counter = 0 ;
        }else{
            counter++ ;
        }
        checkingCounter() ;
        clearInterval(carouselId) ;
        carouselId = setInterval(() => {
            if(counter > 2){
                counter = 0 ;
            }else{
                counter++ ;
            }
    
            checkingCounter() ;
        }, 4000) ;
    }) ;
}

export {carousel}