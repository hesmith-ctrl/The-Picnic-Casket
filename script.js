window.onload = function() {
    const logo = document.getElementById("rotating-logo");
    let rotationDegree = 0;

    function rotateLogo() {
        rotationDegree += 1;  
        logo.style.transform = `rotate(${rotationDegree}deg)`;  
        requestAnimationFrame(rotateLogo);  
    }
    
    rotateLogo();  
};