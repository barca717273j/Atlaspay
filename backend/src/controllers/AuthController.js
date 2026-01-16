const users = [];

module.exports = {
  register(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Dados incompletos" });
    }

    const userExists = users.find(u => u.email === email);
    if (userExists) {
      return res.status(400).json({ error: "Usuário já existe" });
    }

    const user = {
      id: users.length + 1,
      name,
      email,
      password
    };

    users.push(user);

    return res.status(201).json({
      message: "Conta criada com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  },

  login(req, res) {
    const { email, password } = req.body;

    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    return res.json({
      message: "Login realizado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  }
};
