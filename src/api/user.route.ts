// src/routes/api/user.route.ts
import { getUser, updateUser, deleteUser } from "../controllers/userController";

const userRoutes = {
    "/api/users/:id": {
        GET: getUser,
        PUT: updateUser,
        DELETE: deleteUser,
    },
};

export default userRoutes;
