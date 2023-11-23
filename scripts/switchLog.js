function LogBtnFunctionality(){
    document.querySelector('.js-join-btn').addEventListener('click', () => {
        document.querySelector('.js-join-btn').classList.add('background-edit') ;
        document.querySelector('.js-log-btn').classList.add('background-edit-remove') ;
    })
}

export{LogBtnFunctionality} ;