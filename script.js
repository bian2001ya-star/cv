// رسالة ترحيبية تفاعلية في وحدة التحكم (Console) عند تحميل الصفحة بنجاح
document.addEventListener("DOMContentLoaded", () => {
    console.log("تم تحميل السيرة الذاتية الرقمية لـ يسرى ياسر بنجاح.");
    
    // تأثير تفاعلي خفيف لبطاقات الأقسام عند تمرير الماوس
    const cards = document.querySelectorAll('.project-card, .education-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});