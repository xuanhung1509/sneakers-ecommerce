import { useEffect, useState, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserInfo } from '../features/cart/cartSlice';
import { forms } from '../data';
import { isEmailValid, isPhoneNumberValid } from '../utils/validate';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaInfoCircle } from 'react-icons/fa';
import PaypalContainer from '../components/PaypalContainer';
const API_URL = process.env.REACT_APP_ORDER_API_URL;

function Checkout() {
  const { cartItems, userInfo } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState(
    Object.keys(userInfo).length > 0
      ? userInfo
      : {
          name: '',
          email: '',
          phone: '',
          address: '',
          zipcode: '',
          city: '',
          country: '',
        }
  );
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipcode: '',
    city: '',
    country: '',
  });
  const [disableButton, setDisableButton] = useState(true);
  const [orderSummary, setOrderSummary] = useState({
    subtotal: '',
    shippingFee: '',
    total: '',
  });
  const { subtotal, shippingFee, total } = orderSummary;

  // Only get order summary when orderData changes
  const orderData = useMemo(
    () =>
      cartItems.map((item) => ({
        _id: item._id,
        qty: item.qty,
      })),
    [cartItems]
  );

  const dispatch = useDispatch();

  const handleTextChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    // Reset error
    setErrors((prevState) => ({
      ...prevState,
      [id]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled valid
    for (const key in errors) {
      if (errors[key].length > 0) {
        setDisableButton(true);
        return;
      }
    }

    setDisableButton(false);
    dispatch(saveUserInfo(formData));
    toast.success('Your info was saved!', { id: 'formSave' });
  };

  const validateInput = (inputId) => {
    const inputValue = formData[inputId];

    // Validate required
    if (inputValue.trim().length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        [inputId]: 'This field is required.',
      }));
      return;
    }

    // Validate email
    if (inputId === 'email') {
      if (!isEmailValid(inputValue)) {
        setErrors((prevState) => ({
          ...prevState,
          [inputId]: 'Please enter a valid email.',
        }));
      }
      return;
    }

    // Validate phone
    if (inputId === 'phone') {
      if (!isPhoneNumberValid(inputValue)) {
        setErrors((prevState) => ({
          ...prevState,
          [inputId]: 'Please enter a valid phone number.',
        }));
      }
      return;
    }
  };

  // Show notification if user info was saved from previous order
  useEffect(() => {
    if (cartItems.length === 0) return;

    if (Object.keys(userInfo).length > 0) {
      setTimeout(
        () =>
          toast(
            <div className='flex items-start gap-4'>
              <FaInfoCircle size={24} fill='green' />
              <div>
                <span className='block mb-4'>
                  The form was filled based on your previous order.
                </span>
                <span>Double check if you need to change anything.</span>
              </div>
            </div>,
            { id: 'formAutoFill' },
            { duration: 6000 }
          ),
        500
      );
    }
  }, [cartItems, userInfo]);

  // Get order summary (subtotal & shipping)
  useEffect(() => {
    if (cartItems.length === 0) return;

    const getOrderSummary = async () => {
      const { data } = await axios({
        url: `${API_URL}/summary`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: orderData,
      });
      const { subtotal, shippingFee, total } = data;

      setOrderSummary({
        subtotal,
        shippingFee,
        total,
      });
    };

    getOrderSummary();
  }, [cartItems, orderData]);

  if (cartItems.length === 0) return <Navigate to='/' />;

  return (
    <section className='sm:px-8 py-8'>
      <div className='container'>
        <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-8'>
          <div className='w-full lg:w-2/3 bg-sneakers-blue-grayish-light text-black p-8 rounded-lg drop-shadow-md'>
            <h2 className='text-3xl font-bold uppercase mb-12 '>Checkout</h2>
            <form
              className='flex flex-col justify-center items-stretch gap-12'
              onSubmit={handleSubmit}
            >
              {forms.map((form) => (
                <div
                  key={form.title}
                  className={'grid grid-cols-1 md:grid-cols-2 gap-6 '}
                >
                  <h3 className='md:col-span-2 text-sneakers-orange text-md uppercase mb-3'>
                    {form.title}
                  </h3>
                  {form.inputs.map((input) => (
                    <div
                      key={input.id}
                      className={`${input.span && 'md:col-span-2'}`}
                    >
                      <label
                        htmlFor={input.id}
                        className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-bold mb-2"
                      >
                        {input.label}
                      </label>
                      <input
                        type={input.id === 'email' ? 'email' : 'text'}
                        id={input.id}
                        placeholder={input.placeholder}
                        required
                        value={formData[input.id]}
                        onChange={handleTextChange}
                        onBlur={() => validateInput(input.id)}
                        className='w-full text-sm px-6 py-3 border border-gray-300 focus:outline outline-sneakers-orange rounded-md peer'
                      />
                      <small className='text-red-500'>{errors[input.id]}</small>
                    </div>
                  ))}
                </div>
              ))}
              <button
                type='submit'
                className='bg-sneakers-orange hover:bg-sneakers-orange/50 text-white px-6 py-3 rounded-md transition-colors'
              >
                Save
              </button>
            </form>
          </div>

          <div className='w-full lg:w-1/3 bg-sneakers-blue-grayish-light text-black p-8 rounded-lg drop-shadow-md'>
            <div>
              <h2 className='text-3xl font-bold uppercase mb-12 '>Summary</h2>
              <div className='grid grid-cols-2 justify-between items-center gap-1 mb-8'>
                <span className='uppercase'>Subtotal</span>
                <span className='text-lg text-right font-bold'>
                  $ {subtotal}
                </span>
                <span className='uppercase'>Shipping</span>
                <span className='text-lg text-right font-bold'>
                  $ {shippingFee}
                </span>
                <span className='uppercase'>Total</span>
                <span className='text-lg text-right font-bold'>$ {total}</span>
              </div>
            </div>
            <PaypalContainer
              disableButton={disableButton}
              orderData={orderData}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Checkout;
