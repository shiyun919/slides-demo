$('.slidesPicture > img:nth-child(1)').addClass('current')
$('.slidesPicture > img:nth-child(2)').addClass('enter')

setTimeout(()=>{
	$('.slidesPicture > img:nth-child(1)').removeClass('current').addClass('leave')
		.one('transitionend', (e)=>{
			$(e.currentTarget).removeClass('leave').addClass('enter')
		})
	$('.slidesPicture > img:nth-child(2)').removeClass('enter').addClass('current')
},3000)

			
setTimeout(()=>{
	$('.slidesPicture > img:nth-child(2)').removeClass('current').addClass('leave')
		.one('transitionend', (e)=>{
			$(e.currentTarget).removeClass('leave').addClass('enter')
		})
	$('.slidesPicture > img:nth-child(3)').removeClass('enter').addClass('current')
},6000)