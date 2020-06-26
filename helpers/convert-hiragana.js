// for jp, user can type in hiragana or katakana/kanji
// also provide more leniency in including/excluding "・"
// can this be automated?
const convertHiragana = original => {
  switch (original) {
    case 'まち':
      return '街';
    case 'ごおごおゆうれいせん':
      return 'ゴーゴー幽霊船';
    case 'だがしやしょうばい':
      return '駄菓子屋商売';
    case 'あめふりふじん':
      return 'あめふり婦人';
    case 'でぃすこばるうん':
      return 'ディスコバルーン';
    case 'といぱとりおっと':
      return 'トイパトリオット';
    case 'こいとびょうねつ':
      return '恋と病熱';
    case 'ひからびたばすひとつ':
      return '乾涸びたバスひとつ';
    case 'くびなしかんこどり':
      return '首なし閑古鳥';
    case 'しんぞうほうえい':
      return '心像放映';
    case 'しょうほん':
      return '抄本';
    case 'さんたまりあ':
      return 'サンタマリア';
    case 'ひゃっきやこう':
      return '百鬼夜行';
    case 'ふえふけどもおどらず':
      return '笛吹けども踊らず';
    case 'ぽっぴんあぱしい':
      return 'ポッピンアパシー';
    case 'とりにでもなりたい':
      return '鳥にでもなりたい';
    case 'りびんぐでっどゆーす':
    case 'りびんぐでっど・ゆーす':
      return 'リビングデッド・ユース';
    case 'あいねくらいね':
      return 'アイネクライネ';
    case 'めらんこりいきっちん':
      return 'メランコリーキッチン';
    case 'はなにあらし':
      return '花に嵐';
    case 'うみとさんしょううお':
      return '海と山椒魚';
    case 'しとどせいてんだいめいわく':
      return 'しとど晴天大迷惑';
    case 'がんぷく':
      return '眼福';
    case 'ほらふきねこやろう':
      return 'ホラ吹き猫野郎';
    case 'どおなつほおる':
      return 'ドーナツホール';
    case 'ざんげのまち':
      return '懺悔の街';
    case 'ぺとりこおる':
      return 'ペトリコール';
    case 'あんびりいばあず':
      return 'アンビリーバーズ';
    case 'たびびとでんとう':
      return '旅人電燈';
    case 'ふろおらいと':
      return 'フローライト';
    case 'さいじょうえい':
      return '再上映';
    case 'うぃるおうぃすぷ':
      return 'ウィルオウィスプ';
    case 'めとろのおむ':
      return 'メトロノーム';
    case 'あめのがいろにやこうちゅう':
      return '雨の街路に夜光蟲';
    case 'しんでれらぐれい':
      return 'シンデレラグレイ';
    case 'みらあじゅそんぐ':
      return 'ミラージュソング';
    case 'ほおぷらんど':
      return 'ホープランド';
    case 'なんばあないん':
      return 'ナンバーナイン';
    case 'ららばいさよなら':
      return 'ララバイさよなら';
    case 'ひすいのおおかみ':
      return '翡翠の狼';
    case 'ぴいすさいん':
      return 'ピースサイン';
    case 'ひえん':
      return '飛燕';
    case 'すなのわくせい':
      return '砂の惑星';
    case 'かいじゅうのまあち':
      return 'かいじゅうのマーチ';
    case 'しゅんらい':
      return '春雷';
    case 'ありす':
      return '爱丽丝';
    case 'うちあげはなび':
      return '打上花火';
    case 'はいいろとあお':
      return '灰色と青';
    case 'くらんべりいとぱんけえき':
      return 'クランベリーとパンケーキ';
    case 'うみのゆうれい':
      return '海の幽霊';
    case 'うまとしか':
      return '馬と鹿';
    case 'ぱぷりか':
      return 'パプリカ';
    default:
      return original;
  }
};

const convertEnglish = original => {
  switch (original) {
    case 'cinderella grey':
      return 'cinderella gray';
    case 'kaiju no march':
      return 'kaijuu no march';
    default:
      return original;
  }
};

module.exports = {
  convertHiragana,
  convertEnglish
};
