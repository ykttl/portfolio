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
  }
];

const Contact = () => {
  return (
    <div className="contact-container">
      <p className="contact-font">Feel free to contact me :D</p>
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
