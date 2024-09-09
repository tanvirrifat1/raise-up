import Link from "next/link";

const RoleForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full md:flex-row md:justify-center md:items-center">
      <Link href="/dashboard/role/create">
        <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0">
          Create A Role
        </button>
      </Link>
      <Link href="/dashboard/role/information">
        <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Information
        </button>
      </Link>
    </div>
  );
};

export default RoleForm;
