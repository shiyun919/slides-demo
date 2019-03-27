

$('.slidesPicture > img:nth-child(1)').addClass('current')

$('.slidesPicture > img:nth-child(2)').addClass('enter')

$('.slidesPicture > img:nth-child(3)').addClass('enter')

let n = 1
setInterval(()=>{
	$(`.slidesPicture > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
		.one('transitionend', (e)=>{
			$(e.currentTarget).removeClass('leave').addClass('enter')
		})
	$(`.slidesPicture > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
	n += 1
},3000)

			
function x(n){
	if(n>3){
		n = n%3
		if(n===0){
			n = 3
		}
	} //n的取值1 2 3
	return n
}
