type Product = {
  xitemid: number;
  ztime: string;
  bizid: number;
  xitemcode: string;
  xdesc: string;
  xlongdesc: string;
  xcat: string;
  xtype: string;
  xbrand: string;
  ximage: string;
  ximage_details: string;
  xgitem: string;
  xcitem: string;
  xsupport: string;
  xsup: string;
  xuitpur: string;
  xuitsale: string;
  xunitstk: string;
  xconversionstk: number;
  xconversionsell: number;
  xmandatorybatch: string;
  xserialconf: string;
  xtypestk: string;
  xreorder: number;
  xcur: string;
  xpricepur: number;
  xstdcost: number;
  xmrp: number;
  xstdprice: number;
  xstock: number;
  xdisc: number;
  xhscode: string;
  xweight: number;
  xvatpct: number;
  zactive: number;
  xfeature: string;
  ximages: string;
  xusername: string;
};

export async function getAllProducts(): Promise<any | void> {
  try {
    // if(typeof window == 'undefined'){
    //   return []
    // }
    const res = await fetch(
      `/api/frontend/items`,
      {
        cache: "no-store",
      }
    );

    if (res.ok) {
      return await res.json();
    } else {
      console.error(`Failed to fetch data. Status code: ${res.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
