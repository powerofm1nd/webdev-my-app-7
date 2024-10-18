import { useParams } from "react-router-dom";
import { Col, Row, Image, Card, Space, Rate } from 'antd';

function Product({ products }) {
    const { id } = useParams();
    const currentProduct = products.find(p => p.id === parseInt(id));

    return (
        <>
            <Row>
                <Col span={8}>
                    <Image
                        src={currentProduct.src}
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        preview={{ minScale: 2, maxScale: 4, src: currentProduct.src }}
                    />
                </Col>
                <Col span={16} style={{ padding: "10px" }}>
                    <h1>{currentProduct.name}</h1>
                    <p style={{ textAlign: "justify", fontSize: "20px" }}>
                        {currentProduct.fullDescription}
                    </p>
                </Col>

                <Space direction="vertical" size="middle" style={{ display: 'flex', width: "100%", marginBottom: "20px" }}>
                    <Card title={currentProduct.name} size="small">
                        <p>{currentProduct.description}</p>
                        <Row>
                            <Col span={21}></Col>
                            <Col span={3}><Rate defaultValue={4} /></Col>
                        </Row>
                    </Card>
                </Space>

                <Space direction="vertical" size="middle" style={{ display: 'flex', width: "100%", marginBottom: "20px" }}>
                    <Card title="Last review" size="small">
                        <p>High quality product!!!</p>
                        <Row>
                            <Col span={21}></Col>
                            <Col span={3}><Rate defaultValue={3} /></Col>
                        </Row>
                    </Card>
                </Space>
            </Row>
        </>
    )
}

export default Product;