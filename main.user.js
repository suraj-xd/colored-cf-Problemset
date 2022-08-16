// ==UserScript==
// @name         colored-cf-problemset
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  colored problemset corresponding to their rating
// @author       suraj-xd
// @match        https://codeforces.com/problemset
// @icon         https://www.google.com/s2/favicons?sz=64&domain=codeforces.com
// @grant        none
// ==/UserScript==

(function() {
  document.querySelectorAll('.dark').forEach(item => item.classList.remove('dark'));
var arrColors = {
  '1200':'#cdcccd',
  '1400':'#77ff77',
  '1600': '#77ddba',
  '1900': '#aaaafe',
  '2100':'#fe88ff',
  '2300':'#ffcd88',
  '2400':'#ffbb54',
  '2600':'#fe7776',
  '3000':'#fe3333',
  'legendary':'#aa0001'
}

function checkRatingLevel(level){
  if(level<= 1200) return arrColors[1200];
  else if (level<= 1400) return arrColors[1400];
  else if (level<= 1600) return arrColors[1600];
  else if (level<= 1900) return arrColors[1900];
  else if (level<= 2100) return arrColors[2100];
  else if (level<= 2300) return arrColors[2300];
  else if (level<= 2400) return arrColors[2400];
  else if (level<= 2600) return arrColors[2600];
  else if (level<= 3000) return arrColors[3000];
  else return arrColors.legendary;
}
document.querySelectorAll('.ProblemRating').forEach(element => {
  let color = checkRatingLevel( parseInt(element.textContent));
  element.parentElement.parentElement.style.backgroundColor =" " + color + "";
});
})();