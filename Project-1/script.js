let r = document.querySelectorAll('.example');
for(let i=0; i<r.length; i++)
{
r[i].addEventListener('mouseover', function(){
    r[i].style.color = 'red';
    r[i].style.fontSize = '50px';

    let rno = Math.floor(Math.random()*100);
    r[i].innerHTML = `${rno}`;

    // rgb(0,0,0) rgb(255,255,255);
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);

    r[i].style.backgroundColor = `rgb(${a},${b},${c})`;
})
}