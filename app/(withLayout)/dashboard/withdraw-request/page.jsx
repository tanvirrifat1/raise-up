import Table from "../../../../components/dashboard/table/table";

const WithdrawRequest = () => {
  const tablesData = [
    {
      id: 1,
      name: "Taki",
      balance: "2000",
      withdraw: 1200,
      date: "21.Feb.2024",
    },
    {
      id: 2,
      name: "Safi",
      balance: "2000",
      withdraw: 1200,
      date: "21.Feb.2024",
    },
    {
      id: 3,
      name: "Samiul",
      balance: "2000",
      withdraw: 1200,
      date: "21.Feb.2024",
    },
    {
      id: 4,
      name: "Taki",
      balance: "2000",
      withdraw: 1200,
      date: "21.Feb.2024",
    },
    {
      id: 4,
      name: "Taki",
      balance: "2000",
      withdraw: 1200,
      date: "21.Feb.2024",
    },
    {
      id: 4,
      name: "Taki",
      balance: "2000",
      withdraw: 1200,
      date: "21.Feb.2024",
    },
    {
      id: 4,
      name: "Taki",
      balance: "2000",
      withdraw: 1200,
      date: "21.Feb.2024",
    },
    {
      id: 4,
      name: "Taki",
      balance: "2000",
      withdraw: 1200,
      date: "21.Feb.2024",
    },
    {
      id: 4,
      name: "Taki",
      balance: "2000",
      withdraw: 1200,
      date: "21.Feb.2024",
    },
  ];
  return (
    <div className="w-full my-10">
      <Table
        table_title="Affiliate  Withdraw"
        th1="Name"
        th2="Balance"
        th3="withdraw"
        th4="Date"
        tablesData={tablesData}
      ></Table>
    </div>
  );
};

export default WithdrawRequest;
