import useDashboardModel from "./model/useDashboardModel";
import useDashboardPresenter from "./presenter/useDashboardPresenter";
import DashboardView from "./view/DashboardView";

export default async function DashBoard() {
  const { results } = await useDashboardModel();
  return <DashboardView results={results} />;
}
