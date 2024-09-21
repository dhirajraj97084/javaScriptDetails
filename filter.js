const user=[87,45,78,90,123,456,789,9,90];

const find=user.filter((num)=> num>90)
//console.log(find);

const ecommerceData = [
    {
      productId: 101,
      productName: "Wireless Mouse",
      category: "Electronics",
      price: 25.99,
      stock: 120,
      rating: 4.5,
      reviews: 102,
      isAvailable: true
    },
    {
      productId: 102,
      productName: "Bluetooth Headphones",
      category: "Electronics",
      price: 59.99,
      stock: 80,
      rating: 4.8,
      reviews: 85,
      isAvailable: true
    },
    {
      productId: 103,
      productName: "Yoga Mat",
      category: "Fitness",
      price: 19.99,
      stock: 200,
      rating: 4.3,
      reviews: 120,
      isAvailable: true
    },
    {
      productId: 104,
      productName: "Gaming Laptop",
      category: "Computers",
      price: 999.99,
      stock: 15,
      rating: 4.9,
      reviews: 45,
      isAvailable: false
    },
    {
      productId: 105,
      productName: "Smartphone",
      category: "Electronics",
      price: 499.99,
      stock: 50,
      rating: 4.7,
      reviews: 200,
      isAvailable: true
    }
  ];

  const filtering=ecommerceData.filter((ecom)=>ecom.isAvailable==true );
  
  console.log(filtering);
  