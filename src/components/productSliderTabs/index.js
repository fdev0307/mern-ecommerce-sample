import Tabs from "react-bootstrap/Tabs";
import { Tab, TabContent, Container } from "react-bootstrap";
import ProductCard from "../productSlider";
import latestPro from "../../services/latestProducts";
import specialPro from "../../services/specialProducts";
import bestPro from "../../services/bestProducts";
import offersPro from "../../services/offersProducts";
import "./style.css";
import React from "react";


function ProductTabs(props) {

  const [key, setKey] = React.useState('offers');

  return (
    <div className="productTabs">
        <Container>
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        id="controlled-tab-example"
        className="mb-3 ms-4"
      >
         <Tab eventKey="offers" title="Offers">
          <TabContent>
            <ProductCard slides={offersPro}/>
          </TabContent>
        </Tab>
        <Tab eventKey="latest" title="Latest Products">
          <TabContent>
            <ProductCard slides={latestPro} />
          </TabContent>
        </Tab>
        <Tab eventKey="special" title="Special Products">
          <TabContent>
            <ProductCard slides={specialPro}/>
          </TabContent>
        </Tab>
        <Tab eventKey="best" title="BestSeller Products">
          <TabContent>
            <ProductCard slides={bestPro}/>
          </TabContent>
        </Tab>
      </Tabs>
      </Container>
    </div>
  );
}

export default ProductTabs;
