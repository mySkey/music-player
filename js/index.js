window.addEventListener('DOMContentLoaded',function(e){
  var music_api_url = 'http://www.22family.com/dome/musics/'
  var image_api_url = 'http://www.22family.com/dome/myplayer/images/bgs/'
	var info=[];
	var timeArr=[];
	var showLrcArr=[];
	var currentLrc=0;
	var num = 0;
	var timer;
	var lrcDom;
  //本来这个该用后台来传，根据不同的type：最新 热门 榜首分类排序；只实现建议功能，以后做音乐播放器也是用vue，原生工作量太大了
  var musicList = [
              {
                musicUrl: '起风了.mp3',
                imgUrl: '0.jpg',
                sing: '起风了',
                singer: '买辣椒也用卷'
              },
              { 
                musicUrl: '说散就散.mp3',
                imgUrl: '1.jpg',
                sing: '说散就散',
                singer: '袁娅维'
              },
              { 
                musicUrl: '一百万个可能.mp3',
                imgUrl: '2.jpg',
                sing: '一百万个可能',
                singer: 'Christine Welch'
              },
              { 
                musicUrl: '体面.mp3',
                imgUrl: '3.jpg',
                sing: '体面',
                singer: '于文文'
              },
             {
                musicUrl: '岑宁儿 - 追光者.mp3',
                imgUrl:'4.jpg',
                sing:'追光者',
                singer:'芩宁儿'
             },
             {
                musicUrl: '广东爱情故事.mp3',
                imgUrl:'5.jpg',
                sing:'广东爱情故事',
                singer:'广东雨神'
             },
             {
                musicUrl: '成都.mp3',
                imgUrl:'6.jpg',
                sing:'成都',
                singer:'赵雷'
             },
             {
                musicUrl: '校长 - 带你去旅行.mp3',
                imgUrl:'7.jpg',
                sing:'带你去旅行',
                singer:'校长'
             },
             {
                musicUrl: '陈一发儿 - 牵丝戏.mp3',
                imgUrl:'8.jpg',
                sing:'牵丝戏',
                singer:'陈一发儿'
             },
             {
                musicUrl: '任然 - 空空如也.mp3',
                imgUrl:'9.jpg',
                sing:'空空如也',
                singer:'任然'
             },
             {
                musicUrl: '周杰伦 - 告白气球.mp3',
                imgUrl:'10.jpg',
                sing:'告白气球',
                singer:'周杰伦'
             },
             {
                musicUrl: '大壮 - 我们不一样.mp3',
                imgUrl:'11.jpg',
                sing:'我们不一样',
                singer:'大壮'
             },
             {
                musicUrl: '夏磊 - 可能否.mp3',
                imgUrl:'12.jpg',
                sing:'可能否',
                singer:'夏磊'
             },
             {
                musicUrl: '等你下课.mp3',
                imgUrl:'13.jpg',
                sing:'等你下课',
                singer:'周杰伦'
             },
             {
                musicUrl: '任然 - 三生.mp3',
                imgUrl:'14.jpg',
                sing:'三生',
                singer:'任然'
             },
             {
                musicUrl: '远走高飞.mp3',
                imgUrl:'15.jpg',
                sing:'远走高飞',
                singer:'金志文'
             },
             {
                musicUrl: '李袁杰 - 离人愁.mp3',
                imgUrl:'16.jpg',
                sing:'离人愁',
                singer:'李袁杰'
             },
             {
                musicUrl: '李玉刚 - 刚好遇见你.mp3',
                imgUrl:'17.jpg',
                sing:'刚好遇见你',
                singer:'李玉刚'
             },
             {
                musicUrl: '演员.mp3',
                imgUrl:'18.jpg',
                sing:'演员',
                singer:'薛之谦'
             },
             {
                musicUrl: '易燃易爆炸.mp3',
                imgUrl:'20.jpg',
                sing:'易燃易爆炸',
                singer:'化晨宇'
             }
  ]
  document.oncontextmenu=function(e){
    //或者return false;
    e.preventDefault();
  };
	e.preventDefault();
	function Player(){
		this.play = function(){
			audioDom.play();
		}
		this.pause = function(){
			audioDom.pause();
		}
		this.init = function(){
			audioDom = document.getElementById('player');
			//this.play();
		}
	}
	var player = new Player();
	player.init();
	var containerDom = document.getElementById('container');
	var nextDom = document.getElementsByClassName('next')[0];
	var afterDom = document.getElementsByClassName('after')[0];
	var pauseDom =document.getElementsByClassName('pause')[0];
	var boxDom = document.getElementsByClassName('box')[0];
	var sliderDom = document.getElementsByClassName('slider')[0];
	var swiperDom =document.getElementsByClassName('swiper')[0];
	var detialDom =document.getElementsByClassName('detial')[0];
	var textDom =document.getElementsByClassName('text')[0];
	var scrollDom =document.getElementsByClassName('content')[0];
	var nameDom =document.getElementsByClassName('music-name')[0];
	var singerDom =document.getElementsByClassName('singer')[0];
	var listDom =document.getElementsByClassName('list')[0];
	var musicListDom =document.getElementsByClassName('music-list')[0];
  var scrollProDom = document.getElementsByClassName('scroll-pro')[0];
  var lrcPlayDom =document.getElementsByClassName('lrc-play')[0];
  var lrcTimeDom = document.getElementsByClassName('lrc-time')[0];
	var mark = true;
	
	pauseDom.onclick = play;
  function play(){
		if(mark){
			player.pause();
			clearInterval(timer)
      for(var i = 1; i < 1000; i++) {
        clearInterval(i);
      }
			pauseDom.style.background = "url('images/play.png')";
			pauseDom.style.backgroundSize = 60 +'px ' +60 +'px';
			mark = false;
		}else{
			player.play();
			timer = setInterval(update,100)
			pauseDom.style.background = "url('images/pause.png')";
			pauseDom.style.backgroundSize = 60 +'px ' +60 +'px';
			mark = true;
		}
	}
	var currentDom =document.getElementsByClassName('current-time')[0];
	var totalDom = document.getElementsByClassName('total-time')[0];
	var boxW = boxDom.offsetWidth;
	//音乐随时间，进度条同步
	function update(){
		var bili = audioDom.currentTime/audioDom.duration;
		var x = boxW*bili;
			swiperDom.style.width = x +'px';
			sliderDom.style.left = x +'px';
    var curMinute = Math.floor(audioDom.currentTime/60),
      curSecond = Math.floor(audioDom.currentTime%60),
      tolSecond = Math.floor(audioDom.duration%60);
      if(curSecond<10){
        currentDom.innerHTML = curMinute +':0'+curSecond ;
      }else{
        currentDom.innerHTML = curMinute +':'+curSecond ;
      }
      tolSecond<10?totalDom.innerHTML = Math.floor(audioDom.duration/60)+ ':0'+tolSecond:totalDom.innerHTML = Math.floor(audioDom.duration/60)+ ':'+tolSecond;
		//显示时间与音乐同步
		checkLrc(audioDom.currentTime)
		lrcDom = document.querySelectorAll('.lrc');
		//console.log(currentLrc)
		//歌词渲染,不用框架的列表渲染  浏览器的重绘与回流的误区，之前太费性能
		for(var i=0;i<lrcDom.length;i++){
      if(i==currentLrc){
        lrcDom[i].style.color = '#dd5866';
        lrcDom[i].style.fontSize = '18px';
      }else{
        lrcDom[i].style.color = '#ddd';
        lrcDom[i].style.fontSize = '15px';
      }
    }
    console.log(currentLrc)
		//同步滑动到歌词显示位置
    if(phone){
      scrollDom.onscroll = null;
    }
		scrollDom.scrollTop = 24*currentLrc;
	}
	//进度条拖动同步
	sliderDom.addEventListener('touchstart',function(e){
		var startX = e.touches[0].pageX,
				left = sliderDom.offsetLeft,
				x,
				song = true;
				document.addEventListener('touchmove',function(e){
					var endX = e.touches[0].pageX;
							x = endX - startX + left;
							var ratio = x/boxW;
					var currentTime = ratio * audioDom.duration;
							if(song){
								audioDom.currentTime = currentTime;
								if(x<0) x=0;
								if(x>boxW) x=boxW;
								swiperDom.style.width = x +'px';
								sliderDom.style.left = x +'px';
							}
					
							document.addEventListener('touchend',function(){
								this.ontouchmove = null;
								song = false;
							},false);
				},false);
	},false);
	//进度条点击同步
	boxDom.addEventListener('click',function(e){
		var boxDomLeft = e.clientX - boxDom.offsetLeft;
		var dianji = boxDomLeft/boxW;
				swiperDom.style.width = boxDomLeft +'px';
				sliderDom.style.left = boxDomLeft +'px';
				audioDom.currentTime = audioDom.duration*dianji;
	},false);
	// detialDom.innerHTML = musicList[0].text[0];
	//数据渲染，
	var length = musicList.length;
  //console.log(length)
	function  xunran(colse){
		audioDom.src = music_api_url + musicList[num].musicUrl;
		nameDom.innerHTML = musicList[num].sing;
		singerDom.innerHTML = musicList[num].singer;
		containerDom.style.backgroundSize = "100% 100%";
    containerDom.style.background = 'url('+image_api_url + musicList[num].imgUrl +')';
		
		pauseDom.style.background = "url('images/pause.png')";
		mark = true;
		if(colse){
			player.pause();
			mark = false;
			pauseDom.style.background = "url('images/play.png')";
		}
		pauseDom.style.backgroundSize = 60 +'px ' +60 +'px';
		//歌词渲染,不用框架的列表渲染
		 while(textDom.hasChildNodes()) //当elem下还存在子节点时 循环继续  
    {  
        textDom.removeChild(textDom.firstChild);  
    }  
		for(let i=0;i<musicList[num].text.length;i++){
			var geciDom = document.createElement('li');
			geciDom.style.color = '#ddd';
			geciDom.style.textShadow = '1px 1px 1px #999';
			geciDom.setAttribute('class','lrc')
			if(i==currentLrc){
				geciDom.style.color = '#dd5866';
				geciDom.style.fontSize = '18px';
			}else{
        geciDom.style.color = '#ddd';
        geciDom.style.fontSize = '15px';
      }
			geciDom.innerHTML = musicList[num].text[i];
			textDom.appendChild(geciDom);
		}
    //歌曲列表显示相应播放的
    everyDoms.forEach(function(v,k){
      v.style.color = k==num ? color() : '#ddd'
    })
	}

	//下一曲
	nextDom.addEventListener('click',function(){
		num = ++num%length;
    clearLrc()
	},false);
	//上一曲
	afterDom.addEventListener('click',function(){
		num--;
		if(num<0) num=0;
		clearLrc()
	},false);
	//用户想滑动歌词查看，清除定时器  电脑用户的户保留scroll清除定时器
  var scrollTimer,phone;
  var n = navigator.userAgent;
  if (n.match(/Android/i) || n.match(/webOS/i) || n.match(/iPhone/i) || n.match(/iPad/i) || n.match(/iPod/i) || n.match(/BlackBerry/i)) {
    phone = true
  }else{
    phone = false
  }
	scrollDom.ontouchmove=lookLrc
  scrollDom.onscroll=lookLrc
  function lookLrc(){
    clearInterval(timer);clearTimeout(scrollTimer);
    //滑动歌词后点击播放
    scrollProDom.style.opacity = 1;
    currentLrc =  Math.round(scrollDom.scrollTop/24);
    console.log(timeArr[currentLrc])
    var m = Math.floor(timeArr[currentLrc]/60)<10 ? '0'+ Math.floor(timeArr[currentLrc]/60) : Math.floor(timeArr[currentLrc]/60)
    var s = Math.floor(timeArr[currentLrc]%60)<10 ? '0'+Math.floor(timeArr[currentLrc]%60) :Math.floor(timeArr[currentLrc]%60)
    lrcTimeDom.innerHTML = m+':'+s;
    lrcClickPlay()
    scrollTimer = setTimeout(function(){
      if(phone) scrollProDom.style.opacity = 0;
      timer = setInterval(update,100)
    },2000)
  }
  //点击滑动歌词后播放相应的地方
  function lrcClickPlay(){
    lrcPlayDom.addEventListener('click',function(){
      if(currentLrc>=timeArr.length-1){
        currentLrc = timeArr.length-1
      }
      //console.log(timeArr[currentLrc],showLrcArr[currentLrc])
      audioDom.currentTime = timeArr[currentLrc]
      scrollProDom.style.opacity = 0;
      xunran();
    },false);
  }

  //切换歌曲是清除歌词
  function clearLrc(){
    scrollDom.scrollTop = 0;currentLrc=0;
    clearInterval(timer)
     while(textDom.hasChildNodes()) //当elem下还存在子节点时 循环继续  
    {  
        textDom.removeChild(textDom.firstChild);  
    }  
    ajaxGetHTML(musicList[num].sing,function(){
      musicList[num].text = showLrcArr;
      xunran()
    })
    timer = setInterval(update,100)
  }

	var listBl = true;  //指定菜单开关
	//歌曲列表的打开关闭
	listDom.addEventListener('click',function(){
		if(listBl){
			musicListDom.style.width = '30%';
			musicListDom.style.right = 0;
			listBl = false;
		}else{
			musicListDom.style.width = '30%';
			musicListDom.style.right = -500 + 'px';
			listBl = true;
		}
	},false);
	textDom.addEventListener('click',function(){
			if(listBl){
				musicListDom.style.width = '30%';
				musicListDom.style.right = 0;
				listBl = false;
			}else{
				musicListDom.style.width = '30%';
				musicListDom.style.right = -500 + 'px';
				listBl = true;
			}
	},false);
	//歌曲列表实现点击切换歌目
  var everyDoms;
	for(let j in musicList){
		var everyDom = document.createElement('li');
		everyDom.innerHTML = musicList[j].sing;
		everyDom.setAttribute("class",'every');
		musicListDom.appendChild(everyDom);
    everyDoms = document.querySelectorAll('.every');
    everyDoms[num].style.color = color(); 
		everyDom.addEventListener('click',function(){
			num = j;
			clearLrc();
      //选择歌曲后关闭菜单
      musicListDom.style.width = '30%';
      musicListDom.style.right = -500 + 'px';
      listBl = true;

      for(var i=0;i<everyDoms.length;i++){
        everyDoms[i].style.color='#ddd'
      }
      everyDoms[num].style.color = color();
		},false);
	}
	//随机颜色
	function color(){
		var g = Math.floor(Math.random()*255),
				r = Math.floor(Math.random()*255),
				b = Math.floor(Math.random()*255);
		return 'rgb('+ r +','+ g + ','+ b+')';
	}
	//歌词文件加载
	function ajaxGetHTML(music,callback) { 
      showLrcArr=[];timeArr=[];
      var url = 'http://111.231.205.170:3000/lrc?music='+music;  
      var xmlhttp = new XMLHttpRequest();  
      xmlhttp.onreadystatechange = function() {  
          if (xmlhttp.readyState == 4) {  
              var s = xmlhttp.responseText.replace(/[\r\n]/g,"");
              var arr = s.split('[')
              var infoArr = arr.slice(1,5);
              var lrcArr = arr.slice(5)
              lrcArr.forEach(function(v,k){
            		timeArr.push(v.slice(0,8))
             	  showLrcArr.push(v.slice(9,v.length))
              })
              timeArr = timeArr.map(function(v,k){
                return v = Number(v.slice(0,2))*60 + Number(v.slice(3,5))
              })
              showLrcArr = showLrcArr.map(function(v){
              	return (v.length==0||v==' ')?v = '~ ~ ~ ~ ~':v
              })
              //console.log(showLrcArr)
							callback();
          }  
      }  
      xmlhttp.open("GET", url, true);  
      xmlhttp.send(null);  
  }
  //利用回调函数将歌词替换
  ajaxGetHTML(musicList[num].sing,function(){
  	musicList[num].text = showLrcArr;
  	xunran(true)
  })


  //检验现在处于哪一句歌词
  function checkLrc(time){
  	time = Math.floor(time)
  	timeArr.forEach(function(v,k){
  		if(v <= time){
  			currentLrc = k
  		}
  	})
  }

},false);