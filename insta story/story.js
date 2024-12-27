var arr = [
    {
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxrEfkv84uJ2lgB7vz6swkx9QAZ4ZhvODZw&s',
        story:'https://m.media-amazon.com/images/I/61y2JOTH5xL._AC_UF894,1000_QL80_.jpg',
        username:'virat.kohli'
    },
    {
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlwbXb0r0znOmFb-5TqgQPhUSXCT-xjNjBQ&s',
        story:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/rohit-sharma-011825404-3x4_0.jpg?VersionId=hMHhJJSbAfO8wQ09sfrtxc_K14D5fUE',
        username:'rohitsharma45'
    },
    {
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJdOSvzSXbGJFgBiVa77Uj1VmZ052QSvZBA&s',
        story:'https://i.pinimg.com/736x/d9/c1/b3/d9c1b3975e74d7b03ec5fdd336ec8ce5.jpg',
        username:'hardikpandya93'
    },
    {
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVfzJj60Tq7Ljv8UbxgYgI599XTbiXpFisg&s',
        story:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/rishabh-pant-121450519-3x4_0.jpg?VersionId=jfD7TJh3dxNEwQURBiLHuHNLdYwJlMb2',
        username:'rishabpant'
    },
    {
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwgpJM1rxje78QHOKXnnPU7Ik5fM0XlCHdg&s',
        story:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW00_5wlNtEVCXmqxH0-DMSzPXs3pG2ZL-w&s',
        username:'indiancricketteam'
    },
    {
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOlD5SMl7JpIZM93ix0HafNaU52S_uScohNg&s',
        story:'https://pbs.twimg.com/media/GRSK8dyXgAAjnJH.jpg',
        username:'jaspritb1'
    },
]

var sum = ''

arr.forEach(function(elem,idx){

    sum = sum + ` <div class="story">
             <img id=${idx} src="${elem.dp}" alt="">
             
           </div>`
})

var storiyan = document.querySelector('#storiyan')
var full = document.querySelector('#full')
var fullUser= document.querySelector('#full h2')
var growth= document.querySelector('#growth')

storiyan.innerHTML = sum

storiyan.addEventListener('click',function(dets){

    var grow = 0

    var gold = arr[dets.target.id]

    var int = setInterval(function(){
     grow++
     console.log(grow);
     
     growth.style.width = grow+'%'
    },30)

    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`
 

    setTimeout(function(){
         full.style.display = 'none'
         clearInterval(int)
    },3000)
})