const express =require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
const userRoutes = require("./routes/userRoutes");
const { sequelize } = require("./config/sequelizeConfig");
app.use("/usuarios", userRoutes);

sequelize.sync()
    .then(() => {
        connectDB().then(() => {
            app.listen(3000, () => {
                console.log("Servidor corriendo en http://localhost:3000");
            });
        });
    })
    .catch((error) => {
        console.error("Error al sincronizar el modelo con la base de datos:", error);
        process.exit(1);
    });
