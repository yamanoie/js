// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
// 	$('.box1').slideDown();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
// 	$('.box1').hide();
// });

// 演習

// $(function(){
// 	$('.box1').slideDown(function(){
// 		$('.box1').css({
// 			'background-color': '#0000ff',
// 			'width': '200px',
// 			'height': '100px'
// 		}).slideUp();
// 	});
// });

// $(function(){
// 	$('.box2').mouseover(function(){
// 		$('.box2').css({'background-color': '#0000FF'});
// 	});
// 	$('.box2').mouseout(function(){
// 		$('.box2').css({'background-color': '#ff0000'});
// 	});
// });

// $(function(){
// 	$('.box2').on('click',function(){
// 		$('.box2').addClass('box2-ext');
// 	});
// 	$('.box2').mouseout(function(){
// 		$('.box2').removeClass('box2-ext');
// 	});

// });

// $(function(){
// 	$('.bg1').on('click',function(){
// 		$('.bg1').slideUp();
// 	});
	
// 	$('.bg2').on('click',function(){
// 		$('.bg2').slideUp();
// 	});

// 	$('.bg3').on('click',function(){
// 		$('.bg3').slideUp();
// 	});

// 	$('.bg4').on('click',function(){
// 		$('.bg4').slideUp();
// 	});
// });



// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

// $(function(){
// 	$('button').on('click',function(){
// 		$('ul').children().css('color','red');
// 	});
// });


// $(function(){
// 	$('#back a').on('click',function(event){
// 		$('body,html').animate({
// 			scrollTop:0
// 		},800);
// 		event.preventDefault();
// 		});
// 	});

// $(function(){
// 	$('.menu-trigger').on('click',function(event){
// 		$(this).toggleClass('active');
// 		$('#sp-menu').fadeToggle();
// 		event.preventDefault();

// 	});
// });
// $('#tab-contents .tab[id != "tab1"]').hide();

// $('#tab-menu a').on('click',function(event){
// 	$("#tab-contents .tab").hide();
// 	$("#tab-menu .active").removeClass("active");
// 	$(this).addClass("active");
// 	$($(this).attr("href")).show();
// 	event.preventDefault();
// });


// 


$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + "1443315c4e85d71fd78dd51f0ac02c0d",
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //　湿度
      $('#humidity').text(data.main.humidity);
      //　風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      //通信失敗
　　　　alert('通信に失敗しました。');  
    });
  });
});