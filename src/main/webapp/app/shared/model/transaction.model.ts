import dayjs from 'dayjs';
import { IBankAccount } from 'app/shared/model/bank-account.model';
import { TransactionType } from 'app/shared/model/enumerations/transaction-type.model';

export interface ITransaction {
  id?: number;
  amount?: number;
  transactionType?: keyof typeof TransactionType;
  transactionDate?: dayjs.Dayjs;
  description?: string | null;
  relatedBankAccount?: IBankAccount | null;
  bankAccount?: IBankAccount | null;
}

export const defaultValue: Readonly<ITransaction> = {};
