import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './customer.reducer';

export const CustomerDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const customerEntity = useAppSelector(state => state.customer.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="customerDetailsHeading">
          <Translate contentKey="bankuiApp.customer.detail.title">Customer</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{customerEntity.id}</dd>
          <dt>
            <span id="firstName">
              <Translate contentKey="bankuiApp.customer.firstName">First Name</Translate>
            </span>
          </dt>
          <dd>{customerEntity.firstName}</dd>
          <dt>
            <span id="lastName">
              <Translate contentKey="bankuiApp.customer.lastName">Last Name</Translate>
            </span>
          </dt>
          <dd>{customerEntity.lastName}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="bankuiApp.customer.email">Email</Translate>
            </span>
          </dt>
          <dd>{customerEntity.email}</dd>
          <dt>
            <span id="phoneNumber">
              <Translate contentKey="bankuiApp.customer.phoneNumber">Phone Number</Translate>
            </span>
          </dt>
          <dd>{customerEntity.phoneNumber}</dd>
          <dt>
            <span id="address">
              <Translate contentKey="bankuiApp.customer.address">Address</Translate>
            </span>
          </dt>
          <dd>{customerEntity.address}</dd>
          <dt>
            <span id="city">
              <Translate contentKey="bankuiApp.customer.city">City</Translate>
            </span>
          </dt>
          <dd>{customerEntity.city}</dd>
          <dt>
            <span id="state">
              <Translate contentKey="bankuiApp.customer.state">State</Translate>
            </span>
          </dt>
          <dd>{customerEntity.state}</dd>
          <dt>
            <span id="zipCode">
              <Translate contentKey="bankuiApp.customer.zipCode">Zip Code</Translate>
            </span>
          </dt>
          <dd>{customerEntity.zipCode}</dd>
          <dt>
            <span id="dateOfBirth">
              <Translate contentKey="bankuiApp.customer.dateOfBirth">Date Of Birth</Translate>
            </span>
          </dt>
          <dd>
            {customerEntity.dateOfBirth ? (
              <TextFormat value={customerEntity.dateOfBirth} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <Translate contentKey="bankuiApp.customer.homeBranch">Home Branch</Translate>
          </dt>
          <dd>{customerEntity.homeBranch ? customerEntity.homeBranch.name : ''}</dd>
          <dt>
            <Translate contentKey="bankuiApp.customer.associatedBranch">Associated Branch</Translate>
          </dt>
          <dd>{customerEntity.associatedBranch ? customerEntity.associatedBranch.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/customer" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/customer/${customerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CustomerDetail;
