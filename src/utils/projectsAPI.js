import { getRequest } from "./axiosclient"


async function fetchAllProjects() {
    try {
        const projects = await getRequest("projects");
        return projects;
    }
    catch (error) {
        console.log("fetchProjects error: ", error);
    }
}

async function fetchProjectsWithPagination(limit, page) {
    try {
        const result = await getRequest(`projects/?page=${page}&limit=${limit}`);
        return result.data;
    }
    catch (error) {
        console.log("fetchProjects error: ", error);
    }
}

export { fetchAllProjects, fetchProjectsWithPagination };
