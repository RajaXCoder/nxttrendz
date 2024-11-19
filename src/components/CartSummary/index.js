import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalAmount = cartList.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0,
      )

      return (
        <div className="summary-container">
          <div className="total-amount-container">
            <h1 className="order-total-element">
              Order Total:
              <span className="total-amount"> Rs {totalAmount}/-</span>
            </h1>

            <p>{cartList.length} items in cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
