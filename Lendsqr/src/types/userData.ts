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

type TStatus = "active" | "inactive" | "pending" | "blacklisted";
