import CardGroup from 'react-bootstrap/CardGroup'
import { useCallback, useState } from 'react';
import { Badge, Row } from 'react-bootstrap';
import ProductCard from './ProductCard'
import { Button } from 'antd';

export default function MyProducts({ products }) 
{
  const [basket, setBasket] = useState(products)
  const selectedCount = basket.filter((obj) => obj.checked === true).length;
  const [checkBoxes, setCheckBoxes] = useState([]) 

  const handleSelectionProduct= useCallback((product) => {
    const currentBasket = basket.slice();
    currentBasket.find(g => g.id === product.id).checked = true;
    setBasket(currentBasket);
    console.log(basket);
  }, []);

  const handleUnselectionProduct = useCallback((product) => {
    const currentBasket = basket.slice();
    currentBasket.find(g => g.id === product.id).checked = false;
    setBasket(currentBasket);
    console.log(basket);
  }, []);

  function selectAll()
  {
    basket.forEach(product => {
      product.check()
    });
  }

  return (
    <>
    <CardGroup>
      {
        products?.map((product, i) => {
          return (<ProductCard product={product} key={i} onSelect={handleSelectionProduct} onUnselect={handleUnselectionProduct} setCheckBox={setCheckBoxes}/>);
        })
      }
    </CardGroup>
    <Button onClick={selectAll} type="primary" size='large' style={{ width: "100%", marginTop: "10px" }}>Select All</Button>
    <Row style={{ padding: '15px' }}><Badge >Selected: {selectedCount}</Badge></Row>
    </>
  );
}