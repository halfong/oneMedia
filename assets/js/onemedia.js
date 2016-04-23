/*jslint browser:true*/
/*global $, FastClick*/

//外部打开链接
$(document).ready(function() {
    'use strict';
  
  // Execute FastClick.js
  FastClick.attach(document.body);


  //在新窗口打开链接
  // $("a[href^=http]").each(function(){
  //   var excluded = [
  //    // format for whitelist: 'google.com', 'apple.com', 'myawesomeblog.com'
  //    // add your excluded domains here
  //    ];
  //   for(var i=0; i<excluded.length; i++) {
  //      if(this.href.indexOf(excluded[i]) != -1) {
  //         return true;
  //      }
  //   }
  //   if(this.href.indexOf(location.hostname) == -1) {
  //        $(this).click(function() { return true; }); 
  //        $(this).attr({ target: "_blank", });
  //        $(this).click();
  //   }
  // });

});

//scrollImg: 固定图片可见高度，随着屏幕滚动上下移动图片
//<div scrollImg="[img url]"></div>
(function(){

  if(!window.Zepto && !window.Jquery){ console.error('Zeptojs or Jquery Required!');return false;}
  // .scrollImg{
  //   width: 100%;
  //   //height: 300px; js handle this
  //   margin: 1em auto;
  //   overflow: hidden;
  //   >img{
  //     display: block;
  //     width: 100%;
  //     transform: translateY(0);
  //   }
  // }
  var H = window.innerHeight,
      boxH = window.innerWidth >750 ? 300 : window.innerWidth/3,
      $Eles = $('*[scrollImg]');


  $Eles.each(function(){
    $(this).css({
      'width':'100%',
      'height':boxH+'px',
      'overflow':'hidden'
    })
    .append('<img src="'+$(this).attr('scrollImg')+'" style="display:block;width:100%;"/>');
  });

  $(window).on('scroll',function(){
      $Eles.each(function(){
        var $IMG = $(this).children('img').first();
        if( $IMG.height() < boxH ){ return true; }
        
        var offsetTop = $(this).offset().top - window.scrollY;

        if(offsetTop<0 || offsetTop>H-boxH){ return true; }
        var ty = ( offsetTop/(H-boxH) - 1 ) * ($IMG.height()-boxH);
        $IMG.css('transform','translateY('+ty+'px)');
      });
  });

})();









