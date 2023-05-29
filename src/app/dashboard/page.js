import Table from "../components/Table";
import TableNavbar from "./TableNavbar";

export default async function DashboardPage() {
  return (
    <main>
      <TableNavbar />
      <Table />
    </main>
  );
}
