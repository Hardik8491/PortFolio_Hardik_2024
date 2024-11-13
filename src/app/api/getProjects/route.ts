//@ts-nocheck
import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { Project } from "../../../../typings"; // Make sure your Project type is defined here
import { sanityClient } from "@/lib/sanity";
import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST'], // Allow GET and POST methods
  origin: 'https://www.hardik-dev.tech', // Replace this with the allowed domain(s)
});

// Helper function to run the middleware
function runMiddleware(req: any, res: any, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Sanity query to fetch projects with their associated technologies
const query = groq`*[_type=='project']{...,technologies[]->}`;

export const revalidate = 0;

export async function GET(req: any) {
  try {
    // Run CORS middleware
    await runMiddleware(req, req.res, cors);

    // Fetch the project data from Sanity
    const projects: Project[] = await sanityClient.fetch(query);

    // Returning the fetched projects as a JSON response
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Return an error response if the fetch fails
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
