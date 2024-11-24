import PostCard from "@/components/PostCard";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/external");
  if (!response.ok) {
    return (
      <div className="bg-gray-200 text-gray-800 p-6 text-lg w-fit m-auto rounded-lg shadow-md">
        <h2>Something went wrong. Please try again later.</h2>
      </div>
    );
  }

  const data = await response.json();
  const posts: Post[] = data.data;

  return (
    <div className="min-h-screen p-8 bg-teal-100">
      <h1 className="text-center text-3xl font-bold mb-8 text-white bg-pink-950 p-6 ">
        Posts from External API
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-8">
        {posts.map((post) => (
          <PostCard key={post.id} body={post.body} title={post.title} />
        ))}
      </div>
    </div>
  );
}
