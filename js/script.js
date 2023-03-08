$(function(){
    mainInit();
    //링크막아주기 넣기
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
})
$(function(){
  $('#fullpage').fullpage({
    menu:'#header',
    navigation:true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  });
})

function mainInit(){
  gnb_menu();
  site_map();
  information();
  history();
  portfolio();
  award();
  career();
}

function gnb_menu(){
  $('#nav').hover(function(){
    $('#nav span').stop().animate({height:'160px'},300);
    $('#nav .gnb li ul').stop().animate({opacity:1},400)
  })
  $('#nav').on('mouseleave',function(){
    $('#nav span').stop().animate({height:'1px'},300);
    $('#nav .gnb li ul').stop().animate({opacity:0},200)
  })
  $('#nav .gnb li').hover(function(){
    $('#nav .gnb li').css('color','#000')
    $(this).css('color','#fff')
  })
}

function site_map(){
  $('#header .top-menu li.all-menu').click(function(){
    $('.site-map').show()
  })
  $('.site-map .close').click(function(){
    $('.site-map').hide()
  })
}

function information(){
  $('#information').on('mouseenter', function(){
     //스크롤 내려오면 애니메이션 실행 
    $('#information .gain li').addClass('move')

     //숫자 카운팅 시작
    let $thispf = $('#information .gain li .this-year-f p.countf')
    let $thisps = $('#information .gain li .this-year-s p.counts')
    let $total53 = $ ('#information .total li p span.total53')
    let $total45 = $ ('#information .total li p span.total45')
    let $total65 = $ ('#information .total li p span.total65')
    $({ val : 0 }).animate({ val : 12796 }, {
      duration: 3000,
      step: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $thispf.text(num);
      },
      complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $thispf.text(num);
      }
    });
    $({ val : 0 }).animate({ val : 1676 }, {
      duration: 3000,
      step: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $thisps.text(num);
      },
      complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $thisps.text(num);
      }
    });
    $({ val : 0 }).animate({ val : 53 }, {
      duration: 3000,
      step: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $total53.text(num);
      },
      complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $total53.text(num);
      }
    });
    $({ val : 0 }).animate({ val : 45 }, {
      duration: 3000,
      step: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $total45.text(num);
      },
      complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $total45.text(num);
      }
    });
    $({ val : 0 }).animate({ val : 6500 }, {
      duration: 3000,
      step: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $total65.text(num);
      },
      complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $total65.text(num);
      }
    });
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
   })
    //숫자 카운팅 끝
    $('#information').on('mouseleave', function(){
      $('#information .gain li').removeClass('move')
    })
  } 

  function history(){
    // swiper
    var swiper = new Swiper(".history", {
      rewind: true,
      slidesPerView: 3,
      spaceBetween: 20,
      // centeredSlides: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  function portfolio(){
    var swiper = new Swiper(".scroll", {
      direction: "vertical",
      slidesPerView: "auto",
      freeMode: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      mousewheel: true,
    });
  }

  function award(){
    $('#award').on('mouseenter', function(){
      $('#award h2').addClass('on')
      $('#award h2 + img').addClass('on')
      $('#award ul').addClass('on')
      $('#award .more a').addClass('on')
    })
    $('#award').on('mouseleave', function(){
      $('#award h2').removeClass('on')
      $('#award h2 + img').removeClass('on')
      $('#award ul').removeClass('on')
      $('#award .more a').removeClass('on')
    })
  }

  function career(){
    $('#careers .kind dt').on('click',function(){
      $('#careers .kind dd').stop().slideUp()
      $(this).next().stop().slideDown()
      $('#careers .kind dt').removeClass('on')
      $(this).addClass('on')
    })
  }