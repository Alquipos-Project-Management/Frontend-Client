#!/bin/bash

# Create the hero directory if it doesn't exist
mkdir -p public/assets/images/hero

# Download a suitable image for maquinaria
curl -o public/assets/images/hero/hero-2.jpg "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"

echo "Maquinaria image has been downloaded successfully!" 