{
  //DIV TOGGLE
  const toggleButton = document.querySelector('#toggleList');
  const listDiv = document.querySelector('.list');

  //User INPUT
  const userInput = document.querySelector('.userInput');
  const button = document.querySelector('button.description');
  const p = document.querySelector('p.description');
  let listItem = document.querySelectorAll('li');

  //ADD ITEM
  const addItemInput = document.querySelector('.addItemInput');
  const addItemButton = document.querySelector('button.addItemButton');

  //Remove Item
  const removeItemButton = document.querySelector('button.removeItemButton');

  //list items
  const listItems = document.getElementsByTagName('li');


  toggleButton.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
      listDiv.style.display = 'block';
      toggleButton.textContent = 'Hide list';
    } else {
      listDiv.style.display = 'none';
      toggleButton.textContent = 'Show list';
    }
  });


  addItemButton.addEventListener('click', () => {
    const list = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = addItemInput.value;
    const appendedItem = list.appendChild(li);
    for (let i = 0;i < appendedItem.length;i ++) {
      appendedItem[i];
    }
    addItemInput.value = '';
  });



  removeItemButton.addEventListener('click', () => {
    const list = document.querySelector('ul');
    const li = document.querySelector('li:last-child');
    list.removeChild(li);
  });

  const init = () => {
    document.documentElement.classList.add('has-js');

    const $date = document.querySelector(`.date`);
    if ($date) {
      showFact();
    }
  };

  init();
}


