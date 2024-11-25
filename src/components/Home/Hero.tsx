import SearchForm from "./SearchForm";


export default async function Hero({searchParams}:{searchParams:Promise<query?:string>}) {
  return (
    <section className=" mt-10 md:mt-0 pt-24 md:pt-32 pb-16 text-center px-4 relative overflow-hidden ">
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-[#00ff87] to-[#60efff] rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="container mx-auto relative z-10">
        <div className="inline-flex items-center bg-gray-800/50 rounded-full px-3 py-1 md:px-4 md:py-2 mb-6 md:mb-8">
          <span className="text-xs font-semibold bg-[#00ff87] text-gray-900 px-2 py-1 rounded-full mr-2">
            NEW
          </span>
          <span className="text-xs md:text-sm text-gray-300">
            Discover our latest AI-powered feature
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 max-w-4xl mx-auto">
          <span >Transform</span> your{" "}
          Experience
          <br className="hidden md:block" /> with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2c9770] to-[#76a2a5]">AI Innovation</span> 
        </h1>

        <p className="text-gray-400 text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
          Crafts engaging captions and automates your posting schedule clearly states the features.
        </p>

        <div className="max-w-xl mx-auto">
         <SearchForm/>
        </div>
      </div>
    </section>
  )
}

