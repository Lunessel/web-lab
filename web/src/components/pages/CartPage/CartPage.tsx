import React, {FC, useEffect} from 'react';
import './CartPage.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, getCarts, RootState} from "../../../store";
import {Link} from "react-router-dom";
import {timeSince} from "../../../utils/common";
import CartServices from "../../../services/CartServices";
const CartPage: FC = () => {
    const {
        carts
    } = useSelector((state: RootState) => state.cartsReducer)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getCarts()).then();
    }, [dispatch]);

    const handleCartDelete = async (e: React.MouseEvent<HTMLButtonElement>, item_index: number) => {
        e.preventDefault()
        CartServices.deleteCart(item_index).then(() => dispatch(getCarts()));
    }

    return (
        <>
            <section className='cart'>
                {carts?.length!==0&&<h1>Your selected doctors:</h1>}
                {carts?.length===0&&<h1>No doctors is selected</h1>}
                <br/>
                <div className='carts-wrapper'>
                    {carts?.map((cart) => {
                        return (
                            <div className="item" key={cart.id}>
                                <Link to={`/catalog/${cart.id}`} className="avatar"
                                      style={{backgroundImage: `url(${cart.doctor.picture})`}}
                                ></Link>
                                <div className="info">
                                    <h3 className="h3">{cart.doctor.name}</h3>
                                    <h4 className="h6">{cart.doctor.description}</h4>
                                    <h5 className="h5">{timeSince(cart.doctor.updated_at)}</h5>
                                    <h6 className="h6">{cart.doctor.price} $</h6>
                                    <h6 className="h6">Type: {cart.doctor_type}</h6>
                                    <h6 className="h6">Quantity: {cart.quantity}</h6>
                                </div>
                                <div className="manage">
                                    <button onClick={(e) => handleCartDelete(e, cart.id)}
                                            className="remove-doctor">Remove
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <br/>
                {carts?.length!==0&&<Link to="/order" className="blue-btn" style={{margin: '10px auto'}}>Order</Link>}
            </section>
        </>
    );
};

export default CartPage;