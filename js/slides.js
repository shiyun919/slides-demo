            $('.slidesPicture > img:nth-child(1)').addClass('current')
			$('.slidesPicture > img:nth-child(2)').addClass('enter')
			$('.slidesPicture > img:nth-child(3)').addClass('enter')

			setInterval(()=>{
				$('.slidesPicture > img:nth-child(1)').removeClass('current').addClass('leave')
					.one('transitionend', (xx)=>{
					$(xx.currentTarget).removeClass('leave').addClass('enter')
					})
				$('.slidesPicture > img:nth-child(2)').removeClass('enter').addClass('current')
				},3000)

