// 画面の準備ができたら...
jQuery(function($){

  window.onhashchange = function(){
    showContents();
  }
  showContents();

  function showContents(){
    var url = location.hash.replace('#', '');
    if(url){
      $.ajax({
        url: url,
        cache: false,
        success: function(md){
          var html = marked(md);
          $('.st-MainContents').html(html);
        }
      });
    }
  }

});
