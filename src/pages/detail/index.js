import React,{ PureComponent } from 'react';
import Toast from '../toast';
import { actions } from '../store';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import { Icon ,Col,Row,Button} from 'antd';
import {
    DetailDemo,
    BackTitle
} from './style';
class Detail extends PureComponent{
    render(){
        const { carToastBtn, GoToastBtn} =this.props
        return (
            <DetailDemo>
                <BackTitle>
                    <Row>
                        <Col span={1} offset={1}>
                            <Link to='/'>
                                <div className='DetailIcon'>
                                    <Icon style={{ fontSize: '18px',color:'white'}} type="arrow-left" />
                                </div>
                            </Link>
                        </Col>
                        <Col  span={1}>
                            <Link to='/'>
                                <div className='DetailText'> 返回</div>
                            </Link>
                        </Col>
                        <Col span={2} offset={16}>
                            <Button onClick={()=>carToastBtn('购物车')}>加入购物车</Button>
                        </Col>
                        <Col span={2}>
                            <Button onClick={()=>GoToastBtn('立即购买')} type="primary">立即购买</Button>
                        </Col>
                    </Row>
                </BackTitle>
                <Toast />
            </DetailDemo>
        )
    }
    componentDidMount(){
        window.scrollTo(0,0)
      }
    
}

const mapState=(state)=>({
  
    
})
const mapDispatch=(dispatch)=>({
    carToastBtn(data){
        dispatch(actions.showToastAction(data));
    },
    GoToastBtn(data){
        dispatch(actions.showToastAction(data));
    }
})
export default connect(mapState,mapDispatch )(Detail);