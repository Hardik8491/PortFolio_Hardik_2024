import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";

import { NextResponse } from "next/server";
import { Social } from "../../../../typings";
import applyCors from "@/lib/cors";
import { NextApiRequest, NextApiResponse } from "next";

const query = groq`*[_type=='social']{...,}`;

type Data = {
    socials: Social[];
};
export const revalidate = 0;
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    await applyCors(req, res);
    const socials: Social[] = await sanityClient.fetch(query);
    return NextResponse.json(socials);
}
