import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
   projectId: 'euuih2kc',
    dataset: 'production',
    apiVersion: "2024-07-20",
    useCdn: true,
};
export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
    createImageUrlBuilder(config).image(source);
