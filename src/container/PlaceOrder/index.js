/**
 * Created by zhaoyingying on 2017/11/23.
 */
import React,{Component} from 'react';
import HeaderMy from "../../components/Header/index";
import './index.less'
import {connect} from 'react-redux'
import {post} from '../../api/index'
import actions from '../../store/action/order'
class PlaceOrder extends Component{
    confirmpay=()=>{
        this.props.sendPaid(this.props.user.usertel);
    }
    render(){
        return (
            <div className="place-order">
                <HeaderMy title="订单支付"/>
                    <p className="prompt">请在下单后15分钟内完成支付，否则订单将失效</p>
                    <div className="order-fig">
                        <p>订单编号：{this.props.orderList.serial}</p>
                        <p>订单金额：{parseFloat(this.props.orderList.total).toFixed(2)}</p>
                    </div>
                    <div className="need">还需支付：<span>{parseFloat(this.props.orderList.total).toFixed(2)}元</span></div>
                    <div className="pay-style">
                        <div className="left">
                            <i className="iconfont icon-meitongqia"></i>
                            <div>
                                <p>美通卡支付</p>
                                <p>问绑定美通卡</p>
                            </div>
                        </div>
                        <i className="iconfont icon-yuanquan"></i>
                    </div>
                    <div className="pay-style">
                        <div className="left">
                            <i className="iconfont icon-alipay i1"></i>
                            <div > 
                                <p>支付宝</p>
                                <p>推荐有支付宝账户的用户使用</p>
                            </div>
                        </div>
                        <i className="iconfont icon-yuanquan"></i>
                    </div>
                    <div className="pay-style">
                        <div className="left">
                            <i className="iconfont icon-weixin i2"></i>
                            <div>
                                <p>微信支付</p>
                                <p>推荐安装微信5.0及以上版本的用户使用</p>
                            </div>
                        </div>
                        <i className="iconfont icon-duihao1"></i>
                    </div>
                    <div className="confirm-pay" onClick={this.confirmpay}>确认支付</div>
            </div>
        )
    }
}
export default connect(state=>({orderList:state.myOrder.orderList,user:state.session.user}),actions)(PlaceOrder);