import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { sanityClient } from "@/lib/sanity";
import { Contact } from "../../../../typings";
import applyCors from "@/lib/cors";
import { NextApiRequest, NextApiResponse } from "next";
// Define your Contact type in typings

const query = groq`
*[_type == 'contact']{...,}
`;

type Data = {
  contact: Contact[];
};

export const revalidate = 0;

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await applyCors(req, res);
  const contact: Contact[] = await sanityClient.fetch(query);

  return NextResponse.json(contact);
}
