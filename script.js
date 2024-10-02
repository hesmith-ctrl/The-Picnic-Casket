// Rotating the logo with JavaScript
window.onload = function() {
    const logo = document.getElementById("rotating-logo");

    // Use CSS transform for smooth rotation control
    let rotationDegree = 0;
    
    function rotateLogo() {
        rotationDegree += 1;  // Increase rotation degree by 1
        logo.style.transform = `rotate(${rotationDegree}deg)`;  // Apply rotation
        requestAnimationFrame(rotateLogo);  // Recursively call for smooth animation
    }
    
    rotateLogo();  // Start rotating the logo when the page loads
};

// Additional features can be added here, like menu animations or interactions
