

$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')

setInterval(()=>{
  $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
    .one('transitionend', (xx)=>{
      $(xx.currentTarget).removeClass('leave').addClass('enter')
    })
  $('.images > img:nth-child(2)').removeClass('enter').addClass('current')
},3000)

setInterval(()=>{
  $('.images > img:nth-child(2)').removeClass('current').addClass('leave')
    .one('transitionend', (xx)=>{
      $(xx.currentTarget).removeClass('leave').addClass('enter')
    })
  $('.images > img:nth-child(3)').removeClass('enter').addClass('current')
},6000)

setInterval(()=>{
  $('.images > img:nth-child(3)').removeClass('current').addClass('leave')
    .one('transitionend', (xx)=>{
      $(xx.currentTarget).removeClass('leave').addClass('enter')
    })
  $('.images > img:nth-child(1)').removeClass('enter').addClass('current')
},9000)

setInterval(()=>{
  $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
    .one('transitionend', (xx)=>{
      $(xx.currentTarget).removeClass('leave').addClass('enter')
    })
  $('.images > img:nth-child(2)').removeClass('enter').addClass('current')
},12000)

