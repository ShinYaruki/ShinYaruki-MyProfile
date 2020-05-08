$(function(){
  var menu_list = $(".main__tag--list > li");
  var html = $("html");
  // menu_listがクリックされた時の処理
  menu_list.click(function(){
    // クリックされた要素のhrefを取得
    var menu = $(this).attr("href")
    // スクロール位置を取得
    var scroll_point = $(menu).offset().top;
    html.animate({
      scrollTop: scroll_point - 20
    }, 500);
  });
});