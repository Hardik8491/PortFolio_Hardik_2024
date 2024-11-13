import { groq } from "next-sanity";

import { NextRequest, NextResponse } from "next/server";
import { PageInfo } from "../../../../typings";
import { sanityClient } from "@/lib/sanity";
import applyCors from "@/lib/cors";
import { NextApiRequest, NextApiResponse } from "next";

const query = groq`
*[_type=='pageInfo'][0]`;

type Data = {
    pageInfo: PageInfo[];
};
export const revalidate = 0;
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    await applyCors(req, res);
    const pageInfo: PageInfo[] = await sanityClient.fetch(query);
    return NextResponse.json(pageInfo);
}
