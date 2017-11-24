import * as types from '../action-types';
import {getShop,postOrderData} from '../../api/cart';
import {push} from 'react-router-redux';
export default {
    //无用户登录
    noUser(){
        return dispatch=>(
            dispatch(push('/login'))
        )
    },
    //购物渲染
    getShopping(username){
        return dispatch => {
            getShop(username).then(cartList => {
                dispatch(
                    {
                        type: types.SHOP_DATA,
                        payload: {cartList}
                    }
                )
            });
        }
    },
    //减少购物
    onSub(shop){
        return (dispatch, getState) => {
            console.log(shop,'xxxxx');
            console.log(shop.number,'dddd');
            if(shop.number<2){
                dispatch(
                    {
                        type: types.DEL_ONE_SHOP,
                        payload: shop
                    }
                )
            }
            dispatch(
                {
                    type: types.DEL_SHOP,
                    payload: {shop}
                }
            )
        }
    },
    //增加购物
    onPlus(shop){
        return (dispatch, getState) => {
            dispatch(
                {
                    type: types.ADD_SHOP,
                    payload: {shop}
                }
            )
        }
    },
    //选中购物
    checkShop(shop){
        return (dispatch, getState) => {
            dispatch(
                {
                    type: types.CHECK_SHOP,
                    payload: {shop}
                }
            )
        }
    },
    //删除购物
    delAllShop(){
        return (dispatch, getState) => {
            let data = getState().cart.shoppingCart;
            dispatch(
                {
                    type: types.DEL_ALL_SHOP,
                    payload: data
                }
            )
        }
    },
    //彻底删除某一项
  /*  delOneShop(data){
        return (dispatch, getState) => {
            dispatch(
                {
                    type: types.DEL_ONE_SHOP,
                    payload: data
                }
            )
        }
    },*/
    //计算总额
    totalCount(){
        return {
            type: types.COUNT_AMOUNT
        }
    },
    //数据传递
    dataTransfer(username){
        return (dispatch,getState) => {
            let data = getState().cart.shoppingCart;
            if(data.shopCount>0){
                postOrderData(data,username).then(payload => {
                    dispatch({
                        type: types.DATA_TRANSFER,
                        payload
                    });
                    dispatch(push('/confirmorder'))
                })
            }
        }
    }
}