const { SalesHistory } = require("../../DataBase"); // Asegúrate de importar el modelo correcto

const payment = async (req, res) => {
  try {
    const { preferenceId, userId, cartItems } = req.body;

    // Aquí debes incluir los detalles de la compra en la entrada del historial de ventas
    const salesHistoryEntry = await SalesHistory.create({
      userId: userId, // Asigna el ID de usuario
      products: cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        // Puedes incluir otros detalles de productos aquí si es necesario
      })),
      totalPrice: cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0),
      // Puedes agregar otros detalles relevantes aquí
    });

    // Envía una respuesta exitosa si se agregó correctamente
    return res
      .status(200)
      .json({ message: "Compra agregada al historial con éxito" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error al agregar la compra al historial" });
  }
};

module.exports = payment;
