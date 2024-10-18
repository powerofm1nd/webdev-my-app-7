import { Col, Row, Image, Card, Space, Rate, Button } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

function Profile() {
    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={16}>
                <Col span={6}>
                    <Card
                        bordered={false}
                        cover={<Image src="https://placehold.jp/3d4070/ffffff/300x300.png" />}
                        style={{ width: '100%' }}
                    >
                        <Card.Meta
                            avatar={<UserOutlined style={{ fontSize: '54px', color: '#1890ff' }} />}
                            title="Bob Pumpkin"
                            description="Regular Customer"
                        />

                        <Space direction="vertical" style={{ width: '100%', marginTop: '15px' }}>
                            <p><MailOutlined /> bob.pumpkin@example.com</p>
                            <p><PhoneOutlined /> +1 234 567 890</p>
                            <Rate defaultValue={4} />
                        </Space>
                    </Card>
                </Col>

                <Col span={18}>
                    <Card title="About" bordered={false}>
                        <p>
                            Hello! I'm Bob, a loyal customer who loves buying sunflower seeds from your shop.
                            I've been purchasing them regularly because of the quality and freshness you provide. 
                            I enjoy snacking on them, and they're perfect for my healthy lifestyle. 
                            Your shop always has the best variety, and I appreciate the excellent customer service. 
                            Looking forward to my next order!
                        </p>
                        <Button type="primary" style={{ marginTop: '20px' }} block>Edit Profile</Button>
                    </Card>

                    <Card title="Favorite Seeds & Snacks" bordered={false} style={{ marginTop: '20px' }}>
                        <Space direction="horizontal">
                            <Button type="default">Roasted Sunflower Seeds</Button>
                            <Button type="default">Raw Sunflower Seeds</Button>
                            <Button type="default">Flavored Sunflower Seeds</Button>
                            <Button type="default">Sunflower Seed Butter</Button>
                            <Button type="default">Healthy Snacks</Button>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Profile;
