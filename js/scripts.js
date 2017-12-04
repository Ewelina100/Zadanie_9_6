var list = document.getElementById('list'),
    button = document.getElementById('addElem');

button.addEventListener('click', function(button) {
  var button = document.createElement('li');
   button.innerText = 'item'
  for(var i=0;i<button.length;i++); 
  
  var itemsByTagName = document.getElementsByTagName('li');
  list.appendChild(button);
  };