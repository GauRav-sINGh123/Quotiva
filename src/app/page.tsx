import SearchForm from "@/components/Home/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date().toISOString(),
      views: "55",
      author: {
        _id: 1,
      },
      _id: 1,
      description: "Description for post 1",
      image:
        "https://images.unsplash.com/photo-1721332150382-d4114ee27eff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      _createdAt: new Date().toISOString(),
      views: "55",
      author: {
        _id: 2,
      },
      _id: 2,
      description: "Description for post 2",
      image:
        "https://images.unsplash.com/photo-1721332150382-d4114ee27eff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      _createdAt: new Date().toISOString(),
      views: "55",
      author: {
        _id: 3,
      },
      _id: 3,
      description: "Description for post 3",
      image:
        "https://images.unsplash.com/photo-1721332150382-d4114ee27eff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <section className=" mt-10 md:mt-0 pt-24 md:pt-32 pb-16 text-center px-4 relative   ">
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
            <span>Transform</span> your Experience
            <br className="hidden md:block" /> with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2c9770] to-[#76a2a5]">
              AI Innovation
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
            Crafts engaging captions and automates your posting schedule clearly
            states the features.
          </p>

          <div className="max-w-xl mx-auto">
            <SearchForm query={query} />
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center mt-20 w-full px-20">
        <div className="flex flex-col startup-section w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 max-w-4xl mx-auto">
            {query ? `Search Result for "${query}"` : "Latest Startups"}
          </h2>
          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
