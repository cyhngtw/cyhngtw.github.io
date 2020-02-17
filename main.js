//greeting 
var text = [ 'Guten Tag, Ich bin','Buongiorno, sono', '你好, 我是','Good day, I am'];

var index = 0;

function changeText() {
  document.getElementById("text").innerText = text[index];
  index = (index + 1) % 4;
}

var interval = window.setInterval(changeText, 2000);

window.onunload = function () {
  window.clearInterval(interval);
}



