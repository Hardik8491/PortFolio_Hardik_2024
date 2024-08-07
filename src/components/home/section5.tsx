import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";

import { Suspense } from "react";

import { Project } from "../../../typings";
import { Title } from "../Title";
import { fetchProjects } from "../../../utils/fetchProjects";
import ProjectList from "./ui/ProjectList";

const HomeSection5 = async ({ id }: { id: string }) => {
    const projects = (await fetchProjects()) as Project[];
    if (!projects) return null;
    return (
        <ResponsiveBox
            className=' min-h-[calc(100vh-5rem)] w-full items-center justify-center'
            id={id}
        >
            <Title h2='Projects' useMotion />
            <Suspense>
                <ConstraintedBox className='p-4 w-full'>
                    <ProjectList projects={projects} />
                </ConstraintedBox>
            </Suspense>
        </ResponsiveBox>
    );
};

export default HomeSection5;