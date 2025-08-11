function nav(){
    var circle=document.querySelector(".elem1")
    var toggle=1
    circle.addEventListener("click",function(){
        if(toggle==0){
            gsap.to("#image",{
                opacity:"1",
                duration:1,
                delay:0.5
            })
            gsap.to("#circle",{
                height:"40vh",
                width:"40vh",
                rotate:60,
                duration:1,
                
            })
            gsap.to(".elem a",{
                opacity:"1",
                duration:0.5,
            })
            document.querySelector(".elem1 h2").innerHTML = "X";
            toggle=1
            
        }
        else
        {
            gsap.to("#image",{
                opacity:"0",
                duration:1,
            })
            gsap.to("#circle",{
                height:"10vh",
                width:"10vh",
                rotate:-60,
                duration:1,
                delay:0.5
            })
            
            gsap.to(".elem a",{
                opacity:"0",
                duration:1
            })
            document.querySelector(".elem1 h2").innerHTML = "O";
            toggle=0
        }
    })
}
nav()
function navDrag(){
    const circle = document.getElementById('circle');
    let isDragging = false;
    let startAngle = 0;
    let currentRotation = 0;

    // Convert mouse/touch position to angle
    function getAngle(x, y, centerX, centerY) {
        return Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
    }

    function startDrag(e) {
        isDragging = true;
        circle.style.cursor = "grabbing";

        const rect = circle.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        startAngle = getAngle(clientX, clientY, centerX, centerY) - currentRotation;

        e.preventDefault();
    }

    function dragMove(e) {
        if (!isDragging) return;

        const rect = circle.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const angle = getAngle(clientX, clientY, centerX, centerY);
        currentRotation = angle - startAngle;

        circle.style.transform = `rotate(${currentRotation}deg)`;
    }

    function stopDrag() {
        isDragging = false;
        circle.style.cursor = "grab";
    }

    // Mouse Events
    circle.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', dragMove);
    window.addEventListener('mouseup', stopDrag);

    // Touch Events
    circle.addEventListener('touchstart', startDrag);
    window.addEventListener('touchmove', dragMove);
    window.addEventListener('touchend', stopDrag);

}
navDrag()
function grid(){
    const grid = document.querySelector('.grid');
    imagesLoaded(grid, function () {
        new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
        });
    });
    document.getElementById("year").innerText = new Date().getFullYear();
}
grid()
function scroll(){
    var scroll = document.querySelector("#main2");
    scroll.addEventListener("scroll", () => {
        let scrollTop = scroll.scrollTop;
        let scrollHeight = scroll.scrollHeight - scroll.clientHeight;
        let scrolled = (scrollTop / scrollHeight) * 100;
        document.getElementById("progress-bar").style.width = scrolled + "%";
    });
}
scroll()
  