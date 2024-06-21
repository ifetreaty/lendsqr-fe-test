import { transformApiResponse } from "../helpers/transformApiResponse";
import { TGender } from "../types/generalDetails";
import { IUserData, TStatus } from "../types/userData";

const baseUrl = import.meta.env.VITE_APP_LENDSQR_API_BASE_URL;

export type TApiResponse = {
  id: string;
  organization: string;
  username: string;
  personal_email: string;
  phone_number: string | number;
  date_joined: string | Date;
  status: TStatus;
  full_name: string;
  bvn: number;
  gender: TGender;
  marital_status: string;
  children: string | number;
  residence_type: string;
  level_of_education: string;
  employment_status: string;
  employment_sector: string;
  employment_duration: string;
  office_email: string;
  monthly_income: string;
  loan_repayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantor_name: string;
  guarantor_phone: string;
  guarantor_email: string;
  relationship: string;
  user_tier: string;
  account_number: number;
  bank: string;
};

export const fetchUserData = async (): Promise<IUserData[]> => {
  try {
    const response = await fetch(
      `${baseUrl}/57321e4a-9dcd-4f0e-86a3-2bb715cdb0da`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data: TApiResponse[] = await response.json();
    return data.map(transformApiResponse);
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
