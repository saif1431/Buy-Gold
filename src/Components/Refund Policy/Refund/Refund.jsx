import React from 'react'
import styles from './Refund.module.css'

function Refund() {
  return (
    <div className={styles.refund}>
      <div className={styles.refundContainer}>
<div className={styles.refundHeading}>
      <h1>Refund Policy</h1>
      <hr />
</div>
<div className={styles.refundText}>
      <div className={styles.refundBox}>
            <h3>1.0 Refunds</h3>
            <br />
            <p>In most cases, delivery of in-game digital items are completed within a few minutes. If for some reason we are not able to deliver within 72 hours we will refund your payment.</p>
            <br />
            <p>Prior to your order being successfully delivered, you may request a refund via our live chat service. Once your order has been successfully delivered we shall not refund or return any payments or goods.

</p>
<br />
<p>We reserve the right to refund any purchases of in-game digital items created using a VPN or Proxy.
</p>
<br />
<p>RunescapeGP is not held liable for any fees incurred when a refund is issued.
</p>
<br />

      </div>
      <div className={styles.refundBox}>
<h3>2.0 Right to Refuse Service</h3>
<br />
<p>RunescapeGP's services are not available to temporarily or indefinitely suspended RunescapeGP members. RunescapeGP reserves the right, in RunescapeGP's sole discretion, to cancel RunescapeGP accounts. RunescapeGP reserves the right to refuse service to anyone, for any reason, at any time.
</p>
      </div>
</div>
      </div>
    </div>
  )
}

export default Refund
