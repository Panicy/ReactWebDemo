import React,{ PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { actions } from '../store';
import { connect } from 'react-redux';
import {
    Headerbox,
    AvatarDemo
} from './style';
import { Avatar,Input, Row, Col ,Icon} from 'antd';
const Search=Input.Search;
class Common extends PureComponent{
  
    render(){
        const { CarDemo ,upCarDemoFs} =this.props;
        return (
            <Headerbox>
                <Row>
                    <Col span={18} push={6}>
                    <Row type="flex" justify="end">
                            <Col span={2} >
                                <Link to='/'>
                                    <div>
                                        <Icon className='Icons' type="home" />
                                        首页{CarDemo}
                                    </div>
                                </Link>
                            </Col>
                        <Col span={2}>
                                <Icon className='Icons' type="border" />  
                                订单
                        </Col>
                        <Col span={2}>
                            <div onClick={upCarDemoFs} className={CarDemo?'carDemo carsy':'carsy'}>
                                <Icon className='Icons' type="shopping" />  
                                购物车
                            </div>
                        </Col>
                        <Col span={10}>
                            <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                            />
                        </Col>
                    </Row>
                    </Col>
                    <Col span={6} pull={18}>
                        <div className='Avatar'>
                            <Avatar className='AvatarImg' onClick={()=>{this.AvatarBtn(this.avatarimg)}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            <AvatarDemo ref={(img)=>this.avatarimg=img} >
                                <div className='AvatarDemoItem'>
                                    <Icon  className='caretIcon' type="caret-left" />
                                    <div>user</div>
                                    <div>收货地址</div>
                                    <div>退出登录</div>
                                </div>
                            </AvatarDemo>
                        </div>
                    </Col>
                </Row>
            </Headerbox>
        );
    }
    AvatarBtn(e){
        // 把不是数字的元素替换成空
        let Sc=e.style.transform.replace(/[^0-9]/ig,'');
        if(!Sc){
            e.style.transform='scale(1)';
        }else{
            Sc=parseInt(Sc,10);
            if(Sc===1){
                e.style.transform='scale(0)';
            }else{
                e.style.transform='scale(1)';
            }
        }
    }
}

const mapState=(state)=>({
    CarDemo:state.getIn(['Header','CarDemo'])
})
const mapDispatch=(dispatch)=>({
    upCarDemoFs(){
        dispatch(actions.upCarDemo())
    }
})

export default connect(mapState,mapDispatch)(Common);