function addList(text){
    const list = document.createElement('li');
    list.innerText = text; 
    const uList = document.querySelector('ul');
    uList.appendChild(list);
}
addList("List 3");