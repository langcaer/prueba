// src/controllers/authController.ts

export const login = async (req: Request) => {
    const { username, password } = await req.json();

    // Lógica de autenticación (simplificada)
    if (username === "user" && password === "password") {
        return Response.json({ message: "Login successful!" });
    }

    return Response.json({ message: "Invalid credentials" }, { status: 401 });
};

export const logout = async (req: Request) => {
    // Lógica para cerrar sesión
    return Response.json({ message: "Logout successful!" });
};

export const register = async (req: Request) => {
    const { username, password } = await req.json();

    // Aquí agregarías la lógica para registrar un nuevo usuario
    return Response.json({ message: "User registered successfully!" });
};
