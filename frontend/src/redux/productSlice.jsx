import { createSlice } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000";
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [
       {_id: "1", name: "Hydrating Face Mask", brand: "GlowSkin", type: "mask", description: "Hydrating and soothing face mask", price: 15, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["dry", "normal"]},
    {_id: "2", name: "Oil Control Cleanser", brand: "FreshFace", type: "cleanser", description: "Reduces excess oil and cleans pores", price: 12, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["oily", "combination"]},
    {_id: "3", name: "Daily Moisturizer SPF30", brand: "SunGuard", type: "moisturizer", description: "Lightweight moisturizer with SPF protection", price: 20, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "4", name: "Vitamin C Serum", brand: "BrightSkin", type: "serum", description: "Brightens skin and reduces dark spots", price: 25, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "5", name: "Soothing Aloe Gel", brand: "NatureCare", type: "moisturizer", description: "Calms irritated skin", price: 10, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["sensitive"]},
    {_id: "6", name: "Exfoliating Scrub", brand: "FreshFace", type: "cleanser", description: "Removes dead skin cells gently", price: 18, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "7", name: "Deep Cleansing Mask", brand: "GlowSkin", type: "mask", description: "Detoxifies and tightens pores", price: 22, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["oily"]},
    {_id: "8", name: "Night Repair Serum", brand: "BrightSkin", type: "serum", description: "Repairs skin overnight", price: 30, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "9", name: "Matte Finish Moisturizer", brand: "FreshFace", type: "moisturizer", description: "Controls shine for oily skin", price: 19, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["oily"]},
    {_id: "10", name: "Hydrating Cleanser", brand: "NatureCare", type: "cleanser", description: "Gentle cleanser for dry skin", price: 14, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["dry"]},
    {_id: "11", name: "SPF50 Sunblock", brand: "SunGuard", type: "sunblock", description: "High protection against UV rays", price: 28, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "12", name: "Calming Face Mask", brand: "NatureCare", type: "mask", description: "Reduces redness and irritation", price: 21, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["sensitive"]},
    {_id: "13", name: "Brightening Cleanser", brand: "GlowSkin", type: "cleanser", description: "Removes dullness and impurities", price: 17, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "14", name: "Anti-Aging Serum", brand: "BrightSkin", type: "serum", description: "Reduces fine lines and wrinkles", price: 35, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "15", name: "Daily Moisturizer", brand: "FreshFace", type: "moisturizer", description: "Keeps skin hydrated all day", price: 16, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["normal", "dry"]},
    {_id: "16", name: "Clay Mask", brand: "GlowSkin", type: "mask", description: "Absorbs excess oil and impurities", price: 23, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["oily", "combination"]},
    {_id: "17", name: "Soothing Serum", brand: "NatureCare", type: "serum", description: "Calms sensitive skin", price: 27, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["sensitive"]},
    {_id: "18", name: "Gentle Cleanser", brand: "FreshFace", type: "cleanser", description: "Suitable for daily use", price: 13, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "19", name: "Night Moisturizer", brand: "BrightSkin", type: "moisturizer", description: "Hydrates and repairs skin overnight", price: 24, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "20", name: "SPF30 Daily Sunblock", brand: "SunGuard", type: "sunblock", description: "Lightweight daily protection", price: 20, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "21", name: "Vitamin E Serum", brand: "BrightSkin", type: "serum", description: "Nourishes and protects skin", price: 26, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "22", name: "Purifying Clay Cleanser", brand: "GlowSkin", type: "cleanser", description: "Removes impurities and oil", price: 18, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["oily"]},
    {_id: "23", name: "Revitalizing Face Mask", brand: "FreshFace", type: "mask", description: "Refreshes and energizes skin", price: 22, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["normal"]},
    {_id: "24", name: "Hydrating Serum", brand: "NatureCare", type: "serum", description: "Deep hydration for dry skin", price: 28, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["dry"]},
    {_id: "25", name: "Matte Face Powder", brand: "GlowSkin", type: "moisturizer", description: "Controls shine and hydrates lightly", price: 15, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["oily"]},
    {_id: "26", name: "Soothing Cleanser", brand: "FreshFace", type: "cleanser", description: "Gentle on sensitive skin", price: 14, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["sensitive"]},
    {_id: "27", name: "Brightening Moisturizer", brand: "BrightSkin", type: "moisturizer", description: "Evens skin tone", price: 21, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "28", name: "Exfoliating Face Mask", brand: "GlowSkin", type: "mask", description: "Removes dead skin gently", price: 20, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "29", name: "Repairing Night Serum", brand: "NatureCare", type: "serum", description: "Repairs and regenerates skin overnight", price: 32, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    {_id: "30", name: "Daily Cleanser", brand: "FreshFace", type: "cleanser", description: "For all skin types, daily use", price: 12, image: "https://via.placeholder.com/300x200", skinTypeSuitable: ["all"]},
    ],
      loading: false,
  error: null,
  },
  reducers: {},
});

export default productSlice.reducer;