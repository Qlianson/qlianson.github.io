window.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelector('#fellow_link');
    if (link) {
        link.addEventListener('click', (event) => {
            gtag('event', 'click', {
                'event_category': 'fellink',
                'event_label': event.target.href,
                'transport_type': 'beacon'
            });
        });
    }
});