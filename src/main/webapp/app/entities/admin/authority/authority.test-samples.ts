import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '835b0eb4-81ff-462b-a836-1d0e0dd5c7e5',
};

export const sampleWithPartialData: IAuthority = {
  name: '322c5e61-4070-4614-b6bc-5701b5be6335',
};

export const sampleWithFullData: IAuthority = {
  name: '0318360b-d4f4-4a4d-9a5f-41a484b98f21',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
