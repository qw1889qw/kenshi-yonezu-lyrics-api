# 米津玄師の歌詞API

[link to English version](https://github.com/qw1889qw/kenshi-yonezu-lyrics-api/blob/master/README.md)

米津玄師様の歌詞を提供するためのAPIです (STRAY SHEEPが出る前に)

使い方
- `npm start`を実行して、`localhost:3000`に移動します
- URLについて
  - 元の歌詞がみたいなら`/jp/`を追加して
  - ローマ字がみたいなら`/ro/`を追加して
  - タイトルを追加して
  - 例えば
    -「アンビリーバーズ」の元の歌詞 --> `http://localhost:3000/jp/アンビリーバーズ`を入力して
    - 「Lemon」のローマ字 --> `http://localhost:3000/ro/Lemon`を入力して
- タイトルは空白文字があると、` `も`_`もいい
- 許可されるタイトルはこちら --> `http://localhost:3000/help`

こいつらに感謝
- vgperson.com
- www.jpopasia.com
- utaten.com
- j-lyric.net
- [このコメント (YouTubeから)](https://www.youtube.com/watch?v=Y4_vXzyOJHE&lc=UgyToLOsV4UblSAOv314AaABAg)
- [このコメント (YouTubeから)](https://www.youtube.com/watch?v=1s84rIhPuhk&lc=UgwKjHxckcjQq0ND9zN4AaABAg)
- [このコメント (YouTubeから)](https://www.youtube.com/watch?v=WLEPU7DqLzg&lc=Ugy1F0c3Qwnm3kCcmWN4AaABAg)

提案があるならぜひ連絡してください
