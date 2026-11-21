(function(){var c=document.querySelector('.carousel');if(!c)return;
var s=c.querySelectorAll('.slide'),d=c.querySelector('.dots'),i=0,t;
s.forEach(function(_,n){var b=document.createElement('button');b.setAttribute('aria-label','Photo '+(n+1));b.onclick=function(){go(n);reset()};d.appendChild(b)});
function go(n){i=(n+s.length)%s.length;s.forEach(function(e,k){e.classList.toggle('on',k===i)});
d.querySelectorAll('button').forEach(function(b,k){b.setAttribute('aria-current',k===i)})}
function reset(){clearInterval(t);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)t=setInterval(function(){go(i+1)},6000)}
c.querySelector('.prev').onclick=function(){go(i-1);reset()};c.querySelector('.next').onclick=function(){go(i+1);reset()};
c.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')go(i-1);if(e.key==='ArrowRight')go(i+1)});
go(0);reset()})();
