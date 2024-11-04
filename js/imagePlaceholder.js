// const images = document.querySelectorAll('img');
// images.forEach(
//     img => {
//         img.src = defaultImageSrc;
//     }
//     );
// images.forEach(
//     img => {
//     img.onerror = function() {
//     img.src = '../js/placeholder-image.jpg';
//     img.alt = "Default image";
//     img.onerror = null; // No infinite loop if default image is also missing
//     };
//     }
//     );
document.querySelectorAll('img').forEach(img =>{
    console.log("runs")
    img.onerror = function() {
        this.onerror = null;
        this.src = '../js/placeholder-image.jpg';
        this.alt = ""
    }
})