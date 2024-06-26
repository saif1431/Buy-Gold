import React, { useState } from 'react';
import styles from './FAQS.module.css';
import { IoIosArrowForward } from 'react-icons/io';

function FAQS() {
  const [openSection, setOpenSection] = useState(null);

  const handleArrow = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      <div className={styles.FAQS}>
        <div className={styles.FAQSBox}>
          <h5>FAQ</h5>

          <div className={styles.FAQSBox1}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section1')}>
              <h4>Why should I choose RunescapeGP for my RuneScape needs?</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section1' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section1' ? styles.show : styles.hide}`}>
              <p>We could begin by telling you how we sell tens of billions daily, we offer 24/7 English live chat, and for nearly a decade we’ve maintained our position as the #1 RuneScape Gold seller in the market, but who wants to hear about all of that stuff? Instead, we’d rather tell you about what benefits you.</p>
              <br />
              <p>RunescapeGP offers a variety of payment methods, providing our customers with the option that works best for them. RunescapeGP doesn’t require ID verification, plain and simple. We value your privacy and security, and our team doesn’t request you to prove who you are to complete a transaction. Speaking of our team, if you need any assistance with the purchase, every RunescapeGP agent has been trained from years of experience to provide the best possible experience. We aim to deliver all orders within minutes and are readily available to answer questions or help at any time via our live chat.</p>
            </div>
          </div>

          <div className={styles.FAQSBox2}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section2')}>
              <h4>How does the delivery process work?</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section2' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section2' ? styles.show : styles.hide}`}>
              <p>Upon creating an order, you will be redirected to an order page with instructions on how to receive your gold. The instructions will let you know the delivery location and world to collect your gold. Simply arrive at the designated location, and our delivery agent will trade you the gold. If you lose your order page, don't worry, you'll be sent an email with a link to your order page automatically.</p>
              <br />
              <p>If you require any help, feel free to contact our support.</p>
              <br />
              <p>We take every precaution during the delivery process to ensure a secure trading experience to protect your RuneScape account.</p>
            </div>
          </div>
          <div className={styles.FAQSBox3}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section3')}>
              <h4>What payment methods do you accept?</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section3' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section3' ? styles.show : styles.hide}`}>
              <p>RunescapeGP strives to give our customers flexibility with how they choose to pay. We accept credit cards and debit cards, a dozen cryptocurrencies, iDeal, Klarna, EU Bank Transfer, UK Bank transfer, Bancontact, Skrill, Neteller, Przelewy24, and PaySafeCard. We have no hidden fees on our site. If you click on any of the payment method buttons in the footer, you will find additional information.</p>
              <br />
              <br />
              <p>If you would like to discuss the payment methods or have any questions about buying, please feel free to contact our live chat. We are always happy to provide you with additional help.</p>
            </div>
          </div>
          <div className={styles.FAQSBox4}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section4')}>
              <h4>Is buying from RunescapeGP safe?</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section4' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section4' ? styles.show : styles.hide}`}>
              <p>As with everything, it depends on who you purchase from and what the seller does to protect you. Here at RunescapeGP, we believe in protecting our customers to the best of our ability. Our customer satisfaction is our top priority. With this in mind, and from the lessons from our time in the market, we’ve taken steps to protect you.
              </p>
              <br />
              <br />
              <p>
              For instance, we have implemented the latest encryption technology to protect your data. Furthermore, we take every precaution to reduce the possibility of our customers receiving a ban within RuneScape. For example, we don’t use VPNs, proxies, bots, cheats, or anything else that may potentially induce a ban for our customers.</p>
            </div>
          </div>
          <div className={styles.FAQSBox5}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section5')}>
              <h4>Can I sell my OSRS and RS3 gold to RunescapeGP?</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section5' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section5' ? styles.show : styles.hide}`}>
              <p>Absolutely! RunescapeGP prides itself on being able to provide a variety of payment methods and the best prices in the market. Whether you’re selling gold from a big item drop, or taking a break from RuneScape, we are always purchasing gold, and you can feel safe in knowing you’re picking a trustworthy site to sell to. 
				
              </p>
              <br />
              <br />
              <p>If you’re ready to sell your OSRS or RS3 gold or just want to learn more, please visit our dedicated selling page </p>
            </div>
          </div>
          <div className={styles.FAQSBox6}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section6')}>
              <h4>Do I need to register to use your services?</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section6' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section6' ? styles.show : styles.hide}`}>
              <p>No, a registered account isn’t required to use RunescapeGP. Whether you’re selling, swapping, or buying gold, you can do so freely without an account. RunescapeGP believes in privacy. and we understand that not everybody wants to use an account. 
				
              </p>
              <br />
              <br />
              <p>With that being said, though, by registering, you gain access to unique features such as easy access to your order history, exclusive discounts, and updated notices on what’s new at RunescapeGP. Registration will always be free, so you’re welcome to at any point.</p>
            </div>
          </div>
          <div className={styles.FAQSBox7}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section7')}>
              <h4>What do I need to make a purchase?</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section7' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section7' ? styles.show : styles.hide}`}>
              <p>RunescapeGP believes in being an accessible platform for all customers. The only requirement when purchasing from us is to use a valid email to receive your order information and your RuneScape username. Unlike many other sites, we do not require you to divulge personal information such as a picture of your ID or Passport. 
				
              </p>
              <br />
              <br />
              <p>If this is your first time purchasing from us and you have any doubts or need any help, please just come into our live chat, and we’ll be happy to help you.</p>
            </div>
          </div>

<div className={styles.support}>
      <h5>Didn't find the answer to your question?</h5>
      <button>Support</button>
</div>
        </div>
      </div>
    </div>
  );
}

export default FAQS;
