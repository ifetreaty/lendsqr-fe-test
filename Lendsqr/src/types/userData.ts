import { IGeneralDetails } from "./generalDetails";

export interface IUserData {
  organization?: string;
  username?: string;
  email?: string;
  phoneNumber?: string | number;
  dateJoined?: string | Date;
  status?: TStatus;
  generalDetails?: IGeneralDetails;
}

export type TStatus = "active" | "inactive" | "pending" | "blacklisted";
