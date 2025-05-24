import {
    helloGet,
    helloPut,
    helloByName,
} from "../controllers/helloController";

const routes = {
    "/api/hello": {
        GET: helloGet,
        PUT: helloPut,
    },
    "/api/hello/:name": helloByName,
};

export default routes;
