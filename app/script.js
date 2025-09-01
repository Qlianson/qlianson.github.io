window.addEventListener('DOMContentLoaded', () => {
    const popup = document.querySelector('#address-popup'),
          checkbox = document.querySelector('#address-checkbox'),
          button = document.querySelector('#address-btn'),
          STORAGE_KEY = 'addressChecked'

    // if (!localStorage.getItem(STORAGE_KEY)) {
    //     popup.classList.remove('hidden');
    //     document.body.style.overflow = 'hidden';
    // }

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            button.classList.remove('disable-btn');
            button.classList.add('button_main');
        } else {
            button.classList.remove('button_main');
            button.classList.add('disable-btn');
        }
    })

    button.addEventListener('click', () => {
        if (button.classList.contains('button_main')) {
            localStorage.setItem(STORAGE_KEY, '');
            popup.classList.add('hidden');
            document.body.style.overflow = '';
        }
    })
})