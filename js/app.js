document.addEventListener('DOMContentLoaded', function() {
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 1000;
    let delta;

    wrapper.addEventListener('mousemove', function(e) {
        delta = (e.clientX - window.innerWidth / 2) * 0.5; 

        handle.style.left = e.clientX + delta + 'px';
        topLayer.style.width = e.clientX + skew + delta + 'px';
    });
});