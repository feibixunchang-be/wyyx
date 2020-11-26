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

// 请求

/* $.ajax({
  url:'../data/index2.json',
  type:'get',
  dateType:'json',
  success:function(json){
    var goodsStr = ''
    $.each(json,function(index,item){
      goodsStr +=``
    })
    $(".sentiment").html(goodsStr)
  }
}) */

