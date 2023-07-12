var messages = JSON.parse(localStorage.getItem('messages')) || [];
var messageList = document.getElementById('messageList');

if (messages.length === 0) {
    var listItem = document.createElement('li');
    listItem.textContent = 'No messages found.';
    messageList.appendChild(listItem);

} else {
    messages.forEach(function (message) {
        var listItem = document.createElement('li');
        var name = document.createElement('p');
        var email = document.createElement('p');
        var phone = document.createElement('p');
        var messageContent = document.createElement('p');

        name.textContent = 'Name: ' + message.name;
        email.textContent = 'Email: ' + message.email;
        phone.textContent = 'Phone: ' + message.phone;
        messageContent.textContent = 'Message: ' + message.message;

        listItem.appendChild(name);
        listItem.appendChild(email);
        listItem.appendChild(phone);
        listItem.appendChild(messageContent);

        messageList.appendChild(listItem);
    });
}

var navbarShrink = function () {

    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) { return; }
    if (window.scrollY === 0) { navbarCollapsible.classList.remove('navbar-shrink') } 
    else { navbarCollapsible.classList.add('navbar-shrink')}

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
