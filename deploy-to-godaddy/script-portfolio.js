/* ---------- starfield ---------- */
const cv=document.getElementById('stars'),cx=cv.getContext('2d');
let stars=[],shooting=[],W,H;
function sizeCanvas(){W=cv.width=cv.offsetWidth*devicePixelRatio;H=cv.height=cv.offsetHeight*devicePixelRatio;
  stars=Array.from({length:Math.min(260,W/8)},()=>({x:Math.random()*W,y:Math.random()*H*.75,r:Math.random()*1.4+.3,tw:Math.random()*Math.PI*2,sp:.008+Math.random()*.02}));}
sizeCanvas();addEventListener('resize',sizeCanvas);
function spawnShooting(){if(Math.random()<.006&&shooting.length<2){shooting.push({x:Math.random()*W*.8,y:Math.random()*H*.3,vx:6+Math.random()*5,vy:2+Math.random()*2,life:1});}}
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
function draw(){cx.clearRect(0,0,W,H);
  for(const s of stars){s.tw+=s.sp;const a=.35+.55*Math.abs(Math.sin(s.tw));
    cx.beginPath();cx.arc(s.x,s.y,s.r*devicePixelRatio,0,7);cx.fillStyle=`rgba(220,235,255,${a})`;cx.fill();}
  spawnShooting();
  shooting=shooting.filter(m=>m.life>0);
  for(const m of shooting){m.x+=m.vx*devicePixelRatio;m.y+=m.vy*devicePixelRatio;m.life-=.018;
    const g=cx.createLinearGradient(m.x,m.y,m.x-m.vx*10*devicePixelRatio,m.y-m.vy*10*devicePixelRatio);
    g.addColorStop(0,`rgba(255,255,255,${m.life})`);g.addColorStop(1,'transparent');
    cx.strokeStyle=g;cx.lineWidth=1.4*devicePixelRatio;cx.beginPath();cx.moveTo(m.x,m.y);
    cx.lineTo(m.x-m.vx*10*devicePixelRatio,m.y-m.vy*10*devicePixelRatio);cx.stroke();}
  if(!reduced)requestAnimationFrame(draw);}
draw();if(reduced){/* single static frame already drawn */}

/* ---------- typing ---------- */
const lines=["node sync-rtp-enviso.js --resort sugarbowl","✓ 1,842 passholders synced · 0 manual steps","npx zmpd --new-project YOUR_RESORT"];
const typedEl=document.getElementById('typed');let li=0,ci=0,deleting=false;
function type(){const line=lines[li];
  if(!deleting){typedEl.textContent=line.slice(0,++ci);
    if(ci===line.length){deleting=true;setTimeout(type,2200);return}}
  else{typedEl.textContent=line.slice(0,--ci);
    if(ci===0){deleting=false;li=(li+1)%lines.length}}
  setTimeout(type,deleting?22:55);}
if(!reduced)type();else typedEl.textContent=lines[2];

/* ---------- nav ---------- */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>40);
  /* parallax mountains */
  document.querySelectorAll('.mtn').forEach(m=>{const sp=parseFloat(m.dataset.speed);if(sp)m.style.transform=`translateY(${scrollY*sp}px)`;});
},{passive:true});
const burger=document.getElementById('hamburger'),links=document.getElementById('navLinks');
burger.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

/* ---------- reveal on scroll ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ---------- counters ---------- */
/* ---------- GA4 conversion events ---------- */
function track(name,label){if(typeof gtag==='function')gtag('event',name,{event_label:label});}
document.querySelectorAll('a[href^="mailto:"]').forEach(a=>a.addEventListener('click',()=>track('contact_email','zach@zmpd.app')));
document.querySelectorAll('a[href^="tel:"]').forEach(a=>a.addEventListener('click',()=>track('contact_phone','970-452-9404')));
document.querySelectorAll('a[href*="calendly"]').forEach(a=>a.addEventListener('click',()=>track('book_call','calendly')));
document.querySelectorAll('a[href*="linkedin"]').forEach(a=>a.addEventListener('click',()=>track('outbound_social','linkedin')));
document.querySelectorAll('a[href*="github"]').forEach(a=>a.addEventListener('click',()=>track('outbound_social','github')));
let contactSeen=false;
new IntersectionObserver(es=>{if(!contactSeen&&es.some(e=>e.isIntersecting)){contactSeen=true;track('view_contact','scrolled_to_contact');}},{threshold:.4}).observe(document.getElementById('contact'));

const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);
  const el=e.target,target=+el.dataset.target,t0=performance.now();
  (function step(t){const p=Math.min((t-t0)/1200,1);el.textContent=Math.round(target*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step);})(t0);}),{threshold:.6});
document.querySelectorAll('.count').forEach(el=>cio.observe(el));
