import type { BunRequest } from "bun";

// src/controllers/userController.ts
export const getUser = async (req: BunRequest<"/api/user/:id">) => {
    const userId = req.params.id;
    // Lógica para obtener un usuario por ID
    return Response.json({ userId, name: "John Doe" });
};

export const updateUser = async (req: BunRequest<"/api/user/:id">) => {
    const userId = req.params.id;
    const data = await req.json();

    // Lógica para actualizar un usuario
    return Response.json({ message: "User updated successfully" });
};

export const deleteUser = async (req: BunRequest<"/api/user/:id">) => {
    const userId = req.params.id;
    // Lógica para eliminar un usuario
    return Response.json({ message: `User ${userId} deleted successfully` });
};
