import { createClient} from "contentful";

const client = createClient({
    space: 'spaceId',
    accessToken: 'token',
    environment: 'master',
});

export default client;