import { Project } from "@/typings";
import axios from "axios";

export const fetchProjects = async () => {
    try {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
        );
        if (res.headers["content-type"].split(";")[0] === "text/html")
            return null;
        const data = res.data;

        const projects: Project[] = data;
        return projects;
    } catch (error) {
        return null;
    }
};
