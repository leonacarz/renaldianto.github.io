const ubahwarna = document.getElementById('warna');
const ubahwarna1 = document.getElementById('warna1');
const ubahwarna2 = document.getElementById('warna2');
document.body.addEventListener('mousemove', function (event) {
    const posx = Math.round((event.clientX / window.innerWidth) * 255);
    const posy = Math.round((event.clientX / window.innerHeight) * 255);
    ubahwarna.style.backgroundColor = 'rgb(' + posy + ', ' + posx + ', 100 )';
    ubahwarna1.style.backgroundColor = 'rgb(' + posy + ', ' + posx + ', 100 )';
    ubahwarna2.style.backgroundColor = 'rgb(' + posy + ', ' + posx + ', 100 )';
    if (posx <= 127) {
        ubahwarna.style.color = 'white';
        ubahwarna1.style.color = 'white';
        ubahwarna2.style.color = 'white';
    } else {
        ubahwarna.style.color = 'black';
        ubahwarna1.style.color = 'black';
        ubahwarna2.style.color = 'black';
    }
});
