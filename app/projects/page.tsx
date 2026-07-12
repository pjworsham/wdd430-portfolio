import ProjectList from '../../components/ProjectList';

import { fetchProjects } from './lib/fetch-projects';

export default async function ProjectsPage() {
	const projects = await fetchProjects();

	return <ProjectList projects={projects} />;
}