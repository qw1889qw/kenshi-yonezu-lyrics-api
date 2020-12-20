# Kenshi Yonezu Lyrics API

## full app here &#8594; https://kenshiyonezulyricsfinder.herokuapp.com/en

[日本語で書いたREADMEへのリンク](https://github.com/qw1889qw/kenshi-yonezu-lyrics-api/blob/master/README-jp.md)

Lyrics (both original & romaji) for all songs by the current god of J-pop, Kenshi Yonezu 

last updated: June 2020

to use:
- `npm start` & go to `localhost:3000`
- for URL path:
  - add `/jp/` for original lyrics or `/ro/` for romaji
  - type in title of song you want to get lyrics for
    - e.g. to get original lyrics for Unbelievers, URL = `http://localhost:3000/jp/アンビリーバーズ`; to get romaji for Lemon, URL = `http://localhost:3000/ro/Lemon`
- if a song title has spaces in its name (e.g. "Black Sheep"), you can type either a space or an underscore into the URL
- to get the list of allowed song titles, go to `http://localhost:3000/help`

thanks to these sources for original lyrics:
- vgperson.com
- www.jpopasia.com (some romaji on this site is a little messed up, fixed them in this app)
- utaten.com
- j-lyric.net
- [this YT comment](https://www.youtube.com/watch?v=Y4_vXzyOJHE&lc=UgyToLOsV4UblSAOv314AaABAg)
- [this YT comment](https://www.youtube.com/watch?v=1s84rIhPuhk&lc=UgwKjHxckcjQq0ND9zN4AaABAg)
- [this YT comment](https://www.youtube.com/watch?v=WLEPU7DqLzg&lc=Ugy1F0c3Qwnm3kCcmWN4AaABAg)

thanks to these sources for romaji:
- vgperson.com (fixed some errors)

dates from https://ja.wikipedia.org/wiki/%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%E3%81%AE%E4%BD%9C%E5%93%81

note: if this violates anyone's ToS, I could scrap this project

feel free to make suggestions!
