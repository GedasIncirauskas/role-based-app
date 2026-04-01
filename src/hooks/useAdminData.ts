import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

export function useAdminData() {
  return useQuery({
    queryKey: ["admin-data"],
    queryFn: async () => {
      const res = await axios.get("/admin-only");
      return res.data;
    },
  });
}
