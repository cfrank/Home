/*
  Author:    Mysall
  Use:       Controls the page
  Date:      June 2014
*/

/* Create a function for shorter element calling */
var $ = function(elem){ return document.getElementById(elem); }

/* Set the url for the header image */
var headerImg  = 'i/top.png';

/* Add the header image to the page */
$('top').style.background += "url(" + headerImg + ")";

/* Create the html for the search bar */
var searchHtml = [
  '<form>',
  '<input id="homeSearch" type="text" placeholder="Search" autofocus>',
  '</form>'
].join('');

/* Add the search bar to the page */
$('top').innerHTML += searchHtml;

/* HANDLE THE SEARCH */

/* Accepted search providers:
      - Google
      - Google Images
      - Yandex
      - DuckDuckGo
      - Wikipedia
      - YouTube
*/

/* Select search provider */
var searchProvider = "Google";
/*
    To submit the form the user must press
    enter, we must grab this keycode (13)
    and execute the search.
*/

$('homeSearch').addEventListener('keypress', function(event)
{
  if(event.keyCode === 13)
    {
      /* Get the content from the field */
      var searchContent = $('homeSearch').value;

      /*
          For some reason the form won't redirect
          to the search provider unless I add a
          hash to the home page url... I have no idea
          why this happens. If you know find me in a
          desktop thread and tell me please ^.^
      */
      window.location.hash = "#";

      if(searchProvider === "Google")
      {
        window.location = "https://www.google.com/#q=" + searchContent;
      }else if(searchProvider === "Google Images")
      {
        window.location = "https://www.google.com/search?tbm=isch&q=" + searchContent;
      }else if(searchProvider === "Yandex")
      {
        window.location = "http://beta.yandex.ru/yandsearch?lr=110715&text=" + searchContent;
      }else if(searchProvider === "DuckDuckGo")
      {
        window.location = "https://duckduckgo.com/?q=" + searchContent;
      }else if(searchProvider === "Wikipedia")
      {
        window.location = "http://en.wikipedia.org/w/index.php?search=" + searchContent;
      }else if(searchProvider === "YouTube")
      {
        window.location = "https://www.youtube.com/results?search_query=" + searchContent;
      }
    }
});

/* HANDLE THE BOXES */

/* Array with links ["Title", "url"] */
var links = [
  ["/g/", "http://boards.4chan.org/g/"],
  ["/b/", "http://boards.4chan.org/b/"],
  ["/a/", "http://boards.4chan.org/a/"],
  ["/wg/", "http://boards.4chan.org/wg/"],
  ["/r9k/", "http://boards.4chan.org/r9k/"],
  ["Mail", "https://mail.cock.li"],
  ["YouTube", "https://www.youtube.com"],
  ["2ch", "http://2ch.hk"],
  ["Stack", "http://stackoverflow.com/"],
  ["Codrops", "http://tympanus.net/codrops/"],
];

for(var i = 0; i <= links.length - 1; ++i)
{
  /* Create the HTML for all the boxes */
  if(i % 2 === 0)
  {
    var boxClass = "light";
  }else
  {
    var boxClass = "red";
  }
  var boxHtml = [
    '<div class="linkBox ' + boxClass + '">',
    '<a href=' + links[i][1] + '>' + links[i][0] + '</a>',
    '</div>'
  ].join('');
  $('cont').innerHTML += boxHtml;
}
