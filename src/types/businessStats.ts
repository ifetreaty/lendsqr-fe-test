export interface IBusinessStats {
  totalUsers: number;
  activeUsers: number;
  usersWithLoans: number;
  usersWithSavings: number;
}

export const defaultUserStats: IBusinessStats = {
  totalUsers: 0,
  activeUsers: 0,
  usersWithLoans: 0,
  usersWithSavings: 0,
};
