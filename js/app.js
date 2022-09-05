var typed = new Typed(".auto-type", {
    strings : ["Developer...", "Student...", "Codder..."],
    typeSpeed:150,
    backSpeed:150,
    loop:true,
})

// about section starts
const proginfo = document.getElementById('proginfo');
const progunderline = document.getElementById('progress-underline');
proginfo.addEventListener('mouseover', function onmouseover(e){
    progunderline.style.width = '170px'
    progunderline.style.transitionDuration = '2s';
})
proginfo.addEventListener('mouseout', function mouseout(e){
    progunderline.style.width = '10px'
})


//form section starts
const box1 = document.getElementById('box1');
box1.addEventListener('click', function onclick(e){
    e.target.style.boxShadow = '5px 10px 18px #888888';
    
})
const box2 = document.getElementById('box2');
box2.addEventListener('click', function onclick(e){
    e.target.style.boxShadow = '5px 10px 18px #888888';
})
const box3 = document.getElementById('box3');
box3.addEventListener('click', function onclick(e){
    e.target.style.boxShadow = '5px 10px 18px #888888';
})

// project section starts
const project_heading = document.getElementById('project_heading');
const project_underline = document.getElementById('project_underline');
project_heading.addEventListener('mouseover', function mouseover(e){
    project_underline.style.transitionDuration = '2s';
    project_underline.style.width = '150px';

})
project_heading.addEventListener('mouseout', function mouseout(e){
    project_underline.style.width = '10px';

})


const P_img1 = document.getElementById('P_img1');
P_img1.addEventListener('mouseover', function mouseover(e){
    e.target.style.border = 'none';
    e.target.style.transform = 'scale(1.02)';
    e.target.style.boxShadow = '5px 5px 20px rgba(255,0,76,200)'; 
    e.target.style.transitionDuration = '2s';
})
P_img1.addEventListener('mouseout', function mouseout(e){
    e.target.style.transform = 'none';
    e.target.style.boxShadow = 'none'; 
    e.target.style.border =  '1px solid rgba(255,0,76,200)';
    e.target.style.transitionDuration = '2s';
})
// const P_img2 = document.getElementById('P_img2');
// P_img2.addEventListener('mouseover', function mouseover(e){
//     e.target.style.border = 'none';
//     e.target.style.transform = 'scale(1.1)';
//     e.target.style.boxShadow = '5px 5px 25px rgba(238,78,52,200)'; 
//     e.target.style.transitionDuration = '2s';
// })
// P_img2.addEventListener('mouseout', function mouseout(e){
//     e.target.style.transform = 'none';
//     e.target.style.boxShadow = 'none';
//     e.target.style.border = '1px solid rgba(238,78,52,200)';
//     e.target.style.transitionDuration = '2s';
// })
const P_img3 = document.getElementById('P_img3');
P_img3.addEventListener('mouseover', function mouseover(e){
    e.target.style.border = 'none';
    e.target.style.transform = 'scale(1.02)';
    e.target.style.boxShadow = '5px 5px 20px #4fc9da'; 
    e.target.style.transitionDuration = '2s';
})
P_img3.addEventListener('mouseout', function mouseout(e){
    e.target.style.transform = 'none';
    e.target.style.boxShadow = 'none';
    e.target.style.border = '1px solid #4fc9da';
    e.target.style.transitionDuration = '2s';
})

//contact section
const sendmsg = document.getElementById('sendmsg');
const progunderline1 = document.getElementById('progress-underline1');
sendmsg.addEventListener('mouseover', function onmouseover(e){
    progunderline1.style.width = '270px'
    progunderline1.style.transitionDuration = '2s';
})

sendmsg.addEventListener('mouseout', function mouseout(e){
    progunderline1.style.width = '10px'
})


const getintouch = document.getElementById('getintouch');
const progunderline2 = document.getElementById('progress-underline2');
getintouch.addEventListener('mouseover', function onmouseover(e){
    progunderline2.style.width = '220px';
    progunderline2.style.transitionDuration = '2s';
})

getintouch.addEventListener('mouseout', function mouseout(e){
    progunderline2.style.width = '10px'
})

