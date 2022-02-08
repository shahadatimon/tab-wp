const allmain = document.querySelectorAll('.main-body-left h4');

allmain.forEach(list => {

    list.addEventListener('click', function(e){
        e.preventDefault()
        allmain.forEach(list => {
            list.classList.remove('active')
        });
        list.classList.add('active')
    })
    
});