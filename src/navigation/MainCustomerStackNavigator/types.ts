import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IData, IList } from '../../types/IData';
import { MainCustomerRoutes } from './routes';

export type MainCustomerStackParamList = {
  [MainCustomerRoutes.Week]: IData | IList | undefined;
  [MainCustomerRoutes.Home]: IData | IList;

};

export type MainCustomerScreenProps<T extends MainCustomerRoutes> =
  NativeStackScreenProps<MainCustomerStackParamList, T>;
