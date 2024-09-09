import Table from "../../components/dashboard/table/table"

const AffiliatePortal = () => {
    const tablesData = [
        {
            id: 1,
            name: "Taki",
            progress: "10%",
            quantity: "15",
            date: "21.Feb.2024"
        },
        {
            id: 2,
            name: "Safi",
            progress: "10%",
            quantity: "15",
            date: "21.Feb.2024"
        }
    ];
    const data = [
        {
            id: 1,
            name: "Taki",
            affiliateId: "4523",
            domain: "sample1.com",
            status: "status"
        },
        {
            id: 2,
            name: "Safi",
            affiliateId: "4523",
            domain: "sample2.com",
            status: "status"
        }
    ];
    return (
        <div className="space-y-5">
            <Table table_title="Affiliate Sale" th1="Name" th2="progress" th3="quantity" th4="date" tablesData={tablesData}></Table>
            <Table table_title="Affiliate Sale" th1="name" th2="affiliate id" th3="domain" th4="view status" tablesData={data} ></Table>
        </div>
    );
};

export default AffiliatePortal;