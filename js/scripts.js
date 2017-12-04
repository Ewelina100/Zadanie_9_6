var list = document.getElementById('list'),
    button = document.getElementById('addElem');

button.addEventListener('click', function(button) {
  var li = document.createElement('li');
  var itemsByTagName = document.getElementsByTagName('li').length;
  li.innerText = item + itemsByTagName;
  list.appendChild(li);
  };