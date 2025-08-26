<!DOCTYPE html5>
<html lang=“ja”>

<head>
    <metahttp-equiv="content-type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
    <title>発注ページ</title>
	 <link rel="shortcut icon" href="image/nazobu.jpg" >
	<!-- jQuery本体の読み込み -->
	 <link rel="stylesheet" href="index.css"　type="text/css" media="all">
	 <script src="index.js" defer></script>

<!-- ＃リンクのスムーズスクロール -->
<script>
$(function(){
   // #で始まるリンクをクリックしたら実行されます
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒で記述
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
</script>

</head>

<body>

<header class="header">

      <!-- ハンバーガーメニュー部分 -->
      <div class="nav">
        
        <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
        <input id="drawer_input" class="drawer_hidden" type="checkbox">
	<img src="image/info.png" class="infomation">

        <!-- ハンバーガーアイコン -->
	<label for="drawer_input" class="drawer_open"><span></span></label>
	<label class="drawer_open2"><span></span></label>

    
      </div>
    </header>



<div class="main">

	<p class="bun">発送するものを選び、<br>発送ボタンを押しましょう。</p>
	<div class="nazo">
	<img src="image/nazo1.png" class="nazo">
	</div>
	
</div>

<div class="nyuryoku">

<div class="button">
<input type="checkbox" id="one">
<input type="checkbox" id="two">
<input type="checkbox" id="three">
<input type="checkbox" id="four">
<input type="checkbox" id="five">
<input type="checkbox" id="six">
<input type="checkbox" id="seven">
<input type="checkbox" id="eight">
<input type="checkbox" id="nine">


<label class="label-btn1" for="one"><span>1</span></label>
<label class="label-btn2" for="two"><span>2</span></label>
<label class="label-btn3" for="three"><span>3</span></label>
<label class="label-btn4" for="four"><span>4</span></label>
<label class="label-btn5" for="five"><span>5</span></label>
<label class="label-btn6" for="six"><span>6</span></label>
<label class="label-btn7" for="seven"><span>7</span></label>
<label class="label-btn8" for="eight"><span>8</span></label>
<label class="label-btn9" for="nine"><span>9</span></label>

<div class="send-button">

<input type="button" id="send" onClick="link()" style="display:none">

<label class="label-send" for="send"><span>発送</span></label>

</div>
</div>


</div>

</div>




<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script type="text/javascript" src="index.js"></script>
  </body>
