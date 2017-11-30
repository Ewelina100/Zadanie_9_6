var list = document.getElementById('list'),
    button = document.getElementById('add');

add.addEventListener('click', function(element) {
  var element = document.createElement('li');
  console.log(element);
  element.innerHTML = 'item';
  var itemsByTagName = document.getElementsByTagName('li');
  console.log(itemsByTagName.length);
  list.appendChild(element);
  };