import { useState } from "react";
import useDashboardModel from "../model/useDashboardModel";
const useDashboardPresenter = async () => {
  const [loading, setLoading] = useState(false);
  const data = await useDashboardModel();
  const results = data?.results;

  return { results, loading, setLoading };
};

export default useDashboardPresenter;
