export interface IBranch {
  id?: number;
  name?: string;
  ifsc?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export const defaultValue: Readonly<IBranch> = {};
