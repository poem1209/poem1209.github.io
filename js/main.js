// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect for paper images
document.querySelectorAll('.paper-image img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ====== Image Modal (Zoom) ======
// 创建弹窗元素
const modal = document.createElement('div');
modal.classList.add('img-modal');
modal.innerHTML = `
  <div class="img-modal-backdrop"></div>
  <img class="img-modal-img" src="" alt="Zoomed image">
`;
document.body.appendChild(modal);
const modalImg = modal.querySelector('.img-modal-img');
const modalBackdrop = modal.querySelector('.img-modal-backdrop');

// 打开弹窗函数
function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.classList.add('active');
}
// 关闭弹窗函数
function closeModal() {
    modal.classList.remove('active');
    modalImg.src = '';
}
modalBackdrop.addEventListener('click', closeModal);
modalImg.addEventListener('click', closeModal);

// 绑定所有主要图片的点击事件（包括Life Gallery和Publications）
document.querySelectorAll('.gallery-item img, .paper-image img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function(e) {
        openModal(this.src, this.alt);
    });
});
