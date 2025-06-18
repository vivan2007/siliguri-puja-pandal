// Pandal data
const pandalsData = [
    {
        id: 1,
        name: "Mahabirsthan Sarbojanin",
        location: "Mahabirsthan, Siliguri",
        category: "traditional",
        image: "https://images.pexels.com/photos/6896070/pexels-photo-6896070.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "One of the oldest and most revered pandals in Siliguri, known for its traditional decorations and spiritual atmosphere.",
        timing: "6:00 AM - 11:00 PM",
        rating: 4.8,
        specialFeatures: ["Traditional Dhak", "Cultural Programs", "Prasad Distribution"],
        page: "product-card.html"
    },
    {
        id: 2,
        name: "Hashmi Chowk Durga Puja",
        location: "Hashmi Chowk, Siliguri",
        category: "modern",
        image: "https://images.pexels.com/photos/8828786/pexels-photo-8828786.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Famous for its modern artistic approach and innovative decorations that blend tradition with contemporary design.",
        timing: "5:30 AM - 11:30 PM",
        rating: 4.7,
        specialFeatures: ["LED Decorations", "Modern Art", "Food Stalls"]
    },
    {
        id: 3,
        name: "Sevoke Road Puja Committee",
        location: "Sevoke Road, Siliguri",
        category: "theme",
        image: "https://images.pexels.com/photos/6896067/pexels-photo-6896067.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Known for their unique theme-based pandals that change every year, creating immersive cultural experiences.",
        timing: "6:00 AM - 12:00 AM",
        rating: 4.9,
        specialFeatures: ["Theme Based", "Interactive Displays", "Photography Zone"]
    },
    {
        id: 4,
        name: "Hill Cart Road Sarbojanin",
        location: "Hill Cart Road, Siliguri",
        category: "traditional",
        image: "https://images.pexels.com/photos/8828787/pexels-photo-8828787.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A community-driven pandal that maintains traditional Bengali customs and rituals with great devotion.",
        timing: "5:00 AM - 11:00 PM",
        rating: 4.6,
        specialFeatures: ["Community Kitchen", "Traditional Music", "Anjali Programs"]
    },
    {
        id: 5,
        name: "Bidhan Market Puja",
        location: "Bidhan Market, Siliguri",
        category: "modern",
        image: "https://images.pexels.com/photos/6896069/pexels-photo-6896069.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Popular among young visitors for its modern approach to celebration and vibrant cultural programs.",
        timing: "6:30 AM - 11:30 PM",
        rating: 4.5,
        specialFeatures: ["Youth Programs", "Modern Dance", "Social Media Corner"]
    },
    {
        id: 6,
        name: "Champasari Durga Mandir",
        location: "Champasari, Siliguri",
        category: "traditional",
        image: "https://images.pexels.com/photos/8828785/pexels-photo-8828785.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A serene location known for its peaceful atmosphere and traditional worship practices.",
        timing: "5:30 AM - 10:30 PM",
        rating: 4.7,
        specialFeatures: ["Peaceful Environment", "Traditional Aarti", "Meditation Area"]
    },
    {
        id: 7,
        name: "Kanchenjunga Stadium Puja",
        location: "Kanchenjunga Stadium, Siliguri",
        category: "theme",
        image: "https://images.pexels.com/photos/6896068/pexels-photo-6896068.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Grand celebration with elaborate theme-based decorations and large-scale cultural events.",
        timing: "6:00 AM - 12:00 AM",
        rating: 4.8,
        specialFeatures: ["Grand Scale", "Celebrity Performances", "Sports Activities"]
    },
    {
        id: 8,
        name: "Pradhan Nagar Puja",
        location: "Pradhan Nagar, Siliguri",
        category: "modern",
        image: "https://images.pexels.com/photos/8828784/pexels-photo-8828784.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Known for its eco-friendly approach and sustainable celebration practices.",
        timing: "6:00 AM - 11:00 PM",
        rating: 4.6,
        specialFeatures: ["Eco-Friendly", "Sustainable Decor", "Environmental Awareness"]
    },
    {
        id: 9,
        name: "Siliguri Club Durga Puja",
        location: "Siliguri Club, Siliguri",
        category: "traditional",
        image: "https://images.pexels.com/photos/6896066/pexels-photo-6896066.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Elite club's traditional celebration with heritage decorations and classical cultural programs.",
        timing: "7:00 AM - 11:00 PM",
        rating: 4.7,
        specialFeatures: ["Heritage Style", "Classical Music", "Elite Gathering"]
    }
];

const { pandalsData } = require("./pandalsData");

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const scrollTopBtn = document.getElementById('scrollTop');
const pandalsGrid = document.getElementById('pandalsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add click event listeners to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Scroll to top functionality
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }

    // Header background on scroll
    const header = document.querySelector('.header');
    if (window.pageYOffset > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animated counter for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    observer.observe(stat);
});

// Render pandals
function renderPandals(pandals) {
    pandalsGrid.innerHTML = '';
    
    pandals.forEach(pandal => {
        const pandalCard = createPandalCard(pandal);
        pandalsGrid.appendChild(pandalCard);
    });
}

// Create pandal card
function createPandalCard(pandal) {
    const card = document.createElement('div');
    card.className = `pandal-card ${pandal.category}`;
    
    const stars = '★'.repeat(Math.floor(pandal.rating)) + '☆'.repeat(5 - Math.floor(pandal.rating));
    
    card.innerHTML = `
        <div class="pandal-image">
            <img src="${pandal.image}" alt="${pandal.name}">
            <div class="pandal-category">${pandal.category.charAt(0).toUpperCase() + pandal.category.slice(1)}</div>
        </div>
        <div class="pandal-content">
            <h3 class="pandal-title">${pandal.name}</h3>
            <div class="pandal-location">
                <i class="fas fa-map-marker-alt"></i>
                ${pandal.location}
            </div>
            <p class="pandal-description">${pandal.description}</p>
            <div class="pandal-details">
                <div class="pandal-timing">
                    <i class="fas fa-clock"></i>
                    ${pandal.timing}
                </div>
                <div class="pandal-rating">
                    <span class="stars">${stars}</span>
                    <span>${pandal.rating}</span>
                </div>
            </div>
            <div class="pandal-actions">
                <button class="btn btn-primary btn-small" onclick="viewDetails(${pandal.id})">
                    <i class="fas fa-eye"></i>
                    View Details
                </button>
                <button class="btn btn-outline btn-small" onclick="getDirections('${pandal.location}')">
                    <i class="fas fa-directions"></i>
                    Directions
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Filter pandals
function filterPandals(category) {
    const cards = document.querySelectorAll('.pandal-card');
    
    cards.forEach(card => {
        if (card.classList.contains(category)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Filter button event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter pandals
        const category = button.getAttribute('data-filter');
        filterPandals(category);
    });
});

// View pandal details
function viewDetails(pandalId) {
    const pandal = pandalsData.find(p => p.id === pandalId);
    if (pandal) {
        alert(`${pandal.name}\n\nLocation: ${pandal.location}\nTiming: ${pandal.timing}\nRating: ${pandal.rating}/5\n\nSpecial Features:\n${pandal.specialFeatures.join('\n')}\n\nDescription: ${pandal.description}`);
    }
}

// Get directions
function getDirections(location) {
    const encodedLocation = encodeURIComponent(location);
    const googleMapsUrl = `https://www.google.com/maps/search/${encodedLocation}`;
    window.open(googleMapsUrl, '_blank');
}

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Render all pandals initially
    renderPandals(pandalsData);
    
    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.pandal-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);