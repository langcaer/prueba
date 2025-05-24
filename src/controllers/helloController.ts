export async function helloGet() {
  return Response.json({
    message: "Hello, world!",
    method: "GET",
  });
}

export async function helloPut() {
  return Response.json({
    message: "Hello, world!",
    method: "PUT",
  });
}

export async function helloByName(req: any) {
  const name = req.params.name;
  return Response.json({
    message: `Hello, ${name}!`,
  });
}
