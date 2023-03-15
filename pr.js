let column1 = document.querySelector(".column1"); 
let column2 = document.querySelector(".column2"); 
let proc = document.querySelector('.proch'); // программа
let proc2 = document.querySelector('.proch2');
let column = document.querySelector('.column');
let btn = document.querySelector('.btn');
let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');
let glav = document.querySelector('.glav');
let work = document.querySelector('.work');
let av = document.querySelector('.av');
let main = document.querySelector('.main'); 
let avtors = document.querySelector('.avtors');
let biography1 = document.querySelector('.biography1');

let sunmoon = document.querySelector('.sunmoon');
let div3 = document.querySelector('.div3');
let button = document.querySelector('.r');
let banner = document.querySelector('.banner');
let testu = document.querySelector('.testu');
let test2 = document.querySelector('.test2');

let test3 = document.querySelector('.test3');
let prav1 = document.querySelector('.prav1');
let prav2 = document.querySelector('.prav2');
let prav3 = document.querySelector('.prav3');

let count = 0;
let kr = 0;
let count1 = 0;

 column1.onclick = function(){
 	if(count == 0){
       proc.style.display = 'block';
       count = count + 1;
       column.style.height = '600px'
       }else{
       proc.style.display = 'none';
       column.style.height = '475px';
       count = count - 1;
       }
 }


 column2.onclick = function(){
      if(count1 == 0){
       proc2.style.display = 'block';
       count1 = count1 + 1;
       column.style.height = '600px'
       }else{
       proc2.style.display = 'none';
       column.style.height = '475px';
       count1 = count1 - 1;
       }
 }


 btn.onclick = function(){
      work.style.display = 'block';
      test2.style.display = 'none';
      column.style.display = 'none';
      glav.style.marginLeft = '0px';
      text1.style.display = 'none';
      text2.style.display = 'none';
      text3.style.display = 'none';
      work.style.display = 'block';
      banner.style.display = 'none';
 }



 button.onclick = function(){
      if(kr == 0){
       div3.style.display = 'block';
       kr = kr + 1;
       }else{
      div3.style.display = 'none';
       kr = kr - 1;
       }
        
 }


let switches = document.getElementsByClassName('switch');
for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    console.log(theme);
  });
}

let them = document.getElementById("them");
const button7 = document.getElementById('button7');
const amge = document.getElementById('image');


function setDarkTheme() {
      document.body.classList.add('dark');
      image.src = 'sun.webp';
      localStorage.theme = 'dark';
}


function setLightTheme(){
      document.body.classList.remove('dark');
      image.src = 'moon.png';
      localStorage.theme = 'light';
}

button7.addEventListener('click', () => {
     if(document.body.classList.contains('dark')){
      setLightTheme()
      }else setDarkTheme();
})
 if (localStorage.theme == 'dark') setDarkTheme();