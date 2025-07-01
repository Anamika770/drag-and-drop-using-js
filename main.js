let newX=0, newY=0, startX=0, startY=0;
const card = document.getElementById('card')

card.addEventListener('mousedown',(e)=>{
    startX= e.clientX
    startY= e.clientY

    document.addEventListener('mousemove',mouseMove)
    document.addEventListener('mouseup', mouseUp)
})

function mouseMove(e){
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    card.style.left = (card.offsetLeft - newX) + 'px'
    card.style.top =( card.offsetTop - newY) + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}