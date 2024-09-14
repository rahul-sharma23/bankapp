import './home.scss';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert, CardGroup, CardBody, CardImg, CardTitle, Card } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  console.log('account ', account);
  const navigate = useNavigate();

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
        {account?.login ? (
          <div>
            <h1 className="display-4">Hi, {account?.firstName}</h1>
            <p className="lead">Welcome Back.</p>
            <CardGroup>
              <Card onClick={() => navigate('/bank-account')}>
                <CardBody>
                  <CardTitle tag="h5">Account Summary</CardTitle>
                </CardBody>
              </Card>
              <Card onClick={() => navigate('/transaction')}>
                <CardBody>
                  <CardTitle tag="h5">Bank Statement</CardTitle>
                </CardBody>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card onClick={() => navigate('/branch')}>
                <CardBody>
                  <CardTitle tag="h5">Branches</CardTitle>
                </CardBody>
              </Card>
              <Card onClick={() => navigate('/customer')}>
                <CardBody>
                  <CardTitle tag="h5">Profile</CardTitle>
                </CardBody>
              </Card>
            </CardGroup>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate>

              <Link to="/login" className="alert-link">
                <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
              </Link>
              <Translate contentKey="global.messages.info.authenticated.suffix">
                , you can try the default accounts:
                <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
                <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
              </Translate>
            </Alert>

            <Alert color="warning">
              <Translate contentKey="global.messages.info.register.noaccount">You do not have an account yet?</Translate>&nbsp;
              <Link to="/account/register" className="alert-link">
                <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
              </Link>
            </Alert>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Home;
