import { useState, useEffect } from "react";
import SelectComponent from "../../components/select";
import { fetchAllProjects, fetchProjectsWithPagination } from "../../utils/projectsAPI";
import ProjectRowItem from "./row-item"


function ProjectDropDown() {
    const [projects, setProjects] = useState([]);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(0);


    useEffect(() => {
        fetchProjectsWithPagination(limit, page).then(data => {
            setProjects(data);
        })

    }, [page]);



    return (
        <SelectComponent data={projects || []} multiple={true} rowTemplate={ProjectRowItem} loadNextPage={() => setPage((page) => page + 1)} />
    )
}

export default ProjectDropDown;

