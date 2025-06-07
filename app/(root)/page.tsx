import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";
import { title } from "process";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 54,
      author: { _id: 1, name: "GOD" },
      descreption: "This is descreption",
      image_url:
        "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8fDA%3D",
      category: "himalayas",
      title: "Mount Kailash",
    },
    {
      _createdAt: new Date(),
      views: 57,
      author: { _id: 1, name: "adrian" },
      descreption: "This is descreption",
      image_url:
        "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWxheWF8ZW58MHx8MHx8fDA%3D",
      category: "himalayas",
      title: "Himalayas",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Startups`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartUpCardType) => (
              <StartUpCard key={post.author._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
