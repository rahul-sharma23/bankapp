import dayjs from 'dayjs';
import { IBranch } from 'app/shared/model/branch.model';

export interface ICustomer {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string | null;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  dateOfBirth?: dayjs.Dayjs;
  homeBranch?: IBranch | null;
  associatedBranch?: IBranch | null;
}

export const defaultValue: Readonly<ICustomer> = {};
