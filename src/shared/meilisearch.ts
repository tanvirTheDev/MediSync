import { MeiliSearch } from 'meilisearch';

const meiliClient = new MeiliSearch({
  host: process.env.MEILISEARCH_HOST as string,
  apiKey: process.env.MEILISEARCH_API_KEY,
});

export default meiliClient;
