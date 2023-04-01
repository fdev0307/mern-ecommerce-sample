import {
  Box,
  Column,
  FooterLink,
  Social,
  OuterCardStyle,
  SubContainerStyle,
  SubInputStyle,
  SubButtonStyle
} from "./style";
import { Col, Container, Row } from "react-bootstrap";
import SubscribeCard from "react-subscribe-card";
import {
  PhoneFill,
  EnvelopeFill,
  GeoAltFill,
  Facebook,
  Instagram,
  Twitter
} from "react-bootstrap-icons";
import "../../style.css";

function Footer() {
  const mailchimpURL = `[Your Mailchimp subscription URL]`;

  return (
    <Box>
      <Container>
        <Row>
          <Col>
            <div>
              <h6 className="mb-4">SIGN UP FOR MY NEWSLETTER</h6>
              <SubscribeCard
                mailchimpURL={mailchimpURL}
                outerCardStyle={OuterCardStyle}
                subContainerStyle={SubContainerStyle}
                subInputStyle={SubInputStyle}
                subButtonStyle={SubButtonStyle}
              />
              <FooterLink href="/">
                <Social className="me-3">
                  <Facebook></Facebook>
                </Social>
              </FooterLink>
              <FooterLink href="/">
                <Social className="me-3">
                  <Instagram></Instagram>
                </Social>
              </FooterLink>
              <FooterLink href="/">
                <Social className="me-3">
                  <Twitter></Twitter>
                </Social>
              </FooterLink>
            </div>
          </Col>
          <Col>
            <h6 className="mb-4">Pages</h6>
            <Column>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/">About</FooterLink>
              <FooterLink href="/">Women</FooterLink>
              <FooterLink href="/">Men</FooterLink>
              <FooterLink href="/">Accessories</FooterLink>
              <FooterLink href="/">Contact</FooterLink>
            </Column>
            <Column>
              <FooterLink></FooterLink>
              <FooterLink></FooterLink>
              <FooterLink></FooterLink>
            </Column>
          </Col>
          <Col>
            <h6 className="mb-4">CONTACT US</h6>
            <Column>
              <FooterLink>
                <GeoAltFill className="me-2"></GeoAltFill>
                11 Jimmy oche str.Lagos.
              </FooterLink>
              <FooterLink>
                <EnvelopeFill className="me-2"></EnvelopeFill>
                sam_ug@yahoo.com
              </FooterLink>
              <FooterLink>
                <PhoneFill className="me-2"></PhoneFill>
                09070314423
              </FooterLink>
            </Column>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer;
