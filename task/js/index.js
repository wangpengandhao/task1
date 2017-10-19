// window.onload=function(){
// 	let banner=document.querySelectorAll('.banner a');
// 	let w=parseInt(getComputedStyle(banner[0],null).width);
// 	setInterval(move,3000);
// 	let next=0,
// 		now=0;
// 	let flag=true;
// 	function move(){
// 		next++;
// 		if(next==banner.length){
// 			next=0;
// 		}
// 		banner[next].style.left=`${w}px`;
// 		animate(banner[now],{left:-w});
// 		animate(banner[next],{left:0},function(){
// 			flag=true;
// 		});
// 		now=next;
// 	}
// }
$(function(){
	let w = parseInt(getComputedStyle($('.banner > a')[0],null).width);
	setInterval(move,3000);
	let next=0,
		now=0;
	let flag=true;
	function move(){
		next++;
		if(next==$('.banner > a').length){
			next=0;
		}
		$('.banner > a')[next].style.left=`${w}px`;
		animate($('.banner > a')[now],{left:-w});
		animate($('.banner > a')[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}
})
