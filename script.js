document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
        
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            targetSection.classList.add('active');
            
            if (window.innerWidth <= 768) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Form submitted:', data);
            
            alert('Thank you for your message! I will get back to you soon.');
            
            this.reset();
        });
    }
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
    const animateSkills = () => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection && skillsSection.classList.contains('active')) {
            const progressBars = document.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    };
    animateSkills();
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                animateSkills();
            }
        });
    });
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section, { attributes: true });
    });
});