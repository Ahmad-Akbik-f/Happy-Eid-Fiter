let btn = document.querySelector('.text button')
let main = document.querySelector('main')
let text = " just wanted to tell you eid fiter mubarak"
let elText = document.createElement('p')
let txt = document.createElement('div')
let i = 0;

txt.append(elText)
txt.classList.add('text')
elText.classList.add('mineText')
elText.textContent = 'I'
btn.onclick = ()=>{
    main.children[0].remove()
    main.prepend(txt)
    setTimeout(()=>{
        addingCharacters()
    },1000)
}
function addingCharacters(){
    let add = setInterval(()=>{
        if(i < text.length){
            elText.textContent += text[i]; 
            i++;
        }else{
            clearInterval(add)
        }
    },100)
}