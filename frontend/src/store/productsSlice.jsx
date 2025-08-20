import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: "1",
      name: "Hydrating Cream",
      brand: "GlowSkin",
      type: "daily",
      description: "moisturizer",
      ingredients: ["Water", "Glycerin", "Vitamin E"],
      price: 25.99,
      skinTypeSuitable: ["dry", "normal"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "2",
      name: "Vitamin C Serum",
      brand: "BrightSkin",
      type: "treatment",
      description: "serum",
      ingredients: ["Vitamin C", "Hyaluronic Acid"],
      price: 30.50,
      skinTypeSuitable: ["all"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "3",
      name: "Gentle Cleanser",
      brand: "PureCare",
      type: "daily",
      description: "cleanser",
      ingredients: ["Aloe Vera", "Chamomile Extract"],
      price: 20.00,
      skinTypeSuitable: ["sensitive", "normal"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "4",
      name: "SPF 50 Sunblock",
      brand: "SunGuard",
      type: "daily",
      description: "sunblock",
      ingredients: ["Zinc Oxide", "Titanium Dioxide"],
      price: 18.99,
      skinTypeSuitable: ["all"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "5",
      name: "Clay Mask",
      brand: "NaturalFace",
      type: "weekly",
      description: "mask",
      ingredients: ["Kaolin Clay", "Green Tea Extract"],
      price: 22.50,
      skinTypeSuitable: ["oily", "combination"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "6",
      name: "Night Repair Serum",
      brand: "GlowSkin",
      type: "treatment",
      description: "serum",
      ingredients: ["Retinol", "Peptides"],
      price: 35.00,
      skinTypeSuitable: ["dry", "mature"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "7",
      name: "Foaming Cleanser",
      brand: "PureCare",
      type: "daily",
      description: "cleanser",
      ingredients: ["Salicylic Acid", "Aloe Vera"],
      price: 19.50,
      skinTypeSuitable: ["oily", "acne-prone"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "8",
      name: "Moisturizing Mask",
      brand: "NaturalFace",
      type: "weekly",
      description: "mask",
      ingredients: ["Honey", "Shea Butter"],
      price: 24.00,
      skinTypeSuitable: ["dry", "sensitive"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "9",
      name: "Brightening Toner",
      brand: "GlowSkin",
      type: "daily",
      description: "cleanser",
      ingredients: ["Witch Hazel", "Vitamin C"],
      price: 21.00,
      skinTypeSuitable: ["all"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "10",
      name: "Soothing Gel Mask",
      brand: "NaturalFace",
      type: "weekly",
      description: "mask",
      ingredients: ["Aloe Vera", "Cucumber Extract"],
      price: 23.50,
      skinTypeSuitable: ["sensitive", "dry"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "11",
      name: "Oil Control Serum",
      brand: "PureCare",
      type: "treatment",
      description: "serum",
      ingredients: ["Niacinamide", "Zinc PCA"],
      price: 29.00,
      skinTypeSuitable: ["oily", "acne-prone"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "12",
      name: "Daily Moisturizer SPF 30",
      brand: "SunGuard",
      type: "daily",
      description: "moisturizer",
      ingredients: ["Shea Butter", "Sunscreen"],
      price: 27.50,
      skinTypeSuitable: ["all"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "13",
      name: "Calming Face Oil",
      brand: "GlowSkin",
      type: "night",
      description: "moisturizer",
      ingredients: ["Jojoba Oil", "Chamomile Extract"],
      price: 28.50,
      skinTypeSuitable: ["sensitive", "dry"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "14",
      name: "Exfoliating Mask",
      brand: "NaturalFace",
      type: "weekly",
      description: "mask",
      ingredients: ["Lactic Acid", "Kaolin Clay"],
      price: 26.00,
      skinTypeSuitable: ["oily", "combination"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "15",
      name: "Hydrating Serum",
      brand: "BrightSkin",
      type: "treatment",
      description: "serum",
      ingredients: ["Hyaluronic Acid", "Vitamin B5"],
      price: 32.00,
      skinTypeSuitable: ["dry", "normal"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "16",
      name: "Deep Cleansing Foam",
      brand: "PureCare",
      type: "daily",
      description: "cleanser",
      ingredients: ["Charcoal", "Aloe Vera"],
      price: 20.50,
      skinTypeSuitable: ["oily", "acne-prone"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "17",
      name: "Rejuvenating Night Cream",
      brand: "GlowSkin",
      type: "night",
      description: "moisturizer",
      ingredients: ["Retinol", "Vitamin E"],
      price: 38.00,
      skinTypeSuitable: ["mature", "dry"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "18",
      name: "Mattifying Lotion",
      brand: "PureCare",
      type: "daily",
      description: "moisturizer",
      ingredients: ["Niacinamide", "Aloe Vera"],
      price: 22.00,
      skinTypeSuitable: ["oily", "combination"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "19",
      name: "Bright Eyes Serum",
      brand: "BrightSkin",
      type: "treatment",
      description: "serum",
      ingredients: ["Caffeine", "Hyaluronic Acid"],
      price: 34.00,
      skinTypeSuitable: ["all"],
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: "20",
      name: "Ultra Hydrating Mask",
      brand: "NaturalFace",
      type: "weekly",
      description: "mask",
      ingredients: ["Shea Butter", "Honey", "Aloe Vera"],
      price: 29.50,
      skinTypeSuitable: ["dry", "sensitive"],
      image: "https://via.placeholder.com/300x200"
    }
  ]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // لاحقًا: addProduct, updateProduct, deleteProduct
  }
});

export const selectProducts = state => state.products.products;
export default productsSlice.reducer;

