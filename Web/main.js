$(function () {
	//
	// レイアウト制御部
	//
	$(window).bind("orientationchange",function(){
		if(Math.abs(window.orientation) === 90){
			alert("横画面には対応していません\n縦にして遊んでね！");
		}
	})
	//
	// ゲーム本体部
	//
	var cardsA = [];
	var cardsB = [];
	// --
	reset();
	// --
	$('#btnA').on('click', function() {
		draw("A");
	});
	$('#btnB').on('click', function() {
		draw("B");
	});
	$('#btnReset').on('click', function() {
		reset();
	});
	function reset()
	{
		// 連続でリセットを押したときに山札が増えてしまう不具合の対処
		cardsA = [];
		cardsB = [];
		// --
		for(var idx = 0; idx < 12; idx++) cardsA.push(idx);
		for(var idx = 0; idx < 12; idx++) cardsB.push(idx);
		cardsA = shuffle(cardsA);
		cardsB = shuffle(cardsB);
		$('img').attr('src', 'title.png');
	}
	function draw(type)
	{
		var cards = type === "A" ? cardsA : cardsB;
		// ない場合
		if (cards.length == 0)
		{
			$('img').attr('src', 'empty.png');
			return;
		}
		var idx = cards.pop();
		var src = 'cards/' + (type === "A" ? 'a' : 'b') + '_' + idx + '.png';
		$('img').attr('src', src);
	}
	// https://qiita.com/komaji504/items/62a0f8ea43053e90555a
	function shuffle(arr)
	{
		for(var i = arr.length - 1; i > 0; i--){
			var r = Math.floor(Math.random() * (i + 1));
			var tmp = arr[i];
			arr[i] = arr[r];
			arr[r] = tmp;
		}
		return arr;
	}
});