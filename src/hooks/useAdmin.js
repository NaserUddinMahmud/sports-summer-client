import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAdmin = () => {
  const { user, isLoading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !isLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
    //   console.log("admin res", res);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
