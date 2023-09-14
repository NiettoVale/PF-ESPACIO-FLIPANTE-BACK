const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const mercadoPago = async (req, res) => {
  try {
    let preference = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        },
      ],
      back_urls: {
        success: "http://localhost:3000/orders",
        failure: "http://localhost:5173",
        pending: "",
      },
      auto_return: "approved",
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        console.log("Respuesta de Mercado Pago:", response.body);
        res.json({
          id: response.body.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = mercadoPago;
