import ProjectList from '../../components/ProjectList';
import { fetchFilteredProjects } from '../lib/projects-db';

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const { query, page } = await searchParams;

  const currentPage = Number(page) || 1;

  const projects = await fetchFilteredProjects(
    query ?? '',
    currentPage
  );

  return <ProjectList projects={projects} />;
}