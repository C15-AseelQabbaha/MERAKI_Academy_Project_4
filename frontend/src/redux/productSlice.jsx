import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000";

const initialState = {
  products: [
      {_id: "1", name: "Hydrating Face Mask", brand: "GlowSkin", type: "mask", description: "Hydrating and soothing face mask", price: 10, image: "https://neutriherbs.ng/cdn/shop/files/Hyaluronicacidmask-4.jpg?v=1711391015", skinTypeSuitable: ["dry", "normal"]},
    {_id: "2", name: "Oil Control Cleanser", brand: "ceraVe", type: "cleanser", description: "Reduces excess oil and cleans pores", price: 12, image: "https://static.sweetcare.com/img/prd/488/v-638200520064264091/cerave-007772ve_01.webp", skinTypeSuitable: ["oily", "combination"]},
    {_id: "3", name: "Daily Moisturizer SPF30", brand: "AVeeno", type: "moisturizer", description: "Lightweight moisturizer with SPF", price: 20, image: "https://images.ctfassets.net/mgaihfszrtka/vvr0wk0hI5gQcJQVjOKSP/50402247b305461b20434bab7922cc76/3oz_oobwb-min-en-us", skinTypeSuitable: ["all"]},
    {_id: "4", name: "Vitamin C Serum", brand: "BrightSkin", type: "serum", description: "Brightens skin and reduces dark spots", price: 25, image: "https://img-1.kwcdn.com/product/fancy/7e12ed5d-eaf3-4b08-b1ea-00a93739db0b.jpg?imageView2/2/w/1300/q/80/format/webp", skinTypeSuitable: ["all"]},
    {_id: "5", name: "Soothing Aloe Gel", brand: "NatureCare", type: "moisturizer", description: "Calms irritated skin", price: 10, image: "https://m.media-amazon.com/images/I/81uFftLRO1L._UF1000,1000_QL80_.jpg", skinTypeSuitable: ["sensitive"]},
    {_id: "6", name: "Exfoliating Scrub", brand: "FreshFace", type: "cleanser", description: "Removes dead skin cells gently", price: 18, image: "https://img.ltwebstatic.com/images3_spmp/2024/06/05/49/1717591395c59747eb25eb25aa1c0710a36c4118ed_thumbnail_384x.webp", skinTypeSuitable: ["all"]},
    {_id: "7", name: "Deep Cleansing Mask", brand: "GlowSkin", type: "mask", description: "Detoxifies and tightens pores", price: 22, image: "https://img-1.kwcdn.com/product/fancy/6cf8d0f5-84d1-482b-a8ee-7e72d3e33c00.jpg?imageView2/2/w/800/q/70/format/webp", skinTypeSuitable: ["oily"]},
    {_id: "8", name: "Night Repair Serum", brand: "BrightSkin", type: "serum", description: "Repairs skin overnight", price: 30, image: "https://m.media-amazon.com/images/I/613qC7l5JCL._SL1500_.jpg", skinTypeSuitable: ["all"]},
    {_id: "9", name: "Matte Finish Moisturizer", brand: "OLAY", type: "moisturizer", description: "Controls shine for oily skin", price: 19, image: "https://cdn11.bigcommerce.com/s-gud7r2x2lu/images/stencil/500x659/products/422/2566/Olay_Regenerist_Whip_Face_Moisturizer_FF_CE_2__21391.1651498518.jpg?c=2", skinTypeSuitable: ["oily"]}, 
    {_id: "10", name: "Hydrating Cleanser", brand: "Bioderma", type: "cleanser", description: "Gentle cleanser for dry skin", price: 20, image: "https://static.sweetcare.com/img/prd/488/v-638200519567506851/bioderma-006274bd_01.webp", skinTypeSuitable: ["dry"]},
    {_id: "11", name: "SPF50 Sunblock", brand: "VICHY", type: "sunblock", description: "High protection against UV rays", price: 21, image: "https://static.sweetcare.com/img/prd/488/v-638545845523445384/vichy-002198vy_01.webp", skinTypeSuitable: ["all"]},
    {_id: "12", name: "Calming Face Mask", brand: "NatureCare", type: "mask", description: "Reduces redness and irritation", price: 21, image: "https://img-1.kwcdn.com/product/fancy/5381ea7f-94f0-42f6-860d-eaa07ca371ba.jpg?imageView2/2/w/800/q/70/format/webp", skinTypeSuitable: ["sensitive"]},
    {_id: "13", name: "Brightening Cleanser", brand: "GlowSkin", type: "cleanser", description: "Removes dullness and impurities", price: 17, image: "https://shop.beauty-heroes.com/cdn/shop/files/BrighteningCleanser.jpg?v=1715371009&width=3467", skinTypeSuitable: ["all"]},
    {_id: "14", name: "Anti-Aging Serum", brand: "BrightSkin", type: "serum", description: "Reduces fine lines and wrinkles", price: 35, image: "https://img-1.kwcdn.com/product/fancy/11c27f65-f3d2-4294-aa6e-78c4eb7c218c.jpg?imageView2/2/w/800/q/70/format/webp", skinTypeSuitable: ["all"]},
    {_id: "15", name: "Daily Moisturizer", brand: "Cetaphil", type: "moisturizer", description: "Keeps skin hydrated all day", price: 16, image: "https://m.media-amazon.com/images/I/61EIQGcD4eL._SL1500_.jpg", skinTypeSuitable: ["normal", "dry"]},
    {_id: "16", name: "Clay Mask", brand: "GlowSkin", type: "mask", description: "Absorbs excess oil and impurities", price: 23, image: "https://www.dotandkey.com/cdn/shop/products/5-Pink-Clay-Mask.jpg?v=1706167541", skinTypeSuitable: ["oily", "combination"]},
    {_id: "17", name: "Soothing Serum", brand: "The Ordinary", type: "serum", description: "Calms sensitive skin", price: 27, image: "https://static.sweetcare.com/img/prd/488/v-638494029185981965/the-ordinary-020102td_01.webp", skinTypeSuitable: ["sensitive"]},
    {_id: "18", name: "Gentle Cleanser", brand: "cetaphil", type: "cleanser", description: "Suitable for daily use", price: 13, image: "https://static.sweetcare.com/img/prd/488/v-638200520080481715/cetaphil-004512cc_02.webp", skinTypeSuitable: ["all"]},
    {_id: "20", name: "SPF30 Daily Sunblock", brand: "OSHEA", type: "sunblock", description: "Lightweight daily protection", price: 20, image: "https://www.osheaherbals.com/cdn/shop/files/UVShield-Sun-Block-Cream-SPF-30-120-GM-jpg_01.jpg?v=1752238328", skinTypeSuitable: ["all"]},
    {_id: "21", name: "Vitamin E Serum", brand: "AOAZ", type: "serum", description: "Nourishes and protects skin", price: 26, image: "https://img-1.kwcdn.com/product/fancy/d9cf587e-3a31-4d12-9e7d-3b2969df96c4.jpg?imageView2/2/w/800/q/70/format/webp", skinTypeSuitable: ["all"]},
  
]
}



const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state) => state.products,
  },





  
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;


       