import {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './style.css'

const PaymentPopup = ({items, totalAmount}) => {
  const [selectedPayment, setSelectedPayment] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handlePaymentChange = e => {
    setSelectedPayment(e.target.value)
  }

  const handleConfirmOrder = () => {
    setSuccessMessage('Your order has been placed successfully')
  }

  return (
    <Popup
      trigger={
        <button type="button" className="checkout-btn">
          Checkout
        </button>
      }
      modal
      closeOnDocumentClick
      className="popup-main"
    >
      {close => (
        <div className="popup-content">
          <h2>Payment Options</h2>

          {/* Payment Options */}
          <form>
            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                disabled
                onChange={handlePaymentChange}
              />
              Card
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="payment"
                value="net-banking"
                disabled
                onChange={handlePaymentChange}
              />
              Net Banking
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="payment"
                value="upi"
                disabled
                onChange={handlePaymentChange}
              />
              UPI
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="payment"
                value="wallet"
                disabled
                onChange={handlePaymentChange}
              />
              Wallet
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </label>
          </form>

          {/* Summary */}
          <div className="summary">
            <p>Number of Items: {items}</p>
            <p>Total Price: ₹{totalAmount}</p>
          </div>

          {/* Confirm Order Button */}
          <button
            type="button"
            className="cart-popup-button"
            onClick={handleConfirmOrder}
            disabled={selectedPayment !== 'cod'}
          >
            Confirm Order
          </button>

          {/* Success Message */}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}

          {/* Close Button */}
          <button type="button" onClick={close} className="close-popup">
            Close
          </button>
        </div>
      )}
    </Popup>
  )
}

export default PaymentPopup
