import ProjectList from '../../components/ProjectList';
import { fetchProjects } from './lib/fetch-projects';

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const { query, page } = await searchParams;

  const projects = await fetchProjects(query, page);

  return <ProjectList projects={projects} />;
}