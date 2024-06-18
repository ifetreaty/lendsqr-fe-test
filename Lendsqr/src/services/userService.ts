import { formatDate } from "../helpers/utilityFunctions";
import { IGeneralDetails } from "../types/generalDetails";
import { IUserData, TStatus } from "../types/userData";

const baseUrl = import.meta.env.VITE_APP_LENDSQR_API_BASE_URL;

type TApiResponse = {
  organization: string;
  username: string;
  personal_email: string;
  phone_number: string | number;
  date_joined: string | Date;
  status: TStatus;
  general_details?: IGeneralDetails;
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

    const userData: IUserData[] = data.map((item) => ({
      organization: item.organization,
      username: item.username,
      email: item.personal_email,
      phoneNumber: item.phone_number,
      dateJoined: item.date_joined ? formatDate(item.date_joined) : "",
      status: item.status,
      generalDetails: item.general_details,
    }));

    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
