let target = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
let wordArr = [];
let wordObj = {}
let renderDiv = document.createElement('div');
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
for (var key in wordObj){
  for(var prop in wordObj){
    let injectedElement = document.createElement('p');
    injectedElement.innerHTML = prop + ' ' + wordObj[prop];
    renderDiv.appendChild(injectedElement);
  }
}
