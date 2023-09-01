const { Product, Size } = require("../../DataBase");
const products = require("./arrayProducts");

function getRandomQuantity(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const postProduct = async (req, res) => {
  try {
    const productCount = await Product.count();

    if (productCount === 0) {
      await Product.bulkCreate(products);

      const sizes = await Size.findAll();

      if (sizes && sizes.length > 0) {
        const allProducts = await Product.findAll();
        await Promise.all(
          allProducts.map(async (product) => {
            // Agregar stock directamente al producto
            await product.update({
              stock: getRandomQuantity(50, 500), // Número aleatorio entre 1 y 100
            });

            // Obtener un número aleatorio de tallas para asignar al producto
            const randomSizeCount = getRandomQuantity(1, sizes.length);
            const randomSizes = [];

            // Crear una lista de índices de tallas únicos aleatorios
            while (randomSizes.length < randomSizeCount) {
              const randomIndex = getRandomQuantity(0, sizes.length - 1);
              if (!randomSizes.includes(randomIndex)) {
                randomSizes.push(randomIndex);
              }
            }

            // Asignar las tallas aleatorias al producto
            await product.addSizes(randomSizes.map((index) => sizes[index]));
          })
        );
      } else {
        return res
          .status(500)
          .json({ message: "No se encontraron tallas en la base de datos." });
      }

      return res
        .status(200)
        .json({ message: "Productos cargados exitosamente." });
    } else {
      const {
        name,
        gender,
        category,
        mainMaterial,
        images,
        price,
        description,
        sizes,
      } = req.body;

      if (
        !name ||
        !gender ||
        !category ||
        !mainMaterial ||
        !images ||
        !price ||
        !description ||
        !sizes
      ) {
        return res.status(400).json({ error: "Faltan datos!!!" });
      }

      const newProduct = await Product.create({
        name,
        gender,
        category,
        mainMaterial,
        images,
        price,
        description,
      });

      const sizesDB = await Size.findAll(); // Cambiado de 'sizes' a 'sizesDB'
      let stock = 0;

      sizes.forEach((size) => {
        for (const key in size) {
          if (size.hasOwnProperty(key)) {
            stock += size[key];
          }
        }
      });

      await newProduct.update({ stock });

      sizesDB.forEach(async (size) => {
        // Cambiado de 'sizes' a 'sizesDB'
        const sizeName = Object.keys(size)[0]; // Obtiene el nombre de la talla (e.g., "xs")
        // console.log(Object.keys(size)[0].dataValues);
        const sizeCount = sizes[sizeName]; // Obtiene la cantidad de esa talla

        // Verifica si la talla tiene una cantidad mayor que 0
        if (sizes[sizeName] > 0) {
          // Cambiado de 'sizes' a 'sizesDB'
          // Agrega la talla al producto
          await newProduct.addSize(sizeName, {
            through: { quantity: sizeCount },
          });
        }
      });

      return res
        .status(200)
        .json({ message: "Producto cargado exitosamente." });
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = postProduct;

// Codigfo Anterior (carga todos los talles en todos los productos):
// const { Product, Size } = require("../../DataBase");
// const products = require("./arrayProducts");

// function getRandomQuantity(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const postProduct = async (req, res) => {
//   try {
//     const { name, gender, category, mainMaterial, images, price, description } =
//       req.body;

//     const productCount = await Product.count();

//     if (productCount === 0) {
//       await Product.bulkCreate(products);

//       const sizes = await Size.findAll();

//       if (sizes && sizes.length > 0) {
//         const allProducts = await Product.findAll();
//         await Promise.all(
//           allProducts.map(async (product) => {
//             // Agregar stock directamente al producto
//             await product.update({
//               stock: getRandomQuantity(50, 500), // Número aleatorio entre 1 y 100
//             });

//             await product.addSizes(sizes);
//           })
//         );
//       } else {
//         return res
//           .status(500)
//           .json({ message: "No se encontraron tallas en la base de datos." });
//       }

//       return res
//         .status(200)
//         .json({ message: "Producto(s) cargado(s) exitosamente." });
//     } else {
//       const newProduct = await Product.create({
//         name,
//         gender,
//         category,
//         mainMaterial,
//         images,
//         price,
//         description,
//       });

//       const sizes = await Size.findAll();

//       if (sizes && sizes.length > 0) {
//         // Agregar stock directamente al producto
//         await newProduct.update({
//           stock: getRandomQuantity(1, 100), // Número aleatorio entre 1 y 100
//         });

//         await newProduct.addSizes(sizes);
//       } else {
//         return res
//           .status(500)
//           .json({ message: "No se encontraron tallas en la base de datos." });
//       }

//       return res
//         .status(200)
//         .json({ message: "Producto cargado exitosamente." });
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// module.exports = postProduct;
