import { groq } from "next-sanity";

import { NextResponse } from "next/server";
import { Education, Project, Skill } from "../../../../typings";
import { sanityClient } from "../../../../sanity";
const query = groq`
*[_type=='education']{...,}`;

type Data = {
    education: Education[];
};

export const revalidate = 0;
export async function GET() {
    const education: Education[] = await sanityClient.fetch(query);

    return NextResponse.json(education);
}
