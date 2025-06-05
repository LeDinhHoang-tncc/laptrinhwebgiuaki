// Smooth scroll khi click menu
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
    });
});
// Xử lý form gửi tin nhắn
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã gửi tin nhắn! Mình sẽ phản hồi sớm nhất có thể.');
    this.reset();
});