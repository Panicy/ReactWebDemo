import React ,{ PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Card ,Col} from 'antd';

const { Meta } = Card;
class Home extends PureComponent{
 
  render() {
    return (
      <div className='HomeDemo'>
        < Col className='box' span={18} offset={3} >
                <Card

                  title="热门手机"
                  extra={<a href="#"></a>}
                  >
                  <div className='Rowitem'>
                    <Col className='RowitemDemo' span={5}>
                      <Link to='/Detail'>
                        <Card
                          hoverable
                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                          <Meta
                            title="Europe Street beat"
                            description="www.instagram.com"
                          />
                        </Card>   
                      </Link>  
                    </Col> 
                    <Col className='RowitemDemo' span={5}>
                      <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                      >
                        <Meta
                          title="Europe Street beat"
                          description="www.instagram.com"
                        />
                      </Card>     
                    </Col>   
                    <Col className='RowitemDemo' span={5}>
                      <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                      >
                        <Meta
                          title="Europe Street beat"
                          description="www.instagram.com"
                        />
                      </Card>     
                    </Col>   
                    <Col className='RowitemDemo' span={5}>
                      <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                      >
                        <Meta
                          title="Europe Street beat"
                          description="www.instagram.com"
                        />
                      </Card>     
                    </Col>   
                    <Col className='RowitemDemo' span={5}>
                      <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                      >
                        <Meta
                          title="Europe Street beat"
                          description="www.instagram.com"
                        />
                      </Card>     
                    </Col>   
                    <Col className='RowitemDemo' span={5}>
                      <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                      >
                        <Meta
                          title="Europe Street beat"
                          description="www.instagram.com"
                        />
                      </Card>     
                    </Col>     
                    <Col className='RowitemDemo' span={5}>
                      <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                      >
                        <Meta
                          title="Europe Street beat"
                          description="www.instagram.com"
                        />
                      </Card>     
                    </Col>   
                    <Col className='RowitemDemo' span={5}>
                      <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                      >
                        <Meta
                          title="Europe Street beat"
                          description="www.instagram.com"
                        />
                      </Card>     
                    </Col>    
                </div>
                </Card>
          </Col>
    </div> 
    );
  }
}


export default Home;