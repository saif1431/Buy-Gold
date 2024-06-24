import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './StripeForm.module.css';
import Logo from '../../../images/twitters.png';
import visa from '../../../images/visa.svg';
import gci from '../../../images/gci.svg';
import ubt from '../../../images/ubt.svg';
import wlt from '../../../images/wlt.svg';
import skrill from '../../../images/skrill.svg';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function StripeForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const payment = JSON.parse(localStorage.getItem('paymentDetails'));

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };
        
        const paymentData = {
          amount: 5000,
        };
        
        const { data } = await axios.post(`http://127.0.0.1:5000/create-payment-intent`, paymentData, config);
        setClientSecret(data.clientSecret);
      } catch (error) {
        setErrorMessage('Failed to initialize payment');
      }
    };

    fetchClientSecret();
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (isPaymentLoading) return;

    setIsPaymentLoading(true);
    if (!stripe || !elements) {
      setErrorMessage('Stripe has not loaded yet.');
      setIsPaymentLoading(false);
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: localStorage.getItem('rsName'),
          email: localStorage.getItem('email'),
          address: {
            country: "US"
          }
        }
      }
    });

    setIsPaymentLoading(false);

    if (result.error) {
      setErrorMessage(result.error.message);
    } else {
      alert("Payment Successful");
    }
  };

  const CARD_ELEMENT_OPTIONS = {
      style: {
        base: {
          color: '#32325d',
          fontFamily: 'Arial, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a',
        },
      },
    };
    

  return (
    <div>
      <div className={styles.StripeForm}>
        <div className={styles.StripeFormBox}>
          <div className={styles.StripeFormBox1}>
            <img src={Logo} alt="Logo" />
            <div className={styles.text}>
              <h3>RunescapeGP.com</h3>
              <p><span>Order Number:</span> 00HU676</p>
              <p><span>Total:</span> {payment.price} USD</p>
            </div>
          </div>
          <hr />
          <form onSubmit={handlePayment}>
            <div className={styles.input1}>
              <label htmlFor="card-number">Card Number*</label>
              <p><CardNumberElement id="card-number" options={CARD_ELEMENT_OPTIONS} /></p>
            </div>
            <div className={styles.captcha}>
              <label htmlFor="card-cvc">CVV2/CVC2/CAV2*</label>
              <p><CardCvcElement id="card-cvc" options={CARD_ELEMENT_OPTIONS} /></p>
            </div>
            <div className={styles.captcha}>
              <label htmlFor="card-expiry">Expires In</label>
              <p><CardExpiryElement id="card-expiry" options={CARD_ELEMENT_OPTIONS} /></p>
            </div>
            <div className={styles.buttons}>
              <button type="submit" disabled={isPaymentLoading}>Pay</button>
              <button type="button">Cancel</button>
            </div>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          </form>
          <hr />
          <div className={styles.cards}>
            <h1>Unlimit</h1>
            <div className={styles.card}>
              <img src={visa} alt="visa" />
              <img src={gci} alt="gci" />
              <img src={visa} alt="visa" />
              <img src={ubt} alt="ubt" />
              <img src={skrill} alt="skrill" />
            </div>
          </div>
          <div className={styles.footer}>
            <h4>Contact Us</h4>
            <p>© 2009-2024 Unlimit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StripeForm;
