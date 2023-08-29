const products = [
  {
    name: "Riñonera simil",
    gender: "Hombre",
    category: "Accesorio",
    mainMaterial: "Simil",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAccesorios%2Fri%C3%B1onera%20Simil%2FRi%C3%B1onera%20simil%20(1).jpeg?alt=media&token=4b1d9ae9-1af3-4e89-85cc-04173a35f918",
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAccesorios%2Fri%C3%B1onera%20Simil%2FRi%C3%B1onera%20simil%20(2).jpeg?alt=media&token=b3701db5-806e-4ef0-a976-a50ae211dc06",
    ],
    price: 4000,
  },
  {
    name: "Riñonera cuero Hombre",
    gender: "Hombre",
    category: "Accesorio",
    mainMaterial: "Cuero",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAccesorios%2Fri%C3%B1onera%20cuero%2FRi%C3%B1onera%20cuero%20hombre%2FRi%C3%B1onera%20cuero%20hombre%20%20(1).jpeg?alt=media&token=1a6e6675-3d3d-4001-9e19-39d2d7a55499",
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAccesorios%2Fri%C3%B1onera%20cuero%2FRi%C3%B1onera%20cuero%20hombre%2FRi%C3%B1onera%20cuero%20hombre%20%20(2).jpeg?alt=media&token=612eca96-3d0a-4eec-bd44-f0aba5885deb",
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAccesorios%2Fri%C3%B1onera%20cuero%2FRi%C3%B1onera%20cuero%20hombre%2FRi%C3%B1onera%20cuero%20hombre%20%20(3).jpeg?alt=media&token=a4b150d1-2230-4877-8b1c-d6484058b47e",
    ],
    price: 5000,
  },
  {
    name: "Cargo nacional Hombre arena",
    gender: "Hombre",
    category: "Pantalón",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20Nacional%2FCargo%20nacional%20arena%20hombre%20(1).jpeg?alt=media&token=59b4f949-f51c-448b-88e5-27d4c5cf6f47",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20Nacional%2FCargo%20nacional%20arena%20hombre%20(2).jpeg?alt=media&token=d8268458-76c4-494b-b74e-c9f992440b13",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20Nacional%2FCargo%20nacional%20arena%20hombre%20(3).jpeg?alt=media&token=ddb36f7d-9366-4c7e-a499-ab54390416de",
    ],
    price: 10000,
  },
  {
    name: "Pantalón nacional Hombre azul",
    gender: "Hombre",
    category: "Pantalón",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20Nacional%2FCargo%20nacional%20azul%20hombre%20(1).png?alt=media&token=e098d679-e746-4268-bab2-aaf422b24f31",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20Nacional%2FCargo%20nacional%20azul%20hombre%20(2).png?alt=media&token=8f0e3031-370b-4b75-afb3-3cbee0e0dd1b",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20Nacional%2FCargo%20nacional%20azul%20hombre%20(3).png?alt=media&token=31935436-a303-40fd-9d57-69153049fbfa",
    ],
    price: 15000,
  },
  {
    name: "Pantalón nacional Hombre beige",
    gender: "Hombre",
    category: "Pantalón",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20Nacional%2FCargo%20nacional%20beige%20hombre%20(1).png?alt=media&token=309faabc-5d34-4ec9-a3c8-17e0032ef889",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20Nacional%2FCargo%20nacional%20beige%20hombre%20(2).png?alt=media&token=4c95d200-82ae-40f9-857b-04240e897094",
    ],
    price: 18000,
  },

  {
    name: "Pantalón importado Hombre",
    gender: "Hombre",
    category: "Pantalón",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20importado%2FCargo%20importado%20hombre%20%20(2).jpeg?alt=media&token=61ec0f70-9638-4dce-a8c2-3a9bed778eda",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20importado%2FCargo%20importado%20hombre%20%20(1).jpeg?alt=media&token=ab6536c2-2ff6-4609-beef-343dd9d826e0",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20importado%2FCargo%20importado%20hombre%20%20(3).jpeg?alt=media&token=22b2cfce-8b82-495e-9352-7a189caedaa3",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FCargo%20importado%2FCargo%20importado%20hombre%20%20(4).jpeg?alt=media&token=6c02c670-9f42-496b-8226-8e6b63540484",
    ],
    price: 19000,
  },
  {
    name: "Rompe vientos azul",
    gender: "Hombre",
    category: "Campera",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20azul%20(1).jpeg?alt=media&token=c44b52fa-1bf4-4dcc-9a88-aeda0d49e518",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20azul%20(2).jpeg?alt=media&token=19675eb8-bef6-4373-a15a-926271b67593",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20azul%20(3).jpeg?alt=media&token=fe452a64-c181-42dc-83f7-c3b444b5128b",
    ],
    price: 12000,
  },
  {
    name: "Rompe vientos azul Oscuro",
    gender: "Hombre",
    category: "Campera",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20azul%20oscura%20(1).jpeg?alt=media&token=b0951e20-e77f-4057-be51-531f7276a7c2",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20azul%20oscura%20(2).jpeg?alt=media&token=4c3af0d8-0e62-46c7-9271-de5d4bb0a91e",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20azul%20oscura%20(3).jpeg?alt=media&token=a2f3d061-43cf-4c67-b56b-2a046cc1a5cd",
    ],
    price: 16000,
  },
  {
    name: "Rompe vientos negro",
    gender: "Hombre",
    category: "Campera",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20negra%20(1).jpeg?alt=media&token=fdee4493-7c28-4178-a5db-352d8868f311",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20negra%20(2).jpeg?alt=media&token=91a62e57-39ec-4767-95a1-571f3c63789c",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20negra%20(3).jpeg?alt=media&token=f3f7792a-c88a-49d7-be53-9a6d9a8b813a",
    ],
    price: 11000,
  },
  {
    name: "Rompe vientos verde",
    gender: "Hombre",
    category: "Campera",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20verde%20(1).jpeg?alt=media&token=e190c1dc-c033-417b-892c-0713574f5561",
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20verde%20(2).jpeg?alt=media&token=06d050fc-9aaa-436a-a376-9e6de52e7572",
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FHombre%2FRompevientos%2FRompe%20vientos%20verde%20(3).jpeg?alt=media&token=04cfc7ca-0e1c-480e-ba74-0d28bc747998",
    ],
    price: 15879,
  },
  {
    name: "Jardinero jean",
    gender: "Mujer",
    category: "Pantalón",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FDama%2FJardinero%20Jean%2FJardinero%20jean%20dama%20(1).jpeg?alt=media&token=5ec9d03c-dd21-469e-9616-8549ee131ace",
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FDama%2FJardinero%20Jean%2FJardinero%20jean%20dama%20(2).jpeg?alt=media&token=57aa27f1-bdd7-4170-b3ec-07f262883cbe",
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FDama%2FJardinero%20Jean%2FJardinero%20jean%20dama%20(3).jpeg?alt=media&token=e10d7eb3-b2dc-4d52-9a97-031c9904ae67",
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FAdult_s%2FDama%2FJardinero%20Jean%2FJardinero%20jean%20dama%20(4).jpeg?alt=media&token=75a0370f-bdc2-4ce7-913c-9a950201e188",
    ],
    price: 19999,
  },
  {
    name: "Buzo rustico retro",
    gender: "Nena",
    category: "Buzo",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FBUZOS%2FBuzo%20rustico%20retro%201.jpeg?alt=media&token=8b4b258a-e490-40ef-877a-99bb5987face",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FBUZOS%2FBuzo%20rustico%20retro%202.jpeg?alt=media&token=e929ff92-a49e-4e8c-befd-cf9392a2fee6",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FBUZOS%2FBuzo%20rustico%20retro%203.jpeg?alt=media&token=f52cd0c9-bab8-4698-b947-b211086e0e26",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FBUZOS%2FBuzo%20rustico%20retro%204.jpeg?alt=media&token=0f97881b-fdc2-4c76-b0aa-0dc3deb56918",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FBUZOS%2FBuzo%20rustico%20retro%205.jpeg?alt=media&token=d933f64c-f495-4ea3-b05c-155b5dc67fcc",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FBUZOS%2FBuzo%20rustico%20retro%206.jpeg?alt=media&token=e01b738b-858f-4d6c-963b-23f63fa1c6eb",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FBUZOS%2FBuzo%20rustico%20retro%207.jpeg?alt=media&token=a4b3132b-6321-4397-8cf7-f22631e71d78",
    ],
    price: 20000,
  },
  {
    name: "Calza ",
    gender: "Nena",
    category: "Pantalón ",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCALZAS%2FCalza%20Algodon%20y%20Lycra%201.jpeg?alt=media&token=9ea634ca-7f9a-44f1-9f8a-c32a0fbd8645",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCALZAS%2FCalza%20Algodon%20y%20Lycra%202.jpeg?alt=media&token=aafcfc56-a94a-4b9c-bc55-532c00bbd1e9",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCALZAS%2Fcalza%20lisa%201.jpeg?alt=media&token=e5bccd15-9d36-4241-a164-807e435725db",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCALZAS%2Fcalza%20lisa%202.jpeg?alt=media&token=9630a5f3-3418-428c-91b5-b9e16b5bee32",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCALZAS%2Fcalza%20lisa%203.jpeg?alt=media&token=781afc37-77fa-4d5a-ba51-2eb944cb103f",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCALZAS%2Fcalza%20lisa%204.jpeg?alt=media&token=16029428-4534-4754-b009-ea13621e4560",
    ],
    price: 20000,
  },
  {
    name: "Campera azul corazón",
    gender: "Nena",
    category: "Campera",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20azul%20corazon%20Acetato%201.jpeg?alt=media&token=13db9cd2-50a1-48d1-b7ab-b353124f8aba",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20azul%20corazon%20Acetato%202.jpeg?alt=media&token=6cebb860-cff0-46e4-8c9a-b78048be90a6",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20azul%20corazon%20Acetato%203.jpeg?alt=media&token=307f1ad9-dcc0-448f-9606-98c503cccd86",
    ],
    price: 20000,
  },
  {
    name: "Campera acetato",
    gender: "Nena",
    category: "Campera",
    mainMaterial: "Acetato",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20colores%20acetato%201.jpeg?alt=media&token=8d1458a8-6599-4a46-bcd8-cb9167a246ba",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20colores%20acetato%202.jpeg?alt=media&token=026835bb-7d1e-4d46-a075-e7a8ab0094fd",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20colores%20acetato%203.jpeg?alt=media&token=5d575431-197d-4a05-a141-750c288ec66c",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20colores%20acetato%204.jpeg?alt=media&token=c3e5aab5-5e77-495f-a363-605f57c86720",
    ],
    price: 8000,
  },
  {
    name: "Campera popit acetato",
    gender: "Nena",
    category: "Campera",
    mainMaterial: "Acetato",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20popit%20acetato%201.jpeg?alt=media&token=770022c4-b900-4fae-a372-3882e501b58e",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20popit%20acetato%202.jpeg?alt=media&token=bb331723-d539-4c28-928d-2a61ca94f29c",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20popit%20acetato%203.jpeg?alt=media&token=72dc496b-bf1f-432b-b70b-bccadce83ddf",
    ],
    price: 5500,
  },
  {
    name: "Campera rosa corazón",
    gender: "Nena",
    category: "Campera",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20rosa%20corazon%20Acetato%202.jpeg?alt=media&token=a8654b39-dcdc-45be-aa43-559d0ac7d536",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCAMPERAS%2FCampera%20rosa%20corazon%20Acetato%201.jpeg?alt=media&token=01737224-0cd3-4eac-b2c3-e5f7b44f21e0",
    ],
    price: 11000,
  },
  {
    name: "Conjunto crazy bang",
    gender: "Nena",
    category: "Conjunto",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCONJUNTOS%2FConjunto%20Crazy%20Bang%20Lycra%201.jpeg?alt=media&token=04bd4c03-a106-471c-b16c-4d7ddbafe99f",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCONJUNTOS%2FConjunto%20Crazy%20Bang%20Lycra%202.jpeg?alt=media&token=ca012849-5f33-43d7-8e84-ab83f03e0b19",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCONJUNTOS%2FConjunto%20Crazy%20Bang%20Lycra%203.jpeg?alt=media&token=903b3ad6-4d30-4884-8c54-cd49b31771b0",
    ],
    price: 38690,
  },
  {
    name: "Conjunto baltic spum",
    gender: "Nena",
    category: "Conjunto",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCONJUNTOS%2FConjunto%20batic%20corazon%20spum%201.jpeg?alt=media&token=8bbd41b9-6f00-4b22-a276-9a4b7fd3906e",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCONJUNTOS%2FConjunto%20batic%20corazon%20spum%202.jpeg?alt=media&token=bc0f2f6b-a7e7-4cbf-8912-c790a049a1e4",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCONJUNTOS%2FConjunto%20batic%20corazon%20spum%203.jpeg?alt=media&token=fc15604f-0981-4461-b72f-669c107a1dc1",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCONJUNTOS%2FConjunto%20batic%20corazon%20spum%204.jpeg?alt=media&token=63dfcafb-e21e-4186-9fa2-5909d8ce51ed",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCONJUNTOS%2FConjunto%20batic%20corazon%20spum%205.jpeg?alt=media&token=8e303887-26ea-4513-860a-b784ac917098",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCONJUNTOS%2FConjunto%20batic%20corazon%20spum%206.jpeg?alt=media&token=42735209-d2b6-4161-8fd3-4c5b6f69e21c",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCONJUNTOS%2FConjunto%20batic%20corazon%20spum%207.jpeg?alt=media&token=46ea4863-264a-4554-9089-3fd05f2e0c30",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FCONJUNTOS%2FConjunto%20batic%20corazon%20spum%208.jpeg?alt=media&token=2f523113-6156-41cd-9906-02bf77bf518d",
    ],
    price: 54321,
  },
  {
    name: "Remera botoneso",
    gender: "Nena",
    category: "Remera",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FREMERAS%2FRemera%20Botones%201.jpeg?alt=media&token=5f9745f1-5eef-42c2-a0b7-3f86549f4e73",
    ],
    price: 13500,
  },
  {
    name: "Vestido Morley",
    gender: "Nena",
    category: "Vestido",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FVESTIDOS%2FVestido%20Morley%202.jpeg?alt=media&token=a1c84691-287f-47fd-8dd4-90d87b016ef4",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FVESTIDOS%2FVestido%20Morley%203.jpeg?alt=media&token=03b5b663-d4e1-422d-b3c4-2841b427a605",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenas%2FVESTIDOS%2FVestido%20Morley%204.jpeg?alt=media&token=8cbdfac4-219f-42d7-8393-ad36a84ca2aa",
    ],
    price: 25000,
  },
  {
    name: "Remera just for me",
    gender: "Nene",
    category: "Remera",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenes%2FRemera%2FRemera%20Just%20For%20Me%201.jpeg?alt=media&token=8ed522cc-6fb3-4394-8047-88d1b16acd7a",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenes%2FRemera%2FRemera%20Just%20For%20Me%202.jpeg?alt=media&token=64a3fed9-7964-47de-bce8-752f45778fdd",
    ],
    price: 7000,
  },
  {
    name: "Remera gamer",
    gender: "Nene",
    category: "Remera",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenes%2FRemera%2FRemera%20gamer%201.jpeg?alt=media&token=f0d552f8-80c7-4fe8-b45e-bd77c0b214b9",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenes%2FRemera%2FRemera%20gamer%202.jpeg?alt=media&token=80163215-f8de-40d4-83c0-eeaa48336a29",
    ],
    price: 45000,
  },
  {
    name: "Remera impostor",
    gender: "Nene",
    category: "Remera",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenes%2FRemera%2FRemera%20impostor%201.jpeg?alt=media&token=94468fb3-f4b2-40fe-a13a-2313a7ce8af6",

      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenes%2FRemera%2FRemera%20impostor%202.jpeg?alt=media&token=383519ea-291e-4353-ad9f-c04f20c68377",
    ],
    price: 14456,
  },
  {
    name: "Remera waves",
    gender: "Nene",
    category: "Remera",
    mainMaterial: "Algodón",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/fir-autenticacion-95e3f.appspot.com/o/Imagenes%2FNi%C3%B1_s%2FNenes%2FRemera%2FRemera%20waves.jpeg?alt=media&token=76d5186e-3be5-4c79-87e6-cab0e98242a8",
    ],
    price: 14456,
  },
];

module.exports = products;
