import { deleteProject } from '@/app/lib/actions';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}
        
export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  const deleteProjectWithId = deleteProject.bind(null, id);

  return (
    <article className="rounded border-4 border-blue-600 bg-gray-50 p-4">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>

      <p className="mb-3 text-gray-700">{description}</p>

      <p className="text-sm text-gray-600">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>

      {link && (
        <p className="mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        </p>
      )}

      <form action={deleteProjectWithId} className="mt-4">
        <button
          type="submit"
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Delete
        </button>
      </form>
    </article>
  );
}