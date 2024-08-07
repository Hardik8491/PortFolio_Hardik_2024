import ConstraintedBox from "@/components/core/ConstraintedBox";
import GridBox from "@/components/core/GridBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import { SkillSet } from "../../typings";
import { ISkillListItem, SkillLevel }from "../../types";
import { Title } from "./Title";
import SkillItem from "./home/ui/SkillItem";

type Props = {
    skillsSet: SkillSet[] | null;
};
const skills: ISkillListItem[] = [
    {
        title: "Programming Languages",
        items: [
            {
                title: "JavaScript",
                level: SkillLevel.Expert,
                icon: "/skills/javascript.svg",
            },
            {
                title: "TypeScript",
                level: SkillLevel.Intermediate,
                icon: "/skills/typescript.svg",
            },
            {
                title: "Dart",
                level: SkillLevel.Expert,
                icon: "/skills/dart.svg",
            },
        ],
    },
    {
        title: "Frontend Development",
        items: [
            {
                title: "Next.js",
                level: SkillLevel.Expert,
                icon: "/skills/nextjs.png",
            },
            {
                title: "React.js",
                level: SkillLevel.Expert,
                icon: "/skills/react.svg",
            },
            {
                title: "HTML",
                level: SkillLevel.Expert,
                icon: "/skills/html.svg",
            },
            {
                title: "CSS",
                level: SkillLevel.Intermediate,
                icon: "/skills/css.svg",
            },
            {
                title: "SASS",
                level: SkillLevel.Intermediate,
                icon: "/skills/sass.svg",
            },
            {
                title: "Redux Toolkit",
                level: SkillLevel.Expert,
                icon: "/skills/redux.svg",
            },
        ],
    },
    {
        title: "Backend Development",
        items: [
            {
                title: "Node.js",
                level: SkillLevel.Expert,
                icon: "/skills/nodejs.svg",
            },
            {
                title: "Express.js",
                level: SkillLevel.Expert,
                icon: "/skills/express.svg",
            },
            {
                title: "Socket.io",
                level: SkillLevel.Intermediate,
                icon: "/skills/socket-io.png",
            },
            {
                title: "Nest.js",
                level: SkillLevel.Begginer,
                icon: "/skills/nestjs.svg",
            },
        ],
    },
    {
        title: "Mobile App Development",
        items: [
            {
                title: "Flutter",
                level: SkillLevel.Expert,
                icon: "/skills/flutter.svg",
            },
            {
                title: "GetX",
                level: SkillLevel.Expert,
                icon: "/skills/getx.png",
            },
        ],
    },
    {
        title: "Database Management",
        items: [
            {
                title: "MongoDB",
                level: SkillLevel.Intermediate,
                icon: "/skills/mongodb.svg",
            },
            {
                title: "PostgreSQL",
                level: SkillLevel.Intermediate,
                icon: "/skills/postgresql.svg",
            },
            {
                title: "MySQL",
                level: SkillLevel.Begginer,
                icon: "/skills/mysql.svg",
            },
        ],
    },
    {
        title: "DevOps/VCS",
        items: [
            {
                title: "Docker",
                level: SkillLevel.Begginer,
                icon: "/skills/docker.png",
            },
            {
                title: "AWS",
                level: SkillLevel.Intermediate,
                icon: "/skills/aws.svg",
            },
            {
                title: "Git",
                level: SkillLevel.Expert,
                icon: "/skills/git.svg",
            },
            {
                title: "GitHub",
                level: SkillLevel.Expert,
                icon: "/skills/github.svg",
            },
        ],
    },
    {
        title: "Miscellaneous",
        items: [
            {
                title: "Firebase",
                level: SkillLevel.Intermediate,
                icon: "/skills/firebase.svg",
            },
            {
                title: "Ubuntu",
                level: SkillLevel.Intermediate,
                icon: "/skills/ubuntu.png",
            },
        ],
    },
];
const Skills = ({ skillsSet }: Props) => {
    if (!skillsSet) return null;
    return (
        <ResponsiveBox
            className=' min-h-[calc(100vh-5rem)] items-center justify-center'
            id={"id"}
        >
            <Title h2='Skills' useMotion />
            <ConstraintedBox className='p-4 w-full'>
                <GridBox className='justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16'>
                    {skillsSet?.map((skill, index) => {
                        return (
                            <SkillItem key={`skill-${index}`} data={skill} />
                        );
                    })}
                </GridBox>
            </ConstraintedBox>
        </ResponsiveBox>
    );
};
export default Skills;
