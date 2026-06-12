const dec = document.getElementById('de') ;
const inc = document.getElementById('in') ;
let cnt =0;
inc.onclick = function(){
    cnt++;
    document.querySelector('.divat').textContent = String(cnt);
}
dec.onclick = function(){
    cnt--;
    document.querySelector('.divat').textContent = String(cnt);
}