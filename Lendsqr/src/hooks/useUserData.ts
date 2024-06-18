import { useEffect, useState } from "react";
import { IUserData } from "../types/userData";
import { fetchUserData } from "../services/userService";

export default function useUserData() {
  const [userData, setUserData] = useState<IUserData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { userData, error, loading };
}
