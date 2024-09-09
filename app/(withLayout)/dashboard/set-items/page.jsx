import Link from "next/link";

const RoleForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full md:flex-row md:justify-center md:items-center">
      <Link href="/dashboard/set-items/create">
        <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0">
          Create A Item
        </button>
      </Link>
      <Link href="/dashboard/set-items/information">
        <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View All Items
        </button>
      </Link>
    </div>
  );
};

export default RoleForm;
