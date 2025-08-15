export type User = {
  id: string;
  fullName: string;
  email: string;
  role: "USER" | "ADMIN";
};

export type Entrie = {
  id: string;
  item: string;
  userId: User["id"];
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
};
