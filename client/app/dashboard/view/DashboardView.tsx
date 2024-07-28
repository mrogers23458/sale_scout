"use client";
import useDashboardPresenter from "../presenter/useDashboardPresenter";

export default function DashboardView() {
  const { loading, setLoading, data } = useDashboardPresenter();
  console.log(data);
  return <div style={{ color: "white" }}>VIEW</div>;
}
