setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour = document.querySelector('#hour');
    minute = document.querySelector('#minute');
    second = document.querySelector('#second');
    h = document.querySelector('.h');
    m = document.querySelector('.m');
    s = document.querySelector('.s');

    var h = document.querySelectorAll('.h');

    h[0].innerHTML =htime % 12;// Update the first element
    h[1].innerHTML =htime % 12; // Update the second element
    h[2].innerHTML =htime % 12; // Update the third element
    h[0].style.transform =`rotate(${-hrotation}deg)`;// Update the first element
    h[1].style.transform =`rotate(${-hrotation}deg)`; // Update the second element
    h[2].style.transform =`rotate(${-hrotation}deg)`; // Update the third element

    var m = document.querySelectorAll('.m');
    m[0].innerHTML =mtime;// Update the first element
    m[1].innerHTML =mtime; // Update the second element
    m[2].innerHTML =mtime; // Update the third element
    m[3].innerHTML =mtime; // Update the four element
    m[4].innerHTML =mtime; // Update the five element
    m[0].style.transform = `rotate(${-mrotation}deg)`;// Update the first element
    m[1].style.transform = `rotate(${-mrotation}deg)`; // Update the second element
    m[2].style.transform = `rotate(${-mrotation}deg)`; // Update the third element
    m[3].style.transform = `rotate(${-mrotation}deg)`; // Update the four element
    m[4].style.transform = `rotate(${-mrotation}deg)`; // Update the five element
   
    var s = document.querySelectorAll('.s');
    s[0].innerHTML =stime;// Update the first element
    s[1].innerHTML =stime; // Update the second element
    s[3].innerHTML =stime;// Update the first element
    s[2].innerHTML =stime; // Update the third element
    s[4].innerHTML =stime; // Update the second element
    s[5].innerHTML =stime; // Update the third element
    s[6].innerHTML =stime; // Update the third element
    s[0].style.transform = `rotate(${-srotation}deg)`;// Update the first element
    s[1].style.transform = `rotate(${-srotation}deg)`; // Update the second element
    s[3].style.transform = `rotate(${-srotation}deg)`;// Update the first element
    s[2].style.transform = `rotate(${-srotation}deg)`; // Update the third element
    s[4].style.transform = `rotate(${-srotation}deg)`; // Update the second element
    s[5].style.transform = `rotate(${-srotation}deg)`; // Update the third element
    s[6].style.transform = `rotate(${-srotation}deg)`; // Update the third element
    
    h.innerHTML=htime % 12;
    m.innerHTML=mtime;
    s.innerHTML=stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);




