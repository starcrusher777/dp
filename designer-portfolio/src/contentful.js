import { createClient} from "contentful";

const client = createClient({
    space: 'spaceid',
    accessToken: 'token',
    environment: 'master',
});

export default client;