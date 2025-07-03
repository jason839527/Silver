
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
    
  })(window.jQuery);

(function ($) {
  "use strict";

  // 當 contact-form 被送出時
  $('.contact-form').on('submit', function(e) {
    e.preventDefault(); // 阻止真的送出

    // 顯示「已傳送」提示
    alert("已傳送，感謝您的寶貴建議！");

    // 清空表單所有輸入
    $(this).find('input[type="text"], input[type="email"], textarea').val('');

    // 也可以選擇改變按鈕文字
    $(this).find('button[type="submit"]').text('已傳送').prop('disabled', true);

    // 幾秒後恢復
    setTimeout(() => {
      $(this).find('button[type="submit"]').text('傳送訊息').prop('disabled', false);
    }, 3000);
  });

})(window.jQuery);
