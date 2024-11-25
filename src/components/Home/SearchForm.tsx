import Form from "next/form";
import { FaSearch } from "react-icons/fa";
import FormReset from "./FormReset";

function SearchForm({ query }: { query?: string }) {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <div className="relative w-full">
        <input
          name="query"
          type="text"
          placeholder="Search Here..."
          className="w-full h-10 md:h-12 px-6 pr-20 bg-gray-800/50 border border-white text-white placeholder-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#60efff] focus:border-transparent transition-all"
        />
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex gap-1">
          {query && <FormReset/>}
          <button
            type="submit"
            className="h-8 w-8 md:h-10 md:w-10 text-white hover:text-[#60efff] transition-colors"
          >
            <FaSearch className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </Form>
  );
}

export default SearchForm;
