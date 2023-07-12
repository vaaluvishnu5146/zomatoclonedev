import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    saveProducts: (state, action) => {
      /**
       * action - {type: "", payload: []}
       */
      console.log("HERE", state, action);
      if (action.payload) {
        state.products = [];
        state.products.push(...action.payload);
      }
    },
    updateProduct: (state, action) => {},
    deleteProduct: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { saveProducts, updateProduct, deleteProduct } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
