// Complete Product Data
const gadgetsData = [
  { name: 'Smartwatch XYZ', description: 'Latest smartwatch with fitness tracking, heart rate monitor, and sleep tracking.', image: 'Smartwatch XYZ.jpg', category: 'gadgets' },
  { name: 'Wireless Earbuds 5.0', description: 'High-quality audio, noise cancellation, 20-hour battery life.', image: 'Wireless Earbuds 5.0.jpg', category: 'gadgets' },
  { name: 'VR Headset', description: 'Immersive virtual reality experience with 4K display and ergonomic design.', image: 'VR Headset.jpg', category: 'gadgets' },
  { name: 'Bluetooth Speaker', description: 'Portable Bluetooth speaker with deep bass and 360° sound.', image: 'Bluetooth Speaker.jpg', category: 'gadgets' },
  { name: 'Action Camera 4K', description: 'Waterproof action camera with 4K video recording and wide-angle lens.', image: '4k.jpg', category: 'gadgets' },
  { name: 'Drone 2000X', description: 'A high-performance drone with 4K camera and obstacle avoidance sensors.', image: 'Drone 2000X.jpg', category: 'gadgets' },
  { name: 'Smart Home Hub', description: 'Connects all your smart devices with a single, easy-to-use hub.', image: 'Smart Home Hub.jpg', category: 'gadgets' },
  { name: 'Smart Home Hub', description: 'Connects all your smart devices with a single, easy-to-use hub.', image: 'AllinOne.jpg', category: 'gadgets' },
];

// Add the other categories similarly...
const computersData = [
  { name: 'Laptop Pro 16', description: 'A high-performance laptop with Intel i7, 16GB RAM, and a 1TB SSD.', image: 'Laptop.jpg', category: 'computers' },
  { name: 'Mini Computer', description: 'Desktop computer with Intel i9, 32GB RAM, and a 1TB SSD + 2TB HDD.', image: 'mini.jpg', category: 'computers' },
  { name: 'Gaming PC Ultra', description: 'High-end gaming PC with NVIDIA RTX 3080, 32GB RAM, and 1TB SSD.', image: 'PC.jpg', category: 'computers' },
  { name: 'MacBook Air 2024', description: 'Lightweight and powerful MacBook with Apple M2 chip, 8GB RAM, and 512GB SSD.', image: 'MacBookAir.jpg', category: 'computers' },
];

const smartphonesData = [
  { name: 'Smartphone X1', description: 'Flagship smartphone with OLED display, Snapdragon 888, and 128GB storage.', image: 'OP11.jpg', category: 'smartphones' },
  { name: 'Smartphone Z10', description: 'Affordable smartphone with dual cameras, 6GB RAM, and 128GB storage.', image: 'OR10.jpg', category: 'smartphones' },
  { name: 'Smartphone Pro Max', description: 'Pro-level smartphone with 5G support, 12GB RAM, and 256GB storage.', image: 'I.15.jpg', category: 'smartphones' },
  { name: 'Laptop Stand X', description: 'The latest 5G smartphone with a foldable screen, Snapdragon 8 Gen 2, and 512GB storage.', image: 'LSP.jpg', category: 'smartphones' },
];

const wearablesData = [
  { name: 'Fitness Tracker 3.0', description: 'Wearable fitness tracker with heart rate monitor and step tracking.', image: 'FTP.jpg', category: 'wearables' },
  { name: 'Smart Glasses', description: 'Augmented reality glasses with integrated Bluetooth and voice assistant.', image: 'ARG.jpg', category: 'wearables' },
  { name: 'Smart Ring', description: 'Stylish smart ring for fitness tracking, payments, and notifications.', image: 'ring.jpg', category: 'wearables' },
  { name: 'Wireless Headphones', description: 'Premium wireless headphones with noise-canceling technology.', image: 'WireLessHeadphones.jpg', category: 'wearables' },
];

const accessoriesData = [
  { name: 'USB-C Hub', description: 'Multi-port USB-C hub for connecting peripherals to your laptop or smartphone.', image: 'USBH.jpg', category: 'accessories' },
  { name: 'Wireless Charger', description: 'Fast wireless charging pad for all Qi-enabled devices.', image: 'WCP.jpg', category: 'accessories' },
  { name: 'Portable Power Bank', description: 'Compact power bank with 20,000mAh capacity for quick device charging.', image: 'PB.jpg', category: 'accessories' },
  { name: 'Phone Case Pro', description: 'Durable and protective phone case with slim design and shock absorption.', image: 'PCD.jpg', category: 'accessories' },
];

// Combine all data
const allProducts = [
  ...gadgetsData, 
  ...computersData, 
  ...smartphonesData, 
  ...wearablesData, 
  ...accessoriesData
];

// Function to display the products
function displayProducts(products) {
  return products.map(product => {
    return `
      <div class="product-item" onclick="openImage('${product.image}', '${product.name}', '${product.description}')">
        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='images/fallback-image.jpg';" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
    `;
  }).join('');
}

// Display products on page load for each category
document.getElementById('gadgets-list').innerHTML = displayProducts(gadgetsData);
document.getElementById('computers-list').innerHTML = displayProducts(computersData);
document.getElementById('smartphones-list').innerHTML = displayProducts(smartphonesData);
document.getElementById('wearables-list').innerHTML = displayProducts(wearablesData);
document.getElementById('accessories-list').innerHTML = displayProducts(accessoriesData);

// Modal functionality
function openImage(image, name, description) {
  document.getElementById('modal-image').src = image;
  document.getElementById('modal-name').textContent = name;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('product-modal').style.display = 'flex';
}

// Close modal
document.getElementById('close-modal').addEventListener('click', function() {
  document.getElementById('product-modal').style.display = 'none';
});

// Search functionality
document.getElementById('search-bar').addEventListener('input', function() {
  const searchQuery = this.value.toLowerCase();
  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery) || 
    product.description.toLowerCase().includes(searchQuery)
  );

  document.getElementById('gadgets-list').innerHTML = displayProducts(filteredProducts.filter(p => p.category === 'gadgets'));
  document.getElementById('computers-list').innerHTML = displayProducts(filteredProducts.filter(p => p.category === 'computers'));
  document.getElementById('smartphones-list').innerHTML = displayProducts(filteredProducts.filter(p => p.category === 'smartphones'));
  document.getElementById('wearables-list').innerHTML = displayProducts(filteredProducts.filter(p => p.category === 'wearables'));
  document.getElementById('accessories-list').innerHTML = displayProducts(filteredProducts.filter(p => p.category === 'accessories'));
});
