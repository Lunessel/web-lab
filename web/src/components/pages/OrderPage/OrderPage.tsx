import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './OrderPage.scss';
import { AppDispatch, getCarts, RootState } from '../../../store';
import CartServices from '../../../services/CartServices';

const OrderPage = () => {
    const navigate = useNavigate();
    const { carts } = useSelector((state: RootState) => state.cartsReducer);
    const dispatch = useDispatch<AppDispatch>();

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        paymentType: '',
        deliveryType: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must be 50 characters or less')
            .required('Required name'),
        email: Yup.string()
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                'Invalid email address'
            )
            .required('Required email'),
        phone: Yup.string()
            .min(12, 'Phone number is too short')
            .required('Required phone number'),
        paymentType: Yup.string().required('Required paymentType'),
        deliveryType: Yup.string().required('Required deliveryType'),
    });

    const handleSubmit = async (values: typeof initialValues) => {
        alert('Order submitted successfully!');
        await CartServices.clearCart();
        dispatch(getCarts());
        navigate('/thank-you');
    };

    return (
        <div className="order-page">
            <h1>Complete Your Order</h1>

            <div className="selected-doctors">
                <h2>Your Selected Doctors</h2>
                <ul>
                    {carts?.map((cart) => (
                        <li key={cart.doctor.doctor_id}>
                            {cart.doctor.name} - <strong>{cart.doctor.price} UAH</strong>
                        </li>
                    ))}
                </ul>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Ім'я ну і Прізвище</label>
                            <Field id="name" name="name" type="text" placeholder="Enter your full name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Напиши пошту щоб ми тоб розсилку кидали</label>
                            <Field id="email" name="email" type="email" placeholder="Enter your email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <PhoneInput
                                country="ua"
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    placeholder: '+380 (__) ___-__-__',
                                }}
                                onChange={(phone) => setFieldValue('phone', phone)}
                            />
                            <ErrorMessage name="phone" component="div" className="error" />
                        </div>
                        <div className="form-group radio-group">
                            <label>Delivery Type</label>
                            <div className="radio-options">
                                <label className="radio-option">
                                    <Field type="radio" name="deliveryType" value="courier" />
                                    <span className="custom-radio"></span>
                                    Courier Delivery
                                </label>
                                <label className="radio-option">
                                    <Field type="radio" name="deliveryType" value="pickup" />
                                    <span className="custom-radio"></span>
                                    Pickup from Warehouse
                                </label>
                            </div>
                            <ErrorMessage name="deliveryType" component="div" className="error" />
                        </div>
                        <div className="form-group radio-group">
                            <label>Payment Type</label>
                            <div className="radio-options">
                                <label className="radio-option">
                                    <Field type="radio" name="paymentType" value="card" />
                                    <span className="custom-radio"></span>
                                    Credit Card
                                </label>
                                <label className="radio-option">
                                    <Field type="radio" name="paymentType" value="cash" />
                                    <span className="custom-radio"></span>
                                    Cash on Delivery
                                </label>
                            </div>
                            <ErrorMessage name="paymentType" component="div" className="error" />
                        </div>
                        <button type="submit">Submit Order</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default OrderPage;