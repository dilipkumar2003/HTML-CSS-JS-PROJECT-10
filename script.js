const btn = document.querySelector('button')
const body= document.querySelector('body')
const color=['pink','black','grey','green,','blue','red','#ff0000','#ff7300','#fffb00','#48ff00','#00ffd5','#002bff','#7a00ff','#ff00c8','#ff0000']

document.addEventListener('click',function(){
    const colorIndex =parseInt( Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
})
