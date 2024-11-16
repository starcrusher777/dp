import { createClient} from "contentful";

const client = createClient({
    space: 'space',
    accessToken: 'token',
    environment: 'environment',
});

export default client;