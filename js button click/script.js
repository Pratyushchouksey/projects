var body = document.querySelector('body')
var btns = document.querySelectorAll('button')

btns.forEach(function(btn){
    btn.addEventListener('click',function(){

        body.style.backgroundColor = btn.innerHTML
    })
})