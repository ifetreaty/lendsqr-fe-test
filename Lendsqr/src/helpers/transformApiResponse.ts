import { TApiResponse } from "../services/userService";
import { IUserData } from "../types/userData";
import { formatDate } from "./utilityFunctions";

export const transformApiResponse = (item: TApiResponse): IUserData => ({
  id: item.id,
  organization: item.organization,
  username: item.username,
  email: item.personal_email,
  phoneNumber: item.phone_number,
  dateJoined: item.date_joined ? formatDate(item.date_joined) : "",
  status: item.status,
  generalDetails: {
    personalInformation: {
      fullName: item.full_name,
      phoneNumber: item.phone_number,
      email: item.personal_email,
      bvn: item.bvn,
      gender: item.gender,
      maritalStatus: item.marital_status,
      children: item.children,
      residenceType: item.residence_type,
    },
    educationAndEmployment: {
      educationLevel: item.level_of_education,
      employmentStatus: item.employment_status,
      employmentSector: item.employment_sector,
      employmentDuration: item.employment_duration,
      officeEmail: item.office_email,
      monthlyIncome: item.monthly_income,
      loanRepayment: item.loan_repayment,
    },
    socialsData: {
      twitter: item.twitter,
      facebook: item.facebook,
      instagram: item.instagram,
    },
    guarantorInformation: {
      fullName: item.guarantor_name,
      phoneNumber: item.guarantor_phone,
      email: item.guarantor_email,
      relationship: item.relationship,
    },
  },
});
