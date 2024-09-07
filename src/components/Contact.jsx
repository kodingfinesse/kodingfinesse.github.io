import React from 'react';

const Contact = () => (
  <div className="padding-64 content text-grey" id="contact">
    <h2 className="text-light-grey">Contact</h2>
    <hr style={{ width: '200px' }} className="opacity" />
    <div className="section">
      <p><i className="fa fa-github fa-fw text-white xxlarge margin-right"></i> kodeklipper</p>
      <p><i className="fa fa-envelope fa-fw text-white xxlarge margin-right"></i> kiddkoding@gmail.com</p>
    </div>
    <form action="/action_page.php" target="_blank">
      {/* Input fields for Name, Email, Subject, and Message */}
    </form>
  </div>
);

export default Contact;
