window.onload=function(){
	   var oPage=document.getElementsByClassName('page');
	   var oAnswer=document.getElementById('answer');
	   var oAudio=document.getElementById('audio');
	   var nextIcon=document.getElementById('next-icon');
	   var num=0;
	   var timer=null;
	   var oList=document.getElementsByClassName('list');
	   var list0=oList[0],list1=oList[1],list2=oList[2],list3=oList[3];
	   var oTime1=document.getElementById('time1');
	   var oTime2=document.getElementById('time2');
	   var oName1=document.getElementById('name1');
	   var oName2=document.getElementById('name2');
	   var oP6content=document.getElementById('page6-content');
	   var oP7content=document.getElementById('page7-content');
	   var thansYou=document.getElementById('thank-you');
	   var animate=false;//判断当前动画是否在执行中

	  /* timer=setInterval(function(){
		  console.log(num);
		  if(num<7){
			next();
		  }else if(num==7){
		    clearInterval(timer);
		  }
	   },8000);*/
	   //循环点击切屏按钮
	   addHandler(nextIcon,'tap',next);
      
	  //切换下一屏
	  function next(){
		  //clearInterval(timer);
		  console.log(num);
	   if(!animate)
		{
	      num++;
		 
          if(num%7==1){
		    switch1();
		  }else if(num%7==2){
		    switch2();
		  }else if(num%7==3){
		    switch3();
		  }else if(num%7==4){
		    switch4();
		  }else if(num%7==5){
		    switch5();
		  }else if(num%7==6){
		    switch6();
		  }else if(num%7==0){
		    switch7();
		  }
	    }
	   }
	   addHandler(oAnswer,'tap',switch1);
	   //向上滑第一屏
	   addHandler(oPage[0],'swipeUp',switch1);
	   
	   //切换第一屏
	   function switch1(){
		 animate=true;
		 var oLi=list0.getElementsByTagName('li');
		 startMove(oPage[0],{opacity:0},function(){
		   oPage[0].style.display='none';
		 });
		 oPage[1].style.display='block';
		 startMove(oPage[1],{opacity:100},function(){
		   oAudio.src='music/003.mp3';
		 });
		 nextIcon.style.display='block';
		 num++;
		
		 for(var i=0;i<oLi.length;i++){
			 
		    startMove(oLi[0],{opacity:100},function(){
			  startMove(oLi[1],{opacity:100},function(){
			     startMove(oLi[2],{opacity:100},function(){
			       startMove(oLi[3],{opacity:100},function(){
			          startMove(oLi[4],{opacity:100},function(){
			              startMove(oLi[5],{opacity:100});
						  animate=false;
			        });
			     });
			  });
			});
		 });
		}
	   }
	   //向下滑第二屏
	   addHandler(oPage[1],'swipeDown',function(){
		 startMove(oPage[1],{opacity:0},function(){
		   oPage[1].style.display='none';
		 });
		 oPage[0].style.display='block';
		 startMove(oPage[0],{opacity:100});
		 num--;
	   });

	   //向上滑第二屏
	   addHandler(oPage[1],'swipeUp',switch2);

	   //切换第二屏
	   function switch2(){
		   animate=true;
		  var oLi1=list1.getElementsByTagName('li');
		  oPage[2].style.webkitTransition="-webkit-transform 3000ms";
	      oPage[2].style.webkitTransform='translate(0px,0px)';
	      setTimeout(handler,2000);

		  function handler(){
			 for(var i=0;i<oLi1.length;i++){
				startMove(oLi1[0],{height:50},function(){
				  startMove(oLi1[1],{height:50},function(){
					 startMove(oLi1[2],{height:50},function(){
					   startMove(oLi1[3],{height:50},function(){
						  startMove(oLi1[4],{height:50},function(){
							  startMove(oLi1[5],{height:50});
							  animate=false;
						});
					 });
				  });
				});
			  });
			}
		  }
	   }

	   //向下滑第三屏
	   addHandler(oPage[2],'swipeDown',function(){
		  oPage[2].style.webkitTransition="-webkit-transform 3000ms";
	      oPage[2].style.webkitTransform='translate(0px,800px)';
		  num--;
	   });
	  
	   //向上滑第三屏
	   addHandler(oPage[2],'swipeUp',switch3);
       //切换第三屏
	   function switch3(){
		   animate=true;
		  oPage[3].style.webkitTransition="-webkit-transform 3000ms";
	      oPage[3].style.webkitTransform='translate(0px,0px)  rotateX(0deg)';
		  setTimeout(function(){
			oTime1.style.webkitTransition="-webkit-transform 3000ms";
	        oTime1.style.webkitTransform='rotateY(0deg)';
			oName1.style.webkitTransition="-webkit-transform 3000ms";
	        oName1.style.webkitTransform='rotateY(0deg)';
		    startMove(list2,{opacity:100},function(){
			  animate=false;
			});
		  },2000);
		  
	   }
	    
	   //向下滑第四屏
	   addHandler(oPage[3],'swipeDown',function(){
		  oPage[3].style.webkitTransition="-webkit-transform 3000ms";
	      oPage[3].style.webkitTransform='translate(0px,0px)  rotateY(90deg) rotateZ(180deg) ';
		  num--;
	   });

	    //向上滑第四屏
	   addHandler(oPage[3],'swipeUp',switch4);
       //切换第三屏
	   function switch4(){
		   animate=true;
		  oPage[4].style.webkitTransition="-webkit-transform 3000ms";
	      oPage[4].style.webkitTransform='rotateY(0deg) translate(0px,0px) ';
		  setTimeout(function(){
			oTime2.style.webkitTransition="-webkit-transform 3000ms";
	        oTime2.style.webkitTransform='rotateY(0deg)';
			oName2.style.webkitTransition="-webkit-transform 3000ms";
	        oName2.style.webkitTransform='rotateY(0deg)';
		    startMove(list3,{opacity:100},function(){
			  animate=false;
			});
		  },2000);
	   }
	   //向下滑第5屏
	   addHandler(oPage[4],'swipeDown',function(){
		  oPage[4].style.webkitTransition="-webkit-transform 3000ms";
	      oPage[4].style.webkitTransform='rotateY(90deg) translate(800px,0px) ';
		  num--;
	   });
	   
	   //向上滑第5屏
	   addHandler(oPage[4],'swipeUp',switch5);
       
	   //切换第五屏
	   function switch5(){
		   animate=true;
	     /*startMove(oPage[4],{opacity:0},function(){
		   oPage[4].style.display='none';
		 });*/
		 oPage[5].style.display='block';
		 startMove(oPage[5],{opacity:100},function(){
		    oP6content.style.webkitTransition="-webkit-transform 2000ms";
	        oP6content.style.webkitTransform=' translate(0px,0px)';
			animate=false;
		 });
	   }
	    //向下滑第6屏
	   addHandler(oPage[5],'swipeDown',function(){
	     startMove(oPage[5],{opacity:0},function(){
		   oPage[5].style.display='none';
		 });
		 oPage[4].style.display='block';
		 startMove(oPage[4],{opacity:100},function(){
		    animate=false;
		 });
		 num--;
	   });
      
	   //向上滑第6屏
	   addHandler(oPage[5],'swipeUp',switch6);
	   //切换第6屏
	   function switch6(){
		   animate=true;
	    /*startMove(oPage[5],{opacity:0},function(){
		   oPage[5].style.display='none';
		 });*/
		 oPage[6].style.display='block';
		 startMove(oPage[6],{opacity:100},function(){
		    oP7content.style.webkitTransition="-webkit-transform 1000ms";
	        oP7content.style.webkitTransform=' translate(0px,0px)';	
			animate=false;
		 });
	
	   }
       //向下滑第7屏
	   addHandler(oPage[6],'swipeDown',function(){
	     startMove(oPage[6],{opacity:0},function(){
		   oPage[6].style.display='none';
		 });
		 oPage[5].style.display='block';
		 startMove(oPage[5],{opacity:100});
		 num--;
	   });

	    //向上滑第7屏
	   addHandler(oPage[6],'swipeUp',switch7);
       
	   //切换第7屏
	   function switch7(){
		   animate=true;
	    /* startMove(oPage[6],{opacity:0},function(){
		   oPage[6].style.display='none';
		 });*/
		 oPage[7].style.display='block';
		 startMove(oPage[7],{opacity:100},function(){
		   startMove(thansYou,{opacity:100},function(){
		      animate=false;
		   });
		 });
		 nextIcon.style.display='none';
	   }
       //向下滑第8屏
	   addHandler(oPage[7],'swipeDown',function(){
	     startMove(oPage[7],{opacity:0},function(){
		   oPage[7].style.display='none';
		 });
		 oPage[6].style.display='block';
		 startMove(oPage[6],{opacity:100});
		 num--;
	   });


	  //事件处理程序
	  function addHandler(element,type,hanlder){
		if(element.addEventListener){
		   element.addEventListener(type,hanlder,false);
		}else if(element.attachEvent){
		   element.attachEvent("on"+type,hanlder);
		}else{
		   element["on"+type]=hanlder;
		}
	  }

	   //移出事件处理程序
	  function removeHandler(element,type,handler){
		 if(element.removeEventListener){
			  element.removeEventListener(type,handler,false);
			
		 }else if(element.detachEvent){
			  element.detachEvent("on"+type,handler);
		 }else{
			  element["on"+type]=null;
		 }
		   
		} 
};