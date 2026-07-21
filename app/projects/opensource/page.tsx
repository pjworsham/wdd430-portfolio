import ProjectList from '../../../components/ProjectList';

import { fetchProjects } from '../../lib/fetch-projects';

export default async function OpenSourceProjectsPage() {
	const projects = await fetchProjects('opensource');

	return <ProjectList projects={projects} />;
}