// src/routes/api/auth.route.ts
import { login, logout, register } from "../controllers/authController";

const authRoutes = {
    "/api/auth/login": {
        POST: login,
    },
    "/api/auth/logout": {
        POST: logout,
    },
    "/api/auth/register": {
        POST: register,
    },
};

export default authRoutes;
