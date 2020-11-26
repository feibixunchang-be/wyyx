/* document.querySelector('h1').onclick = function (){
  alert(123);
}; */

/* 轮播图 */
var mySwiper = new Swiper ('.swiper-container', {
  //direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay:{
      delay:5000,
      disableOnInteraction: false,
  },
  // 如果需要分页器
  pagination: {
  el: '.swiper-pagination',
  dynamicBullets: true,
  dynamicMainBullets: 1,
  clickable :true,
  },
  
  // 如果需要前进后退按钮
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  
  // 如果需要滚动条
  scrollbar: {
  el: '.swiper-scrollbar',
  },
  // 切换效果
  effect : 'fade',
  freeMode : true,
  freeModeMomentumRatio : 1,
  
})




$(function(){
  $.ajax({
    url:'../data/index1.json',
    type:'get',
    dateType:'json',
    success:function(json){
      var goodsStr = ''
      $.each(json,function(index,item){
        goodsStr +=`<h3 class="H3">
                      <span class="sp">${item.first.h3span}</span>
                      <i class="iii">${item.first.h3i}</i>
                      <a href="#" class="aaa">${item.first.h3a}></a>
                    </h3>
                    <div class="bigshop">
                      <div class="shop1">
                        <img src="${item.firstimg[0].img1}" alt="" class="imgds">
                        <img src="${item.firstimg[0].img2}" alt="" class="imgcon">
                        <a href="#" class="h3a ">${item.firstimga[0]}</a>
                        <p class="ppp">${item.firstp[0]}</p>
                      </div>
                      <div class="shop1">
                        <img src="${item.firstimg[1].img1}" alt="" class="imgds">
                        <img src="${item.firstimg[1].img2}" alt="" class="imgcon">
                        <a href="#"  class="h3a ">${item.firstimga[1]}</a>
                        <p class="ppp">${item.firstp[1]}</p>
                      </div>
                      <div class="shop1">
                        <img src="${item.firstimg[2].img1}" alt="" class="imgds">
                        <img src="${item.firstimg[2].img2}" alt="" class="imgcon">
                        <a href="#"  class="h3a ">${item.firstimga[2]}</a>
                        <p class="ppp">${item.firstp[2]}</p>
                      </div>
                      <div class="shop1">
                        <img src="${item.firstimg[3].img1}" alt="" class="imgds">
                        <img src="${item.firstimg[3].img2}" alt="" class="imgcon">
                        <a href="#"  class="h3a ">${item.firstimga[3]}</a>
                        <p class="ppp">${item.firstp[3]}</p>
                      </div>
                    </div>`
      })
      $(".first").html(goodsStr)
    }
  });
  $.ajax({
    url:'../data/index2.json',
    type:'get',
    dateType:'json',
    success:function(json){
      var goodsStr = ''
      $.each(json,function(index,item){
        goodsStr +=`<h3 class="H3">
                      <span class="sp">${item.sentiment.h3span}</span>
                      <i class="iii">${item.sentiment.h3i1}</i>
                      <i class="iii">${item.sentiment.h3i2}</i>
                      <a href="#" class="aaa">${item.sentiment.h3a}></a>
                    </h3>
                  <div class="stmt">
                    <div class="stmt_left">
                      <div>
                        <img src="${item.sentimentimg[0]}" alt="" class="rqimg">
                      </div>
                        <a href="#" class="h3a">${item.sentimenta[0]}</a>
                        <p class="ppp">${item.sentimentp[0]}</p>
                    </div>
                    <div class="stmt_right">
                      <div class="pop">
                        <div>
                          <img src="${item.sentimentimg[1]}" alt="" class="rqimg">
                        </div>
                        <a href="#" class="h3a">${item.sentimenta[1]}</a>
                        <p class="ppp">${item.sentimentp[1]}</p>
                      </div>
                      <div class="pop">
                        <div>
                          <img src="${item.sentimentimg[2]}" alt="" class="rqimg">
                        </div>
                        <a href="#" class="h3a">${item.sentimenta[2]}</a>
                        <p class="ppp">${item.sentimentp[2]}</p>
                      </div>
                      <div class="pop">
                        <div>
                          <img src="${item.sentimentimg[3]}" alt="" class="rqimg">
                        </div>
                        <a href="#" class="h3a">${item.sentimenta[3]}</a>
                        <p class="ppp">${item.sentimentp[3]}</p>
                      </div>
                      <div class="pop">
                        <div>
                          <img src="${item.sentimentimg[4]}" alt="" class="rqimg">
                        </div>
                        <a href="#" class="h3a">${item.sentimenta[4]}</a>
                        <p class="ppp">${item.sentimentp[4]}</p>
                      </div><div class="pop">
                        <div>
                          <img src="${item.sentimentimg[5]}" alt="" class="rqimg">
                        </div>
                        <a href="#" class="h3a">${item.sentimenta[5]}</a>
                        <p class="ppp">${item.sentimentp[5]}</p>
                      </div><div class="pop">
                        <div>
                          <img src="${item.sentimentimg[6]}" alt="" class="rqimg">
                        </div>
                        <a href="#" class="h3a">${item.sentimenta[6]}</a>
                        <p class="ppp">${item.sentimentp[6]}</p>
                      </div>
                    </div>
                  </div>`
      })
      $(".sentiment").html(goodsStr)
    }
  })

  $.ajax({
    url:'../data/index3.json',
    type:'get',
    dateType:'json',
    success:function(json){
      var goodsStr = ''
      $.each(json,function(index,item){
        goodsStr +=`<h3 class="H3">                                                                                                              
        <span class="sp">${item.limit.h3span}</span>
        <a href="#" class="aaa">${item.limit.h3a}></a>
      </h3>
      <div class="limit_left"><img src="${item.limitimg[0]}" alt=""></div>
      <div class="limit_right">
        <div class="limitimg">
          <img src="${item.limitimg[1]}" alt=""> 
          <div class="limit1">
            <span>${item.limitspan[0]}</span>
            <strong>${item.limitstr[0]}</strong>
            <div class="limit2">
              <div><div></div></div>
              <strong>${item.limitstro[0]}</strong>
            </div>
            <p>限时价<i>${item.limitpp[0]}</i></p>
            <div class="limit3">立即抢购</div>
          </div>
        </div>
        <div class="limitimg">
          <img src="${item.limitimg[2]}" alt="">
          <div class="limit1">
            <span>${item.limitspan[1]}</span>
            <strong>${item.limitstr[1]}</strong>
            <div class="limit2">
              <div><div></div></div>
              <strong>${item.limitstro[1]}</strong>
            </div>
            <p>限时价<i>${item.limitpp[1]}</i></p>
            <div class="limit3">立即抢购</div>
          </div>
        </div> 
        <div class="limitimg">
          <img src="${item.limitimg[3]}" alt="">
          <div class="limit1">
            <span>${item.limitspan[2]}</span>
            <strong>${item.limitstr[2]}</strong>
            <div class="limit2">
              <div><div></div></div>
              <strong>${item.limitstro[2]}</strong>
            </div>
            <p>限时价<i>${item.limitpp[2]}</i></p>
            <div class="limit3">立即抢购</div>
          </div>
        </div> 
      </div>`
      })
      $(".limit").html(goodsStr)
    }
  })
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
  })
  $.ajax({
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

})