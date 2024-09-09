import { FaPlus } from "react-icons/fa";

interface FAQProps {
  id: number;
  title: string;
  description: string;
}

const FAQ: React.FC<FAQProps> = ({ id, title, description }) => {
  return (
    <div key={id} className="my-2 px-4 md:px-10 lg:px-20 xl:px-40">
      <details className="p-4 md:p-6 bg-brightGray rounded-lg">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-white">
            {title}
          </h2>
          <div className="shrink-0 text-white sm:p-3">
            <FaPlus className="text-white" />
          </div>
        </summary>
        <p className="mt-4 leading-relaxed text-white">{description}</p>
      </details>
    </div>
  );
};

export default FAQ;
