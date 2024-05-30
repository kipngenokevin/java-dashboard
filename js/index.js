document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.container.ad-offer');
    const offerItems = document.querySelectorAll('.offers');
    const closeButton = modal.querySelector('.btn-secondary');

    offerItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            // Allow time for the display property to be applied
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    });

    closeButton.addEventListener('click', function() {
        modal.classList.remove('show');
        // Wait for the transition to complete before hiding the modal
        modal.addEventListener('transitionend', function() {
            if (!modal.classList.contains('show')) {
                modal.style.display = 'none';
            }
        }, { once: true });
    });
});

