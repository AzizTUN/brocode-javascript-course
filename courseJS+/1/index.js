const dec = document.getElementById('de') ;
const inc = document.getElementById('in') ;
const plain = document.querySelector('.divat') ;
let cnt =0;
inc.onclick = function(){
    cnt++;
    plain.textContent = String(cnt);
    plain.style.color = "green";
}
dec.onclick = function(){
    cnt--;
    plain.textContent = String(cnt);
    plain.style.color = "red";
}