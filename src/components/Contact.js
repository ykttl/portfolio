import React from 'react';
const keys = require('./keys.js');

const contactData = [
  {
    name: 'github',
    icon: 'fab fa-github',
    link: 'https://github.com/ykttl'
  },
  {
    name: 'angellist',
    icon: 'fab fa-angellist',
    link: 'https://angel.co/yuko-mazurek'
  },
  {
    name: 'mail',
    icon: 'fas fa-envelope',
    link: `mailto:${keys.mail}`
  },
  {
    name: 'otturtle',
    icon: 'fas fa-palette',
    link: 'http://otturtle.com/'
  }
];
console.log(keys.mail);

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <p className="heading">Contact</p>
      <ul>
        {contactData.map(contact => (
          <li style={{ display: 'inline-block' }}>
            <a href={contact.link}>
              <span>
                <i className={contact.icon} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p>© 2019 Yuko Mazurek</p>
    </div>
  );
};

export default Contact;
