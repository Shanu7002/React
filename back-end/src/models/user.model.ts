export const insertUserSQL = `
  INSERT INTO usuarios (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING idUsuario, name, email;
`;

export const findUserByEmailSQL = `
  SELECT * FROM usuarios WHERE email = $1;
`;
