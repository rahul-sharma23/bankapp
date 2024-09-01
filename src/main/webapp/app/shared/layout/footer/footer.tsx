import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row, Container } from 'reactstrap';

const Footer = () => (
  <div className="footer page-content">
    <Row>
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md="4">
              <h5>About Us</h5>
              <p>We are a company dedicated to providing the best products and services to our customers.</p>
            </Col>
            <Col md="4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-light">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-light">
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col md="4">
              <h5>Contact Us</h5>
              <p>Email: info@company.com</p>
              <p>Phone: +1 234 567 890</p>
              <p>Address: 123 Street Name, City, Country</p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md="12" className="text-center">
              <p>&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Row>
  </div>
);

export default Footer;
