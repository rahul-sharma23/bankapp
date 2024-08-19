import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './transaction.reducer';

export const TransactionDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const transactionEntity = useAppSelector(state => state.transaction.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="transactionDetailsHeading">
          <Translate contentKey="bankuiApp.transaction.detail.title">Transaction</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{transactionEntity.id}</dd>
          <dt>
            <span id="amount">
              <Translate contentKey="bankuiApp.transaction.amount">Amount</Translate>
            </span>
          </dt>
          <dd>{transactionEntity.amount}</dd>
          <dt>
            <span id="transactionType">
              <Translate contentKey="bankuiApp.transaction.transactionType">Transaction Type</Translate>
            </span>
          </dt>
          <dd>{transactionEntity.transactionType}</dd>
          <dt>
            <span id="transactionDate">
              <Translate contentKey="bankuiApp.transaction.transactionDate">Transaction Date</Translate>
            </span>
          </dt>
          <dd>
            {transactionEntity.transactionDate ? (
              <TextFormat value={transactionEntity.transactionDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="description">
              <Translate contentKey="bankuiApp.transaction.description">Description</Translate>
            </span>
          </dt>
          <dd>{transactionEntity.description}</dd>
          <dt>
            <Translate contentKey="bankuiApp.transaction.relatedBankAccount">Related Bank Account</Translate>
          </dt>
          <dd>{transactionEntity.relatedBankAccount ? transactionEntity.relatedBankAccount.accountNumber : ''}</dd>
          <dt>
            <Translate contentKey="bankuiApp.transaction.bankAccount">Bank Account</Translate>
          </dt>
          <dd>{transactionEntity.bankAccount ? transactionEntity.bankAccount.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/transaction" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/transaction/${transactionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TransactionDetail;
