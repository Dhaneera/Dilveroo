import { createClient, SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


const client: SanityClient = createClient({
    projectId: '0dk89x23',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any): string => builder.image(source).url();

export default client;