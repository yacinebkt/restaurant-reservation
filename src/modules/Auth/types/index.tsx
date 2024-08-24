export interface User {
  id: string;
  role: number;
  permissions?: string[];
  sub?: string;
}
