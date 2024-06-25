import React, { useState } from 'react';
import style from './SupportForm.module.css';

function SupportForm() {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://buy-gold-server.vercel.app/support', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, category, message }),
    });
    if (response.ok) {
      alert('Message received');
    } else {
      alert('Failed to send message');
    }
  };

  return (
    <div>
      <div className={style.supportForm}>
        <div className={style.supportFormDiv}>
          <h3>Contact Us</h3>
          <p>If you have any questions or concerns, feel free to contact us either via live chat or through e-mail using the form below.</p>

          <form onSubmit={handleSubmit}>
            <div className={style.SupportInput}>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                required
              >
                <option value="">Select*</option>
                <option value="Question">Question</option>
                <option value="Complaint">Complaint</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <textarea 
              cols={30} 
              rows={10} 
              placeholder="Message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required
            ></textarea>
            <div className={style.supportBtn}>
              <button type="submit">Send Message</button>
            </div>
          </form>

          <div className={style.companyInfo}>
            <h4>Company Info</h4>
            <div className={style.info}>
              <h6>Statpoint Support Services Limited</h6>
              <h6>HE 410270</h6>
              <h6>Avlonos, 1 Maria House,</h6>
              <h6>1075, Nicosia, Cyprus.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportForm;
