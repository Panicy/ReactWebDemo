import  React,{ PureComponent } from 'react';
import { Modal,Radio ,Button } from 'antd';
import { connect } from 'react-redux';
import { actions } from '../store';
const RadioGroup = Radio.Group;
class Toast extends PureComponent{
    render(){
          const {handleOk, handleCancel,Toastvisible , ToastTitle,ToastconfirmLoading ,ScolorBtn,SmemoryBtn}=this.props;
            return (
            <div>
              <Modal
                title='选择规格'
                visible={Toastvisible}
                onOk={handleOk}
                confirmLoading={ToastconfirmLoading}
                onCancel={handleCancel}
                cancelText='取消'
                okText={ToastTitle}
                >
                  <RadioGroup name="radiogroup" defaultValue={'天空之境'} onChange={ScolorBtn}>
                    <Radio value={'天空之境'}>天空之境</Radio>
                    <Radio value={'亮黑色'}>亮黑色</Radio>
                    <Radio value={'极光色'}>极光色</Radio>
                    <Radio value={'赤茶橘'}>赤茶橘</Radio>
                    <Radio value={'珠光贝母'}>珠光贝母</Radio>
                  </RadioGroup>
                  <div className='ToastRadio'>
                      <RadioGroup name="radiogroup" defaultValue={'8+128'} onChange={SmemoryBtn}>
                        <Radio value={'8+128'}>8+128</Radio>
                        <Radio value={'8+256'}>8+256</Radio>
                        <Radio value={'8+512'}>8+512</Radio>
                      </RadioGroup>
                  </div>
                  <Button type="danger" >￥ 5488</Button>
                </Modal>
            </div>
            );
        }
    }

    const mapState=(state)=>({
      Toastvisible:state.getIn(['Pages','Toastvisible']),
      ToastTitle:state.getIn(['Pages','ToastTitle']),
      ToastconfirmLoading:state.getIn(['Pages','ToastconfirmLoading'])
    })
    const mapDispatch=(dispatch)=>({
      handleCancel(){
        console.log(actions.closeToastAction())
        dispatch(actions.closeToastAction())
      },
      handleOk(){
        console.log(666)
      },
      ScolorBtn(e){
        console.log(e.target.value)
      },
      SmemoryBtn(e){
        console.log(e.target.value)
      }

    })
    export default connect(mapState,mapDispatch)(Toast);