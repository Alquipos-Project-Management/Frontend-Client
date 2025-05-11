const https = require('https');
const fs = require('fs');
const path = require('path');

const brands = [
  {
    name: 'caterpillar',
    url: 'https://cdn.worldvectorlogo.com/logos/caterpillar.svg'
  },
  {
    name: 'john-deere',
    url: 'https://cdn.worldvectorlogo.com/logos/john-deere.svg'
  },
  {
    name: 'bobcat',
    url: 'https://cdn.worldvectorlogo.com/logos/bobcat.svg'
  },
  {
    name: 'hilti',
    url: 'https://cdn.worldvectorlogo.com/logos/hilti.svg'
  },
  {
    name: 'bosch',
    url: 'https://cdn.worldvectorlogo.com/logos/bosch.svg'
  },
  {
    name: 'makita',
    url: 'https://cdn.worldvectorlogo.com/logos/makita.svg'
  },
  {
    name: 'dewalt',
    url: 'https://cdn.worldvectorlogo.com/logos/dewalt.svg'
  },
  {
    name: 'komatsu',
    url: 'https://cdn.worldvectorlogo.com/logos/komatsu.svg'
  }
];

const outputDir = path.join(__dirname, '../public/images/brands');

// Crear el directorio si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

brands.forEach(brand => {
  const outputPath = path.join(outputDir, `${brand.name}.svg`);
  
  https.get(brand.url, (response) => {
    if (response.statusCode === 200) {
      response.pipe(fs.createWriteStream(outputPath));
      console.log(`Descargado: ${brand.name}`);
    } else {
      console.error(`Error al descargar ${brand.name}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error al descargar ${brand.name}:`, err);
  });
}); 