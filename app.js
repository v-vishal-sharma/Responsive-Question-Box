//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(qts){
    const btns = qts.querySelector('.question-btn');
    btns.addEventListener('click', function(){

        questions.forEach(function(qt){
            if(qt !== qts){
                qt.classList.remove('show-text');
            }
        })

        qts.classList.toggle('show-text');
    }) 
});



// traversing the dom

// const qBtn = document.querySelectorAll('.question-btn');


// qBtn.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// })