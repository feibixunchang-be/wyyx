/* 放大镜 */
var imgmed = $1(".imgmed")//minBox
var mask = $1(".mask")//mask
var imgnone = $1(".imgnone")//maxBox
var img = $1(".imgnone img")//img

imgmed.onmousemove = function(e){
  var e = e || event;
  // 计算msk的定位坐标
// console.log("11111111");
  var maskLeft = e.pageX - offset(imgmed).left - mask.clientWidth/2;
  var maskTop = e.pageY - offset(imgmed).top - mask.clientHeight/2 ;
  //  console.log(e.clientY);
  // console.log(offset(imgmed).top);
  // console.log(mask.clientHeight); 
  if (maskLeft < 0) {
    maskLeft = 0
  }
  if (maskLeft >= (imgmed.clientWidth-mask.clientWidth)) {
    maskLeft = imgmed.clientWidth-mask.clientWidth
  }
  if (maskTop < 0) {
    maskTop = 0
  }
  if (maskTop >= (imgmed.clientHeight-mask.clientHeight)) {
    maskTop = imgmed.clientHeight-mask.clientHeight
  }
  mask.style.left = maskLeft + 'px'
  mask.style.top = maskTop + 'px'
  var scaleX = maskLeft/(imgmed.clientWidth-mask.clientWidth)
  var scaleY = maskTop/(imgmed.clientHeight-mask.clientHeight)

  img.style.left = -scaleX*(img.clientWidth-imgnone.clientWidth) + 'px'
  img.style.top = -scaleY*(img.clientHeight-imgnone.clientHeight) + 'px'

}
imgmed.onmouseenter = function (){
  mask.style.display = 'block'
  imgnone.style.display = 'block'
}
imgmed.onmouseleave = function (){
  mask.style.display = 'none'
  imgnone.style.display = 'none'
}


// 切图
$(function(){
  var imgsam = document.querySelectorAll('.imgsambox .imgsam img')
var imgmedd = $1(".imgmed img")//minBox
var imgnonee = $1(".imgnone img")//maxBox

imgmedd.src ="../img/spxq22.webp";
// console.log(imgsam);
var imgarr = ["../img/spxq12.webp","../img/spxq22.webp","../img/spxq32.webp","../img/spxq42.webp","../img/spxq52.webp"]
var prevIndex = 0;
for(var i = 0,len = imgsam.length; i < len; i++ ){
  imgsam[i].index = i;
  imgsam[i].onmouseenter = function(){
  imgmedd.src  = imgarr[this.index];
  imgnonee.src  = imgarr[this.index];
  // prevIndex = this.index
  }
}
})

// ajax请求
$.ajax({
  url:'../data/goods.json',
  type:'get',
  dateType:'json',
  success:function(json){
    var goodsStr = '';
    $.each(json,function(index,item){
      goodsStr +=`<p class="ptop">${item.goodsrightp[0]}<span>99.5%</span></p>
                <div class="desc">${item.goodsrightdesc[0]}<a href="#">好评率></a></div>
                <div class="price">
                  <span class="jg">价格</span><i class="ipri">${item.goodsrightjg[0]}</i>
                  <p class="pri1">促销<span>全场换购</span><i>${item.goodsrightpri1[0]}</i></p>
                  <p class="pri2">购物返<i>最高返</i><strong>${item.goodsrightpri2[0]}</strong><a href="#">?</a></p>
                  <p class="pri1">邮费<i class="prii1">${item.goodsrightpri3[0]}</i></p>
                  <p class="pri1">配送<i class="prii1">至</i></p>
                  <p class="pri3">服务<span >･ ${item.goodsrightpri4[0]}</span><span>･ ${item.goodsrightpri4[1]}</span><span>･ ${item.goodsrightpri4[2]} </span></p>
                </div>
                <div class="scale">
                  <span>规格</span><img src="../img/spxq21.webp" alt="">
                </div>`
    })
    $(".right_inner").html(goodsStr)
  }
})

// 其他
$(function(){
 var numstr = $1(".num strong")//img
var numi = $2(".num i")//img
// console.log(numstr.innerText);
var cont =1;
// console.log(parseInt(numstr.innerText));
    numi[0].onclick = function(){ 
      if(numstr.innerText<=1){
        numstr.innerText = 1
      }else{
        cont--;
        numstr.innerText = cont;
      };
    }; 
    numi[1].onclick = function(){ 
      cont++;
      numstr.innerText = cont;

    };    
  
})

/* $((window.onresize = function(){
  var nav = $1("#nav")
  var res = document.body.clientWidth;
  window.onscroll = function(){
    var scr = document.documentElement.scrollTop;
    
    if(scr <= 142){
      nav.style.position = "relative";
      nav.style.left =0;
    }else{
      nav.style.position = "fixed";
      nav.style.top =0+"px";
      nav.style.left =(res-1090)/2+"px";
    }
  }
})()) */

$((window.onresize = function(){
  var nav = $1("#nav")
  var res = document.body.clientWidth;
  window.onscroll = function(){
    var scr = document.documentElement.scrollTop;
    
    if(scr <= 142){
      nav.style.position = "relative";
      nav.style.left =0;
    }else{
      nav.style.position = "fixed";
      nav.style.top =0+"px";
      nav.style.left =(res-1090)/2+"px";
    }
  }
})()) 