window.addEventListener('DOMContentLoaded', () => {
    const popup = document.querySelector('#address-popup'),
          checkbox = document.querySelector('#address-checkbox'),
          button = document.querySelector('#address-btn'),
          STORAGE_KEY = 'addressChecked',
          ONE_DAY_MS = 24 * 60 * 60 * 1000,
          now = Date.now();

    // console.log(now);
    // console.log(localStorage.getItem(STORAGE_KEY));
    // console.log(now - Number(localStorage.getItem(STORAGE_KEY)))

    if (!localStorage.getItem(STORAGE_KEY) || now - Number(localStorage.getItem(STORAGE_KEY)) > ONE_DAY_MS) {

        popup.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

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
            localStorage.setItem(STORAGE_KEY, Date.now().toString());
            popup.classList.add('hidden');
            document.body.style.overflow = '';

        }

    })
})