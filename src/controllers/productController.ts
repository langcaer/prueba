import type { BunRequest } from "bun";

// src/controllers/productController.ts
export const getProduct = async (req: BunRequest<"/api/product/:id">) => {
    const productId = req.params.id;
    // Lógica para obtener un producto por ID
    return Response.json({ productId, name: "Product A" });
};

export const createProduct = async (req: BunRequest<"/api/product/:id">) => {
    const data = await req.json();
    // Lógica para crear un nuevo producto
    return Response.json({ message: "Product created successfully" });
};

export const updateProduct = async (req: BunRequest<"/api/product/:id">) => {
    const productId = req.params.id;
    const data = await req.json();

    // Lógica para actualizar un producto
    return Response.json({ message: "Product updated successfully" });
};
