import ProjectList from '../../../components/ProjectList';

import { fetchProjects } from '../lib/fetch-projects';

export default async function SchoolProjectsPage() {
	const projects = await fetchProjects('school');

	return <ProjectList projects={projects} />;
}