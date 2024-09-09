import React from 'react';
import Table from "../../components/dashboard/table/table"
const Promotion = () => {
    return (
        <div>
            <Table table_title="Coupon Used" th1="Name" th2="sku" th3="discount price" th4="date"></Table>
        </div>
    );
};

export default Promotion;