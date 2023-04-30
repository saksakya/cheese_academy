// jsを記述する際はここに記載していく

//ヘッダー固定時にスクロールをズラす。
$(function () {
    var headerHeight = 70;//固定ヘッダーの高さを入れる
    $('[href^="#"]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHeight; 
    $("html, body").animate({scrollTop:position}, 500, "swing");//500はスクロールの移動スピード
    return false;
    });
});

//スライドショー
// $(function (){
//     $('#slideshow1').vegas({
//     slides: [
//         { src: '../img/mainbg_01.png' },
//         { src: '../img/mainbg_02.jpg' },
//         { src: '../img/mainbg_03.jpg' },
//         { src: '../img/mainbg_04.jpg' }
//     ]
//     });
// });

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
            { src: '../img/mainbg_01.jpg' },
            { src: '../img/mainbg_02.jpg' },
            { src: '../img/mainbg_03.jpg' },
            { src: '../img/mainbg_04.jpg' }
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
            { src: '../img/mainbg_01.jpg' },
            { src: '../img/mainbg_02.jpg' },
            { src: '../img/mainbg_03.jpg' },
            { src: '../img/mainbg_04.jpg' }
			];
		}

//Vegas全体の設定
$(function (){
$('#slideshow1').vegas({
		transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照
		transitionDuration: 2500,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 10000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 15000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照
		slides: responsiveImage,//画像設定を読む
		timer:false, //プログレスバーを非表示
	});
});

//デバイスの画面の高さ（1vh）を算出する関数
function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
//アクセス時に関数を実行
setHeight();
//画面回転（リサイズ時）に関数を実行する
window.addEventListener('resize',setHeight);