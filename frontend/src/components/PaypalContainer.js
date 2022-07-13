import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { markOrderSuccess } from '../features/cart/cartSlice';
import axios from 'axios';
import toast from 'react-hot-toast';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PaypalContainer({ disableButton, orderData }) {
  const PAYPAL_CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;
  const API_URL = process.env.REACT_APP_ORDER_API_URL;

  const options = {
    'client-id': PAYPAL_CLIENT_ID,
    currency: 'USD',
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickButton = () => {
    if (disableButton) {
      toast.error('Please fill out the form and click Save.', {
        id: 'paypalButton',
      });
    }
  };

  const handleCreateOrder = async (data, actions) => {
    if (!disableButton) {
      const response = await axios({
        url: `${API_URL}/create`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: orderData,
      });
      const order = await response.data;
      return order.id;
    }
  };

  const handleApprovePayment = async (data, actions) => {
    const response = await axios({
      url: `${API_URL}/${data.orderID}/capture`,
      method: 'POST',
    });
    const orderData = await response.data;
    const transaction = orderData.purchase_units[0].payments.captures[0];

    if (transaction.status === 'COMPLETED') {
      dispatch(markOrderSuccess(true));
      setTimeout(() => navigate('/success'), 500);
    }
  };

  return (
    <PayPalScriptProvider options={options}>
      <PayPalButtons
        disabled={disableButton}
        onClick={handleClickButton}
        createOrder={handleCreateOrder}
        onApprove={handleApprovePayment}
        onError={() => toast.error('Error occurred.', { id: 'paypalError' })}
        forceReRender={[disableButton]}
      />
    </PayPalScriptProvider>
  );
}
export default PaypalContainer;
