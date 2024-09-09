"use client";

import React, { useEffect, useState } from "react";
import Items from "../../../../../../components/ui/previous-items/Items";
import { getItemsByBIZID } from "../../../../../../utils/previous-tems/fetch";

const PreviousItemspage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getItemsByBIZID(1);
      setData(result.result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="flex flex-col gap-2">
        <Items items={data} />
      </section>
    </div>
  );
};

export default PreviousItemspage;
