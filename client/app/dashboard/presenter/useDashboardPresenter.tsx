import { useState } from "react";
import useDashboardModel from "../model/useDashboardModel";
const useDashboardPresenter = () => {
  const [loading, setLoading] = useState(false);
  const data = useDashboardModel();

  return { data, loading, setLoading };
};

export default useDashboardPresenter;
