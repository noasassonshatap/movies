import { UseQueryResult, useQuery } from "react-query";
import axiosInstance from "../../../utils/axiosInstance";
import { AxiosResponse } from "axios";
import { UserData } from "../types/userData";

const fetchUserData = async (id: string) => {
  try {
    const url: string = `account/${id}`;
    const response: AxiosResponse<UserData> = await axiosInstance.get<UserData>(
      url
    );
    const userData = response.data ?? ({} as UserData);
    return userData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Error fetching user ${id}`);
  }
};

export const useUserData = (id: string): UseQueryResult<UserData, Error> => {
  const userData: UseQueryResult<UserData, Error> = useQuery(
    ["getUsers", id],
    () => fetchUserData(id)
  );
  return userData;
};
