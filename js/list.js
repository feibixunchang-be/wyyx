$(function(){
    $.ajax({
        url:'../data/list1.json',
        type:'get',
        dateType:'json',
        success:function(json){
          var goodsStr = ''
          $.each(json,function(index,item){
            goodsStr +=`<div class="list_top1 clearfix">
            <span>分类：</span>
            <div>
              <a href="#" class="first_a">全部</a>
              <a href="#">${item.listtop1[0]}</a>
              <a href="#">${item.listtop1[1]}</a>
              <a href="#">${item.listtop1[2]}</a>
              <a href="#">${item.listtop1[3]}</a>
              <a href="#">${item.listtop1[4]}</a>
              <a href="#">${item.listtop1[5]}</a>
              <a href="#">${item.listtop1[6]}</a>
              <a href="#">${item.listtop1[7]}</a>
              <a href="#">${item.listtop1[8]}</a>
              <a href="#">${item.listtop1[9]}</a>
              <a href="#">${item.listtop1[10]}</a>
              <a href="#">${item.listtop1[11]}</a>
              <a href="#">${item.listtop1[12]}</a>
              <a href="#">${item.listtop1[13]}</a>
              <a href="#">${item.listtop1[14]}</a>
              <a href="#">${item.listtop1[15]}</a>
              <a href="#">${item.listtop1[16]}</a>
              <a href="#">${item.listtop1[17]}</a>
              <a href="#">${item.listtop1[18]}</a>
              <a href="#">${item.listtop1[19]}</a>
              <a href="#">${item.listtop1[20]}</a>
              <a href="#">${item.listtop1[21]}</a>
              <a href="#">${item.listtop1[22]}</a>
              <a href="#">${item.listtop1[23]}</a>
              <a href="#">${item.listtop1[24]}</a>
              <a href="#">${item.listtop1[25]}</a>
              <a href="#">${item.listtop1[26]}</a>
            </div>
            </div>
            <div class="list_top2 clearfix">
              <span>配送地区：</span>
              <div>
                <a href="#" class="first_a">全部</a>
                <a href="#">${item.listtop2[0]}</a>
                <a href="#">${item.listtop2[1]}</a>
                <a href="#">${item.listtop2[2]}</a>
              </div>
            </div>
            <div class="list_top2 clearfix">
              <span>排序：</span>
              <div>
                <a href="#" class="first_a">默认</a>
                <a href="#">价格</a>
                <a href="#">上架时间</a>
              </div>
            </div>`
          })
          $(".list_inner").html(goodsStr)
        }
      });
      $.ajax({
        url:'../data/list1.json',
        type:'get',
        dateType:'json',
        success:function(json){
          var goodsStr = '';
          $.each(json,function(index,item){
              console.log(item.listimg.length);
            for(var i = 0,len = item.listimg.length; i < len; i++ ){
                goodsStr +=`<div class="shop2">
                        <a href="http://localhost:3000/goods.html#">
                        <img src="${item.listimg[i].img1}" alt="" class="imgds">
                        <img src="${item.listimg[i].img2}"" alt="" class="imgcon">
                        </a>
                        <a href="http://localhost:3000/goods.html"  class="h3a ">${item.listimga[i]}</a>
                        <p class="ppp">${item.listp[i]}</p>
                        <div>${item.listdiv[i]}</div>
                    </div> `
                }
          })
          $(".bigshop").html(goodsStr)
        }
      })
})


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





