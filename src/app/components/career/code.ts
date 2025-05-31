export default `ngAfterViewInit(){const canvas=document.getElementById('starfield')as HTMLCanvasElement;const ctx=canvas.getContext('2d')!;let stars:{x:number;y:number;z:number}[]=[];const numStars=300;function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight}
function initStars(){stars=Array.from({length:numStars}).map(()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,z:Math.random()*canvas.width,}))}
function drawStars(){ctx.fillStyle='black';ctx.fillRect(0,0,canvas.width,canvas.height);for(const star of stars){star.z-=2;if(star.z<=0)star.z=canvas.width;const k=128.0/star.z;const px=star.x*k+canvas.width/2;const py=star.y*k+canvas.height/2;if(px>=0&&px<=canvas.width&&py>=0&&py<=canvas.height){const size=(1-star.z/canvas.width)*2;ctx.fillStyle='white';ctx.beginPath();ctx.arc(px,py,size,0,Math.PI*2);ctx.fill()
    }}} function animate(){drawStars();requestAnimationFrame(animate)}
    window.addEventListener('resize',()=>{resize();initStars()});resize();initStars();animate()}
    ngAfterViewInit(){const canvas=document.getElementById('starfield')as
    HTMLCanvasElement;const ctx=canvas.getContext('2d')!;let
    stars:{x:number;y:number;z:number}[]=[];const numStars=300;function
    resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight}
    function
    initStars(){stars=Array.from({length:numStars}).map(()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,z:Math.random()*canvas.width,}))}
    function
    drawStars(){ctx.fillStyle='black';ctx.fillRect(0,0,canvas.width,canvas.height);for(const
    star of stars){star.z-=2;if(star.z<=0)star.z=canvas.width;const
    k=128.0/star.z;const px=star.x*k+canvas.width/2;const
    py=star.y*k+canvas.height/2;if(px>=0&&px<=canvas.width&&py>=0&&py<=canvas.height){const
    size=(1-star.z/canvas.width)*2;ctx.fillStyle='white';ctx.beginPath();ctx.arc(px,py,size,0,Math.PI*2);ctx.fill()
    }}} function animate(){drawStars();requestAnimationFrame(animate)}
    window.addEventListener('resize',()=>{resize();initStars()});resize();initStars();animate()}
    ngAfterViewInit(){const canvas=document.getElementById('starfield')as
    HTMLCanvasElement;const ctx=canvas.getContext('2d')!;let
    stars:{x:number;y:number;z:number}[]=[];const numStars=300;function
    resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight}
    function
    initStars(){stars=Array.from({length:numStars}).map(()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,z:Math.random()*canvas.width,}))}
    `;
