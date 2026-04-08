document.getElementById('yr').textContent=new Date().getFullYear();

const cur=document.getElementById('cur'),curR=document.getElementById('cur-r');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
(function loop(){
  cur.style.left=mx-4+'px';cur.style.top=my-4+'px';
  rx+=(mx-rx)*.13;ry+=(my-ry)*.13;
  curR.style.left=rx-16+'px';curR.style.top=ry-16+'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a,button,.serv-card,.pi,.tag').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.transform='scale(2.4)';curR.style.transform='scale(1.7)';curR.style.opacity='.38'});
  el.addEventListener('mouseleave',()=>{cur.style.transform='scale(1)';curR.style.transform='scale(1)';curR.style.opacity='1'});
});

const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>36));

function tM(){
  const h=document.getElementById('hbg'),m=document.getElementById('mMenu');
  h.classList.toggle('active');m.classList.toggle('open');
  document.body.style.overflow=m.classList.contains('open')?'hidden':'';
}
function cM(){
  document.getElementById('hbg').classList.remove('active');
  document.getElementById('mMenu').classList.remove('open');
  document.body.style.overflow='';
}

const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('v');
      e.target.querySelectorAll('.sk-fill').forEach(b=>{
        setTimeout(()=>{b.style.width=b.dataset.w+'%'},250);
      });
    }
  });
},{threshold:.1});
document.querySelectorAll('.r').forEach(el=>obs.observe(el));

function sendForm(e){
  e.preventDefault();
  const btn=e.target.querySelector('.btn-form');
  btn.textContent='A enviar...';btn.style.opacity='.5';
  setTimeout(()=>{btn.style.display='none';document.getElementById('fOk').style.display='block';},1100);
}