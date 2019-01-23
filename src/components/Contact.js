import React from 'react';

const contactData = [
  {
    name: 'fab fa-github',
    link: 'https://github.com/ykttl'
  },
  {
    name: 'fab fa-linkedin',
    link: ''
  },
  {
    name: 'fas fa-envelope',
    link: ''
  },
  {
    name: 'fas fa-palette',
    link: 'http://otturtle.com/'
  }
];

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <p className="contact-font">Contact</p>
      <ul>
        {contactData.map(contact => (
          <li style={{ display: 'inline-block' }}>
            <a href={contact.link}>
              <span>
                <i className={contact.name} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p>© 2019 Yuko Kanaki</p>
    </div>
  );
};

export default Contact;
