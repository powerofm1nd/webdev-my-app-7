import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'

export default function ProductCard({ product, onSelect, onUnselect }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const check = () => {
      setChecked(true);
      onSelect(product)
    }

    product.check = check;

    return () => {
      product.Check = null;
    };
  }, [product]);


  function handleChange() {
    if (!checked) {
      onSelect(product);
    }
    else {
      onUnselect(product)
    }
    setChecked(!checked);
  }

  return (
    <Card style={{ width: '18rem', padding: '10px' }}>
      <Card.Img variant="top" src={product.src} />
      <Card.Body>
        <Card.Text>
          {product.description}
        </Card.Text>
        {/* Checkbox antd */}
        <Checkbox onChange={handleChange} checked={checked} style={{ marginBottom: "20px", color: "white" }}>Select product</Checkbox>
        
        <Link to={"/product/" + product.id} style={{ width: "100%" }}>
          <Button
            color="primary"
            size="large"
            variant="solid"
            style={{ width: "100%" }}
          >
            Open product
          </Button>
        </Link>


      </Card.Body>
    </Card>
  );
}