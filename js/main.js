
$('document').ready(
    
    $(function(){
        $('.nav__icon').on('click', function() {
            $(this).toggleClass('active');
            $('nav ul').slideToggle();
        });

        $(window).on('load resize',function(){
            var w = $(window).width();
            var h = $(window).height();
            var x = 700;
            if (w >= x) {
                $('nav ul').css({ display: 'flex',height: 'auto' });
            }else {
                $('nav ul').css({ display: 'none',height: h + 'px'});
            }
        });
    })

 
       
);


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
   
    autoplay: {
        delay: 2000,
      },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });