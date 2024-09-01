import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './branch.reducer';

export const BranchDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const branchEntity = useAppSelector(state => state.branch.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="branchDetailsHeading">
          <Translate contentKey="bankuiApp.branch.detail.title">Branch</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{branchEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="bankuiApp.branch.name">Name</Translate>
            </span>
          </dt>
          <dd>{branchEntity.name}</dd>
          <dd>{branchEntity.ifsc}</dd>
          <dt>
            <span id="address">
              <Translate contentKey="bankuiApp.branch.address">Address</Translate>
            </span>
          </dt>
          <dd>{branchEntity.address}</dd>
          <dt>
            <span id="city">
              <Translate contentKey="bankuiApp.branch.city">City</Translate>
            </span>
          </dt>
          <dd>{branchEntity.city}</dd>
          <dt>
            <span id="state">
              <Translate contentKey="bankuiApp.branch.state">State</Translate>
            </span>
          </dt>
          <dd>{branchEntity.state}</dd>
          <dt>
            <span id="zipCode">
              <Translate contentKey="bankuiApp.branch.zipCode">Zip Code</Translate>
            </span>
          </dt>
          <dd>{branchEntity.zipCode}</dd>
        </dl>
        <Button tag={Link} to="/branch" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/branch/${branchEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default BranchDetail;
