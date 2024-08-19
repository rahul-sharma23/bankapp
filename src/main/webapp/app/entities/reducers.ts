import bankAccount from 'app/entities/bank-account/bank-account.reducer';
import transaction from 'app/entities/transaction/transaction.reducer';
import branch from 'app/entities/branch/branch.reducer';
import customer from 'app/entities/customer/customer.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  bankAccount,
  transaction,
  branch,
  customer,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
