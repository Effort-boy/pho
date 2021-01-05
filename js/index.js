	 // 获取元素
	var sec = document.getElementById('sec');
	var sec_1 = document.getElementById('sec_1');
	var nav_sec = document.getElementsByClassName('nav_sec');
	var nav = document.getElementsByClassName('nav');
	// 欢迎元素
	var body_wec_btn = document.getElementById('body_wec_bth');
		// 视频元素
	var bo2_video = document.getElementsByClassName('bo2_video');
	var video = document.getElementsByName('video');
	var video1_name = document.getElementById('video1_name');
	var video2_name = document.getElementById('video2_name');

	// 导航效果
	sec.onmouseenter = function(){
		nav_sec[0].style.display="block";
	}
	sec_1.onmouseenter = function(){
		nav_sec[0].style.display="none";
	}
	nav[0].onmouseleave = function(){
		nav_sec[0].style.display="none";
	}
	// 欢迎时间
	body_wec_btn.onclick = function(){
		alert("恭喜你,找到了我.😉");
	}
	// 视频效果
	bo2_video[0].onmouseenter =function(){
		video1_name.style.color = 'white';
		video1_name.style.transform = 'scale(1.1)';
		video1_name.style.boxShadow = '1px 1px 10px #412a1c';
	}
	bo2_video[0].onmouseleave =function(){
		video1_name.style.color = '#e4d0a4';
		video1_name.style.transform = '';
		video1_name.style.boxShadow = '';
	}
	bo2_video[1].onmouseenter =function(){
		video2_name.style.color = 'white';
		video2_name.style.transform = 'scale(1.1)';
		video2_name.style.boxShadow = '1px 1px 10px #412a1c';
	}
	bo2_video[1].onmouseleave =function(){
		video2_name.style.color = '#e4d0a4';
		video2_name.style.transform = '';
		video2_name.style.boxShadow = '';
	}
	video[0].onmouseenter =function(){
		if (this.paused) {
		  this.play(); 
		}	
	}
	video[0].onmouseleave =function(){
		if (this.paused == false) {
		  this.pause(); 
		}			
	}
	video[1].onmouseenter =function(){
		if (this.paused) {
		  this.play(); 
		}
	}
	video[1].onmouseleave =function(){
		if (this.paused == false) {
		  this.pause(); 
		}
	}