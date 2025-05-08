#!/bin/bash

# Create necessary directories
mkdir -p public/assets/images/{hero,categories,brands,products}

# Move existing brand logos
mv public/images/brands/* public/assets/images/brands/

# Create default images for hero carousel
cp public/large-hydraulic-excavator-cat-6030-caterpillar.jpg public/assets/images/hero/hero-1.jpg
cp public/large-hydraulic-excavator-cat-6030-caterpillar.jpg public/assets/images/hero/hero-2.jpg
cp public/large-hydraulic-excavator-cat-6030-caterpillar.jpg public/assets/images/hero/hero-3.jpg

# Create default category images
cp public/large-hydraulic-excavator-cat-6030-caterpillar.jpg public/assets/images/categories/andamios-default.jpg
cp public/large-hydraulic-excavator-cat-6030-caterpillar.jpg public/assets/images/categories/maquinaria-default.jpg
cp public/large-hydraulic-excavator-cat-6030-caterpillar.jpg public/assets/images/categories/herramientas-default.jpg
cp public/large-hydraulic-excavator-cat-6030-caterpillar.jpg public/assets/images/categories/default.jpg

# Create default product image
cp public/large-hydraulic-excavator-cat-6030-caterpillar.jpg public/assets/images/products/default-product.jpg

# Create default brand image
cp public/images/brands/caterpillar.svg public/assets/images/brands/default-brand.svg

echo "Images have been organized successfully!" 