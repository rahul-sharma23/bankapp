import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import BankAccount from './bank-account';
import Transaction from './transaction';
import Branch from './branch';
import Customer from './customer';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="bank-account/*" element={<BankAccount />} />
        <Route path="transaction/*" element={<Transaction />} />
        <Route path="branch/*" element={<Branch />} />
        <Route path="customer/*" element={<Customer />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
