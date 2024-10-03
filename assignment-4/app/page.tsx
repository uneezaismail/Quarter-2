import Card from "./components/cards/page";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-orange-100">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-16 xl:p-20 md:p-15 py-8">
        <Card
          name="Haya"
          id={1001}
          course="C++"
          batch="2024"
          imageSrc="https://img.freepik.com/premium-photo/muslim-hijab-girl_1001626-827.jpg"
        />
        <Card
          name="Imama"
          id={1002}
          course="PHP"
          batch="2023"
          imageSrc="https://r2.starryai.com/results/1048598631/344ca507-130b-4d64-b0ef-dfb025116717.webp"
        />
        <Card
          name="Zumar"
          id={1003}
          course="LLB"
          batch="2025"
          imageSrc="https://img.freepik.com/premium-photo/beautiful-muslim-girl-with-hijab_951949-49.jpg"
        />
      </div>
    </div>
  );
}
