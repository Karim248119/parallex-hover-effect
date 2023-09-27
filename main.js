const container = document.querySelector('.container')
const char = document.querySelectorAll('.character')

document.body.addEventListener('mouseover',(e)=>{
    let x = ((window.innerWidth/3)-e.pageX)/30
    let y = ((window.innerWidth/3)-e.pageY)/30
    container.style.transform=`rotateX(${-y*2}deg) rotateY(${-x*2}deg) translatey(${x*2}px) translatex(${y*2}px)`
    char.forEach.call(char,char=>{
        char.style.transform=`translatey(${-y*7}px) translatex(${-x*5}px)`
    })
})