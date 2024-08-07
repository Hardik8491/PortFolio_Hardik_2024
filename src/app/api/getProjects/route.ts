import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { NextResponse } from "next/server";
import { Project, Skill } from  "../../../../typings";
const query = groq`*[_type=='project']{...,technologies[]->}`;

type Data = {
    projects: Project[];
};
export const revalidate = 0;
export async function GET() {
    const projects: Project[] = await sanityClient.fetch(query);
    return NextResponse.json(projects);
}
