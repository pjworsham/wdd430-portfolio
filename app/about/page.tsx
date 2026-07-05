import SkillCard from "@/components/SkillCard";
export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        This about page shares more information about what I have been learning while taking classes at BYU-I.
      </p>
      <div className="grid gap-4 md:grid-cols-2 mt-8">
        <SkillCard
          title="HTML & CSS"
          level="Advanced"
          description="Building responseive layouts with Tailwind CSS"
        />
        <SkillCard
          title="JavaScript"
          level="Intermediate"
          description="Working with DOM, APIs, and React"
          />
        <SkillCard
          title="Next.js"
          level="Beginner-Intermediate"
          description="Using server and client components in projects"
        />
      </div>
    </main>
  );
}