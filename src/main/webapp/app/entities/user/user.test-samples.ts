import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 23112,
  login: 'M7v4xV@E\\"as21\\dE\\2raxWy\\|Xt\\ma5N',
};

export const sampleWithPartialData: IUser = {
  id: 24042,
  login: "u0HG4`@uorHpr\\NT\\Un7TmUh\\'U\\?R6XL6\\+nUm5Ms",
};

export const sampleWithFullData: IUser = {
  id: 25933,
  login: 'B~OnY@Y\\5XaUXn\\OOQv',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
