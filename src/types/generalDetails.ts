export interface IPersonalInformation {
  fullName?: string;
  phoneNumber?: string | number;
  email?: string;
  bvn?: number;
  gender?: TGender;
  maritalStatus?: string;
  children?: string | number;
  residenceType?: string;
}

export type TGender = "male" | "female";

export interface IEmploymentData {
  educationLevel?: string;
  employmentStatus?: string;
  employmentSector?: string;
  employmentDuration?: string;
  officeEmail?: string;
  monthlyIncome?: string;
  loanRepayment?: string;
}

export interface ISocialsData {
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

export interface IGuarantorInformation {
  fullName?: string;
  phoneNumber?: string | number;
  email?: string;
  relationship?: string;
}

export interface IGeneralDetails {
  personalInformation?: IPersonalInformation;
  educationAndEmployment?: IEmploymentData;
  socialsData?: ISocialsData;
  guarantorInformation?: IGuarantorInformation;
}

export type TDetailsData =
  | IPersonalInformation
  | IEmploymentData
  | ISocialsData
  | IGuarantorInformation;
