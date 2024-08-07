import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { NextResponse } from "next/server";
import { PageInfo, Project, Skill } from  "../../../../typings";
const query = groq`
*[_type=='pageInfo'][0]`;

type Data = {
    pageInfo: PageInfo[];
};
export const revalidate = 0;
export async function GET() {
    const pageInfo: PageInfo[] = await sanityClient.fetch(query);
    return NextResponse.json(pageInfo);
}
