const input = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('ul')

button.addEventListener("click", () => {
    if (input.value == null || input.value == "") {
      input.focus();
      return false;
    }
    
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });

    input.placeholder = '';
    input.focus();
});

