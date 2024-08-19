import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { ICustomer } from 'app/shared/model/customer.model';
import { AccountType } from 'app/shared/model/enumerations/account-type.model';

export interface IBankAccount {
  id?: number;
  accountNumber?: string;
  accountType?: keyof typeof AccountType;
  balance?: number;
  createdDate?: dayjs.Dayjs;
  user?: IUser | null;
  customer?: ICustomer | null;
}

export const defaultValue: Readonly<IBankAccount> = {};
