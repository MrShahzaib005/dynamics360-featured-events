document.addEventListener('DOMContentLoaded', () => {
    
    const eventsGrid = document.getElementById('events-grid');
    const searchInput = document.getElementById('search-input');
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close the Toggle menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Stores the events globally so that we can filter them later without re-fetching
    let allEvents = [];

    // Fetching the data from event.json
    async function fetchEvents() {
        try {

            const response = await fetch('./events.json');
            
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            allEvents = data; 
            renderEvents(allEvents); // Initial rendering all events

        } catch (error) {
            console.error('Error:', error);
            eventsGrid.innerHTML = `<p class="error-msg">Sorry, we couldn't load the events. Please try again later.</p>`;
        }
    }


    function renderEvents(events) {
        // Clear out current content 
        eventsGrid.innerHTML = '';

        // Handle empty search results
        if (events.length === 0) {
            eventsGrid.innerHTML = `<p class="no-results">No events found matching your search.</p>`;
            return;
        }


        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');

            eventCard.innerHTML = `
                <div class="card-image">
                    <img src="${event.image}" alt="${event.title}" loading="lazy">
                    <span class="category-tag">${event.category}</span>
                </div>
                <div class="card-content">
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-details">
                        <p><i class="date-icon">📅</i> ${event.date} • ${event.time}</p>
                        <p><i class="location-icon">📍</i> ${event.location}</p>
                    </div>
                    <p class="event-desc">${event.description}</p>
                    <button class="btn btn-register" onclick="registerEvent('${event.title}')">Register Now</button>
                </div>
            `;
            
            eventsGrid.appendChild(eventCard);
        });
    }

    // Search functionality added
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        const filteredEvents = allEvents.filter(event => 
            event.title.toLowerCase().includes(searchTerm) || 
            event.location.toLowerCase().includes(searchTerm)
        );

        renderEvents(filteredEvents);
    });

    // Display a Registration Message
    window.registerEvent = (eventName) => {
        alert(`You have successfully registered for: ${eventName}!`);
    };

    fetchEvents();
});