import { groq } from "next-sanity";

import { NextResponse } from "next/server";
import { Project } from "../../../../typings";
import { sanityClient } from "@/lib/sanity";
import applyCors from "@/lib/cors";
import { NextApiRequest, NextApiResponse } from "next";

const query = groq`*[_type=='project']{...,technologies[]->}`;

type Data = {
    projects: Project[];
};
export const revalidate = 0;
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    await applyCors(req, res);
    const projects: Project[] = await sanityClient.fetch(query);
    return NextResponse.json(projects);
}
