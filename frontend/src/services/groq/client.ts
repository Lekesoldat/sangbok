import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "9up46puq",
  dataset: "private",
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
