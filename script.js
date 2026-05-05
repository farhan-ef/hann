// Smooth scroll and interaction effects
document.addEventListener('DOMContentLoaded', () => {
    // Add click tracking (optional - for analytics)
    const links = document.querySelectorAll('.link-item');
    
    links.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            const linkName = link.querySelector('.link-text').textContent;
            console.log(`Clicked: ${linkName}`);
            
            // You can add analytics tracking here
            // Example: gtag('event', 'click', { link_name: linkName });
        });
    });

    // Add subtle parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const container = document.querySelector('.container');
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        
        container.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Reset transform when mouse leaves
    document.addEventListener('mouseleave', () => {
        const container = document.querySelector('.container');
        container.style.transform = 'translate(0, 0)';
    });
});
