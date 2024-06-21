import { IGeneralDetails } from "./generalDetails";

export interface IUserData {
  id?: string;
  organization?: string;
  username?: string;
  email?: string;
  phoneNumber?: string | number;
  dateJoined?: string | Date;
  status?: TStatus;
  accountNumber?: string | number;
  tier?: string;
  bank?: string;
  generalDetails?: IGeneralDetails;
}

export type TStatus = "active" | "inactive" | "pending" | "blacklisted";
