let target = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
let wordArr = [];
let wordObj = {}
let renderDiv = document.createElement('DIV').id = 'renderDiv';
document.body.appendChild(renderDiv);
function getText(targ){
  for(var i = 0; i < targ.length; i++){
    wordArr.push(targ[i].innerText.split(" "));
  }
}
getText(target);

wordArr.forEach(x => {
  for(var i = 0; i < x.length;i++){
    // add if for length requirement
    wordObj[x[i]] = x[i].length
  }
});

Object.keys(wordObj).forEach(function(key,val) {
  let pEle = document.createElement('p').innerHTML = key + ' ' + wordObj[key];
  renderDiv.appendChild(pEle);
});