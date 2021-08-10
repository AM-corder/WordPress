/***
    プラグイン ShortCodeUltimate - ImageCarouselの
    テキストの前に連番を追加
***/

const carouselitemcontent = document.getElementsByClassName('su-image-carousel-item-content');

for(let i=0; i < carouselitemcontent.length; i++) {

  /** 新しく追加する要素の設定 **/
	// span要素を新しく生成
	let addSpan = document.createElement('span');
	// 生成したspan要素のテキストに0埋めした連番を設定
	addSpan.textContent = ('00' + (i)).slice(-2);
	// 生成したspan要素にクラスの設定
	addSpan.setAttribute('class',"su-slider-num");	
	
  /** スライドの各item - aタグ - span要素の前に追加する **/	
	// 既存aタグ取得
	let item_inner_a = carouselitemcontent[i].querySelector('a');
	// 既存spanタグ(テキスト)取得
	let a_inner_span = item_inner_a.querySelector('span');

  /** 既存spanタグ(テキスト)の前に連番追加 **/
	item_inner_a.insertBefore(addSpan,a_inner_span);

}
