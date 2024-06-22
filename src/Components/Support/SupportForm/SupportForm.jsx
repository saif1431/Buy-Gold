import React from 'react'
import style from './SupportForm.module.css'
function SupportForm() {
  return (
    <div>
      <div className={style.supportForm}>
<div className={style.supportFormDiv}>
      <h3>Contact Us</h3>
      <p>If you have any questions or concerns, feel free to contact us either via live chat or through e-mail using the form below.</p>

      <div className={style.SupportInput}>
            <input type="text" placeholder='Email Address' />
            <select name="" id="">
                  <option value="">Select*</option>
                  <option value="">Question</option>
                  <option value="">Complaint</option>
                  <option value="">Feedback</option>
                  <option value="">Other</option>
            </select>
      </div>
            <textarea cols={30} rows={10} placeholder='Messages' name="" id=""></textarea>
            <div className={style.supportBtn}>
            <button>Send Message    </button>
            </div>
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
  )
}

export default SupportForm
