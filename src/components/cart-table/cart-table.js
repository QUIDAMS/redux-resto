import React from 'react';
import {connect} from 'react-redux';
import {deleteFormCart} from '../../actions';

import './cart-table.scss';

const CartTable = ({items, deleteFormCart}) => {
    
    return (
        <React.Fragment>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFormCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
               
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = ({items})=> {
    return {items}
};

const mapDispachToProps = {
    deleteFormCart
};

export default connect(mapStateToProps, mapDispachToProps)(CartTable);

