window.addEventListener('DOMContentLoaded', event => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value,
    };

    let messages = localStorage.getItem('messages');
    if (messages) {
      messages = JSON.parse(messages);
    } else {
      messages = [];
    }

    messages.push(formData);
    localStorage.setItem('messages', JSON.stringify(messages));

    document.getElementById('submitSuccessMessage').classList.remove('d-none');
    form.reset();
  });

  const clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', function () {
    localStorage.removeItem('messages');
  });

  if (window.location.pathname === '/list.html') {
    const messages = localStorage.getItem('messages');

    if (messages) {
      const parsedMessages = JSON.parse(messages);
      const messageList = document.getElementById('messageList');

      parsedMessages.forEach(function (message) {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${message.name}, Email: ${message.email}, Phone: ${message.phone}, Message: ${message.message}`;
        messageList.appendChild(listItem);
      });
    }
  }

  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  navbarShrink();

  document.addEventListener('scroll', navbarShrink);

  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  };

  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});
