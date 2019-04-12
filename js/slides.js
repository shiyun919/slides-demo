let n 
初始化()
let timer = setInterval(()=>{
	makeLeave(getImage(n))
		.one('transitionend', (e)=>{
			makeEnter($(e.currentTarget))
		})
		makeCurrent(getImage(n+1))
	n += 1
},3000)


//解决一个bug 切走再回来页面会出现乱的问题

//页面切走了 ，轮播停止；切回来再播放

document.addEventListener('visibilitychange', function(e){
	if(document.hidden){
		window.clearInterval('timer')
	}else{
		timer = setInterval(()=>{
			makeLeave(getImage(n))
				.one('transitionend', (e)=>{
					makeEnter($(e.currentTarget))
				})
				makeCurrent(getImage(n+1))
			n += 1
		},3000)
	}
})












//封装函数，把几行代码放在一个函数里

function getImage(n){
	return $(`.slidesPicture > img:nth-child(${x(n)})`)
}
			
function x(n){
	if(n>3){
		n = n%3
		if(n===0){
			n = 3
		}
	} //n的取值1 2 3
	return n
}




function 初始化(){
	n = 1
	$(`.slidesPicture > img:nth-child(${n})`).addClass('current')
		.siblings().addClass('enter')
}

function makeCurrent($node){
	$node.removeClass('enter leave').addClass('current')
	return $node
}

function makeLeave($node){
	$node.removeClass('current enter').addClass('leave')
	return $node
}

function makeEnter($node){
	$node.removeClass('leave current').addClass('enter')
	return $node
}