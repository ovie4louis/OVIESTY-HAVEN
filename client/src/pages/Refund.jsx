import React from 'react';
import "../styles/Refund.scss";

const Refund = () => {
  return (
   <div class="return-refund-policy">
  <h1 id="policy-title">Return and Refund Policy</h1>
  <p id="policy-intro">
    At Oviesty Haven Rental, we strive to provide exceptional service and ensure customer satisfaction. Please read our return and refund policy carefully.
  </p>
  <ul id="policy-points">
    <li>
      <strong>Reservation Cancellations:</strong> Cancellations made 48 hours before the rental date are eligible for a full refund. Cancellations made less than 48 hours in advance will incur a cancellation fee of 20% of the rental amount.
    </li>
    <li>
      <strong>Refund Processing:</strong> Refunds are processed within 7–10 business days after the cancellation request is confirmed.
    </li>
    <li>
      <strong>Non-refundable Items:</strong> Add-ons such as cleaning services or customized requests are non-refundable.
    </li>
    <li>
      <strong>Damage Claims:</strong> Refunds are not applicable if the rental property or items are damaged due to negligence or misuse.
    </li>
    <li>
      <strong>Contact Us:</strong> For inquiries, please contact us at <a href="mailto:support@oviestyhaven.com">support@oviestyhaven.com</a>.
    </li>
  </ul>
</div>

  )
}

export default Refund