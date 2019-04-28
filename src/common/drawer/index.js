import React, {PureComponent } from 'react';
import { connect } from 'react-redux';
import {actions} from '../store';
import { Drawer, Button } from 'antd';


class DrawerDemo extends PureComponent {
  render() {
    const {visible,childrenDrawer,showChildrenDrawerFs,closeChildrenDrawerFs,closeDrawer} = this.props;
    return (
      <div>
        <Drawer
          title="购物车"
          width={520}
          closable={false}
          onClose={closeDrawer}
          visible={visible}
        >
          <Button type="primary" onClick={showChildrenDrawerFs}>
            查看详情
          </Button>
          <Drawer
            title="Two-level Drawer"
            width={320}
            closable={false}
            onClose={closeChildrenDrawerFs}
            visible={childrenDrawer}
          >
            This is two-level drawer
          </Drawer>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={closeDrawer}
            >
              关闭
            </Button>
            <Button onClick={closeDrawer} type="primary">
              购买
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapState=(state)=>({
  childrenDrawer:state.getIn(['Header','childrenDrawer']),
  visible:state.getIn(['Header','visible']),

})
const mapDispatch=(dispatch)=>({
    closeDrawer(){
      dispatch(actions.closeDrawerAction())
    },
    showChildrenDrawerFs(){
      dispatch(actions.ShowChildrenAction())
    },
    closeChildrenDrawerFs(){
      dispatch(actions.CloseChildrenAction())
    }
})
export default connect(mapState,mapDispatch)(DrawerDemo);