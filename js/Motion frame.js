
   // json 
   //startMove(obj,{attr1:iTarget,attr2:iTarget2},fn)

 function startMove(obj,json,fn){
    //�������ʱ��
   clearInterval(obj.timer);

	//��Ӷ�ʱ��

   obj.timer=setInterval(function(){
	  //������˱���
	  var flag=true;
      
	  //ѭ������json
	  for(var attr in json){

	  //��ȡ��ǰ����ֵ
	  var ics=0;
	  if(attr=='opacity'){
	    ics=Math.round(parseFloat(getStyle(obj,attr))*100);
	  }else{
	    ics=parseInt(getStyle(obj,attr));
	  }

	   //�����ٶ�
      var speed=(json[attr]-ics)/8;
	      speed=speed>0? Math.ceil(speed):Math.floor(speed);

	  //�жϲ�������ֵ���ﵽĿ��ֵ�������˶�
	  if(ics!==json[attr]){
          flag=false;
	   }
	    if(attr=='opacity'){
		   obj.style.filter='alpha(opacity='+(ics+speed)+')'
		   obj.style.opacity=(ics+speed)/100;
		 }else{
		   obj.style[attr]=ics+speed+'px';
		 }
	 } 
     
	 //�ж�����ֵ���ﵽ��Ŀ��ֵ�������ʱ��������ִ�лص�����
     if(flag){
	     clearInterval(obj.timer);
		 if(fn){
		   fn();
		 }
	  }
	},30)
}
  //��ȡ��ʽ�ĺ���
 function getStyle(obj,attr){
    if(obj.currentStyle){
	   return obj.currentStyle[attr];
	}else{
	   return getComputedStyle(obj,null)[attr];
	}
   
   }