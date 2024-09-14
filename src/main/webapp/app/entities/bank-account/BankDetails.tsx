import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate } from 'react-jhipster';

const BankAccountDetails = ({ account }: any) => {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <Card>
        <CardBody>
          <div className="d-flex justify-content-between mb-3">
            <Button color="secondary" onClick={() => navigate('/bank-account')}>
              <FontAwesomeIcon icon="arrow-left" />{' '}
              <span className="d-none d-md-inline">
                <Translate contentKey="entity.action.back">Back</Translate>
              </span>
            </Button>
            <Button color="primary" onClick={() => navigate(`/bank-account/${account.id}/edit`)}>
              <FontAwesomeIcon icon="pencil-alt" />{' '}
              <span className="d-none d-md-inline">
                <Translate contentKey="entity.action.edit">Edit</Translate>
              </span>
            </Button>
          </div>
          <CardTitle tag="h5">Bank Account Details</CardTitle>
          <CardText>
            <strong>ID:</strong> {account.id}
          </CardText>
          <CardText>
            <strong>Account Number:</strong> {account.accountNumber}
          </CardText>
          <CardText>
            <strong>Account Type:</strong> {account.accountType}
          </CardText>
          <CardText>
            <strong>Balance:</strong> {account.balance}
          </CardText>
          <CardText>
            <strong>Created Date:</strong> {account.createdDate}
          </CardText>
          <CardText>
            <strong>User:</strong> {account.user ? account.user.login : ''}
          </CardText>
          <CardText>
            <strong>Customer:</strong> {account.customer ? account.customer?.id : ''}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default BankAccountDetails;
