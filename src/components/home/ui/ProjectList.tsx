"use client";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import { Project } from "@/typings";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }: Readonly<{ projects: Project[] }>) => {
    return (
        <Column className='w-full mt-16'>
            <Row className='gap-4 p-4 w-screen overflow-scroll'>
                {projects?.map((item, index) => {
                    return (
                        <ProjectItem
                            key={`project-item-${index}`}
                            project={item}
                        />
                    );
                })}
            </Row>
        </Column>
    );
};

export default ProjectList;
