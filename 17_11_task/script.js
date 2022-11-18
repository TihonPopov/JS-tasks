const btn_add = document.querySelector('#btn_add');


const ul = document.querySelector('#add_li')
btn_add.addEventListener('click',() => {
    const elem = document.createElement('li');
    // console.log(elem);
    elem.className = 'test';
    elem.id = 'test';
    elem.innerText = 'new li';
    ul.append(elem);
    console.log(elem);
})