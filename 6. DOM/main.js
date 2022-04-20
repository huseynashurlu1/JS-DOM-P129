// DOM
// let x = document.getElementById('text');
// console.log(x);

// let group = document.getElementsByName('p');
// console.log(group);


// innerHTML / innerText / style /

// let btn = document.getElementById('btn');

// btn.onclick = function() {
//     let text = document.getElementById('text');
//     text.innerHTML = "<i>WELCOME</i>" 
//     text.style.backgroundColor = '#ff6600';
//     text.style.color = '#fff';

// }


// getAttribute / setAttribute / attribute

// btn.onclick = function() {
//     let img = document.getElementById('photo');
    
//     img.setAttribute('src','https://c4.wallpaperflare.com/wallpaper/313/411/622/programming-programmers-programming-language-rain-blue-hd-wallpaper-preview.jpg')
//     // img.src = 'https://c4.wallpaperflare.com/wallpaper/313/411/622/programming-programmers-programming-language-rain-blue-hd-wallpaper-preview.jpg'
    
// }


// function Change() {
//     let text = document.getElementById('text');
//     text.innerHTML = "<i>WELCOME</i>"
// }


// let eye = document.getElementById('icon');
// let input = document.getElementById('input');
// eye.onclick = function() {
//     if(input.type === "password") {
//         input.type = "text";
//         eye.innerText = 'Hide';
//         // eye.className = 'fa-solid fa-eye-slash';
//     }
//     else{
//         input.type = "password";
//         eye.innerText = 'Show';
//         // eye.className = 'fa-solid fa-eye';
//     }
// }



// createElement
// appendChild
// createTextNode

let btn = document.getElementById('btn');

btn.onclick = function() {
    let h1 = document.createElement('h1');
    h1.innerText = "FRONT-END DEVELOPMENT";
    h1.setAttribute('class','first')
    document.body.appendChild(h1);
}

btn.onclick = function() {
    let value = document.getElementById('input').value;
    let li = document.createElement('li');
    let list = document.getElementById('list');
    li.className = "d-flex justify-content-between align-items-center";

    let button = document.createElement('button');
    button.innerText = "X";
    button.className = 'btn btn-danger btn_delete';

    let span = document.createElement('span');
    span.innerText = value;
    
    li.appendChild(span);
    li.appendChild(button);
    
    list.appendChild(li);
    // console.log(li);

    let btn_delete = document.getElementsByClassName('btn_delete');
    
    for(let btn of btn_delete) {
        btn.onclick = function(e) {
            e.target.parentElement.remove();
        }
    }

    for(let i=0;i<btn_delete.length;i++) {
        btn_delete[i].onclick = function(e) {
            e.target.parentElement.remove();
        }
    }
}


// 


// let btn = document.getElementById('btn');

// btn.addEventListener('click',function(){
//     document.body.style.backgroundColor = 'black';
// })

// btn.addEventListener('dblclick',function(){
//     document.body.style.backgroundColor = 'red';
// })

// btn.removeEventListener('dblclick');


// Event Bubbling
// Event Capturing


// useCapture (true,false)
// stopPropagation

// let red = document.getElementById('red');
// let purple = document.getElementById('purple');
// let white = document.getElementById('white');


// red.addEventListener('click',function(e){
//     e.stopPropagation();
//     alert('Red');
// })

// purple.addEventListener('click',function(e){
//     e.stopPropagation();
//     alert('Purple');
// })

// white.addEventListener('click',function(e){
//     e.stopPropagation();
//     alert('White');
// })


// focus
// blur

let input = document.getElementById('input');
let label = document.getElementById('label');

input.onfocus = function() {
    label.style.top = "-23%";
    label.style.left = "0%";
}

input.onblur = function() {
    label.style.top = "50%";
    label.style.left = "20px";
}

// input.onfocus = function() {
//     input.style.borderRadius = '10px'
//     input.style.width = '55%'

// }

// input.onblur = function(){
//     input.style.width = '45%'
//     input.style.borderRadius = '0';
// }

// let div = document.getElementById('first');

// div.onmouseleave = function(){
//     this.style.backgroundColor = 'red';
// }


// change
// let select = document.getElementById('select');

// select.onchange = function(e){
//     document.getElementById('shop').innerHTML = e.target.value
// }


// scroll


// let header = document.getElementById('header')
// let btn = document.getElementById('btn')

// // document.body
// // document.documentElement
// window.onscroll = function() {
//     if(document.documentElement.scrollTop > 150) {
//         header.style.backgroundColor = 'red';
//         header.style.padding = '15px 0';
//         btn.style.opacity = '1'
//     }
//     else{
//         header.style.backgroundColor = 'green';
//         header.style.padding = '25px 0';
//         btn.style.opacity = '0'
//     }
// }

// btn.onclick = function() {
//     document.documentElement.scrollTop -= 400;
// }

// // querySelector
// // querySelectorAll

// let h1 = document.querySelectorAll(".first");

// function Click() {
//     for(let text of h1) {
//         text.style.color = 'red';
//     }
// }