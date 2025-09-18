
const { sequelize } = require("../config/sequelizeConfig");
const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll(); 
    res.json(users);
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    res.status(500).send("Error obteniendo usuarios");
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId); 
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }
    res.json(user);
  } catch (error) {
    console.error("Error obteniendo usuario:", error);
    res.status(500).send("Error obteniendo usuario");
  }
};

exports.createUser = async (req, res) => {
  const { nombre, email, telefono } = req.body;
  if (!nombre || !email || !telefono) {
    return res.status(400).send("Nombre, email y teléfono son obligatorios");
  }
  try {
    const newUser = await User.create({ nombre, email, telefono });
  sequelize
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creando usuario:", error);
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).send("El email ya está en uso");
    }
    res.status(500).send("Error creando usuario");
  }
};
