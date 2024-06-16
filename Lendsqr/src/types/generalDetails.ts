interface IPersonalInformation {
  fullName?: string;
  phoneNumber?: string | number;
  email?: string;
  bvn?: number;
  gender?: TGender;
  maritalStatus?: string;
  children?: string | number;
  residenceType?: string;
}

type TGender = "male" | "female";

interface IEmploymentData {
  educationLevel?: string;
  employmentStatus?: string;
  employmentSector?: string;
  employmentDuration?: string;
  officeEmail?: string;
  monthlyIncome?: string;
  loanRepayment?: string;
}

interface ISocialsData {
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

interface IGuarantorInformation {
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
