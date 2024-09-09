import Link from "next/link";
import { MdEdit } from "react-icons/md";
import { formatTimestamp } from "../../../utils/timeFormat";
import CodeDelete from "./codeDelete";
import CheckBoxClick from "./CheckBoxClick";
import { BsThreeDots } from "react-icons/bs";

const Table = ({
  table_title,
  th1,
  th2,
  th3,
  th4,
  th5,
  th6,
  th7,
  tablesData,
  pathName,
}) => {
  return (
    <div className="rounded-2xl">
      <div className="overflow-x-auto w-full rounded-[20px] bg-white shadow-xl pt-5 pr-5">
        <div className="w-full mx-auto flex justify-between items-center pl-6 md:pl-16">
          <h1 className="text-[#2B3674] font-extrabold text-2xl">
            {table_title}
          </h1>

          {th7 ? (
            <>
              {" "}
              <p className="w-[60px] text-white h-[37px] rounded-md bg-lime flex justify-center items-center">
                <Link href={`/dashboard/${pathName}`}>
                  <button>create</button>
                </Link>
              </p>
            </>
          ) : (
            <>
              <p className="bg-[#F4F7FE] w-12 h-12 rounded-full flex justify-center items-center">
                <BsThreeDots />
              </p>
            </>
          )}
        </div>
        <table className="min-w-[90%] mx-auto  my-6">
          <thead className="">
            <tr className="font-medium text-[14px] leading-[24px] uppercase text-[#A3AED0]">
              <th className="py-3 px-6 text-left  w-[39px]">{th1}</th>
              <th className="py-3 px-6 text-left  w-[64px]">{th2}</th>
              <th className="py-3 px-6 text-left  w-[64px]">{th3}</th>
              <th className="py-3 px-6   text-end w-[64px]">{th4}</th>
              {th5 === "Xrem" ? (
                <>
                  <th className="py-3 px-6 text-end  w-[64px]">{th5}</th>
                  <th className="py-3 px-6   text-end w-[64px]">{th6}</th>
                </>
              ) : (
                ""
              )}
              <th className="py-3 px-6   text-end w-[64px]">{th7}</th>
            </tr>
          </thead>
          <tbody>
            {tablesData?.map((item) => (
              <tr
                key={item?.id || item?.xcodeid}
                className="hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6 flex justify-start items-center gap-1">
                  {" "}
                  <CheckBoxClick />
                  {item?.name || item?.xusername}
                </td>

                <td className="py-4 px-6">
                  {item?.email
                    ? item?.email
                    : item?.balance
                      ? item?.balance
                      : item?.progress
                        ? item?.progress
                        : item?.affiliate
                          ? item?.affiliate
                          : item?.affiliateId || item?.xcodetype}
                </td>
                <td className="py-4 px-6">
                  {item?.contact
                    ? item?.contact
                    : item?.withdraw
                      ? item?.withdraw
                      : item?.quantity
                        ? item?.quantity
                        : item?.domain || item?.xcode}
                </td>
                {/* <td className="py-4 px-8 text-end">{item?.xdepcode}</td>
                <td className="py-4 px-8 text-end">{item?.xrem}</td> */}
                {th7 && (
                  <>
                    <td className="py-4 px-8 text-end">{item?.xdepcode}</td>
                    <td className="py-4 px-8 text-end">{item?.xrem}</td>

                    <td className="py-4 px-8 text-end">
                      {formatTimestamp(item?.ztime)}
                    </td>
                  </>
                )}
                {th7 && (
                  <td className="py-4 px-8 flex justify-end ">
                    <div className="flex -mr-4">
                      <Link
                        href={`/dashboard/codeSetting/edit/${item.xcodeid}`}
                      >
                        <MdEdit className="bg-primary text-2xl p-1 text-white rounded-full" />
                      </Link>
                      <CodeDelete id={item?.xcodeid} />
                    </div>
                  </td>
                )}

                {item?.xcode ? (
                  <></>
                ) : (
                  <>
                    {item.status ? (
                      <td className="py-4 px-6 text-end">
                        <button className="bg-[#6AD2FF] px-2 rounded-md">
                          {item?.status}
                        </button>
                      </td>
                    ) : (
                      <td className="py-4 px-6 text-end">
                        {item?.product ? item?.product : item?.date}
                      </td>
                    )}
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
