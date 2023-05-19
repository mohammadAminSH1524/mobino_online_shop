import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";
import { brandProducts } from "../../components/functions/functions";
import { toast } from "react-toastify";
import { useState } from "react";
import { json } from "react-router-dom";

// export const getAsyncProducts = createAsyncThunk(
//   "getAllProducts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("http://localhost:3001/products");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue([], error.message);
//     }
//   }
// );

export const getAsyncProducts = createAsyncThunk("getAllProducts",  () => {
  return axios.get("https://database.iran.liara.run/products").then(Response => Response.data)
});

// export const getAsyncProducts = createAsyncThunk(
//   "getAllProducts",
//   async (_, { rejectWithValue }) => {
//     try {
//      await fetch("https://database.iran.liara.run/products")
//         .then((res) => res.json())
//         .then((json) => (p = json));
//     } catch (error) {
//       return rejectWithValue([], error.message);
//     }
//   }
// );

const initialState = {
  value: 10,
  error: null,
  loading: false,
  products: [],
  cart: [],
  commodityPrices: 0,
  totalShoppingCart: 0,
};

export const sortSlice = createSlice({
  name: "sort",
  initialState: initialState,
  reducers: {
    filtering: (state, action) => {
      switch (action.payload) {
        case "apple": {
          const appleProducts = brandProducts(state.products, "apple");

          return {
            ...state,
            products: appleProducts,
          };
        }
        case "samsung": {
          const samsungProducts = brandProducts(state.products, "samsung");

          return {
            ...state,
            products: samsungProducts,
          };
        }
        case "xiaomi": {
          const xiaomiProducts = brandProducts(state.products, "xiaomi");

          return {
            ...state,
            products: xiaomiProducts,
          };
        }

        case "available": {
          const filteredProducts = state.products.filter((product) => {
            return product.quantity > 0;
          });
          console.log("dsa");

          return {
            ...state,
            products: filteredProducts,
          };
        }

        case "green": {
          const filteredProducts = state.products.filter((product) => {
            return product.color === "سبز" || product.color === "سبز تیره";
          });

          console.log("filter grren");
          return {
            ...state,
            products: filteredProducts,
          };
        }

        case "blue": {
          const filteredProducts = state.products.filter((product) => {
            return product.color === "آبی روشن" || product.color === "آبی";
          });

          return {
            ...state,
            products: filteredProducts,
          };
        }

        case "white": {
          const filteredProducts = state.products.filter((product) => {
            return product.color === "سفید" || product.color === "کرم";
          });

          return {
            ...state,
            products: filteredProducts,
          };
        }

        case "purple": {
          const filteredProducts = state.products.filter((product) => {
            return product.color === "یاسی" || product.color === "بنفش";
          });

          return {
            ...state,
            products: filteredProducts,
          };
        }

        case "black": {
          const filteredProducts = state.products.filter((product) => {
            return product.color === "مشکی";
          });

          return {
            ...state,
            products: filteredProducts,
          };
        }

        case "gray": {
          const filteredProducts = state.products.filter((product) => {
            return product.color === "خاکستری";
          });

          return {
            ...state,
            products: filteredProducts,
          };
        }
        case "pink": {
          const filteredProducts = state.products.filter((product) => {
            return product.color === "گل بهی" || product.color === "صورتی";
          });

          return {
            ...state,
            products: filteredProducts,
          };
        }
        case "red": {
          const filteredProducts = state.products.filter((product) => {
            return product.color === "قرمز" || product.color === "مسی";
          });

          return {
            ...state,
            products: filteredProducts,
          };
        }

        case "silver": {
          const filteredProducts = state.products.filter((product) => {
            return product.color === "نقره ای";
          });

          return {
            ...state,
            products: filteredProducts,
          };
        }

        default:
          return state;
      }
    },
    sorting: (state, action) => {
      switch (action.payload) {
        case "bestselling": {
          const sortedProducts = _.orderBy(
            state.products,
            ["avgRate"],
            ["desc"]
          );
          return {
            ...state,
            products: sortedProducts,
            value: 10,
          };
        }

        case "mostPopular": {
          const sortedProducts = _.orderBy(
            state.products,
            ["numberOfPoints"],
            ["desc"]
          );
          return {
            ...state,
            products: sortedProducts,
            value: 10,
          };
        }

        case "cheapest": {
          const sortedProducts = _.orderBy(
            state.products,
            ["offPrice"],
            ["asc"]
          );
          return {
            ...state,
            products: sortedProducts,
            value: 10,
          };
        }

        case "expensive": {
          const sortedProducts = _.orderBy(
            state.products,
            ["offPrice"],
            ["desc"]
          );
          return {
            ...state,
            products: sortedProducts,
            value: 10,
          };
        }
        default:
          return state;
      }
    },

    addToCart: (state, action) => {
      const updatedCart = [...state.cart];
      const payloadId = action.payload;
      const index = updatedCart.findIndex((item) => item.id === payloadId);

      const findedProduct = state.products.find(
        (product) => product.id === payloadId
      );
      if (index < 0) {
        toast("به سبد خرید اضافه شد", {
          position: "top-right",
          type: "success",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        updatedCart.push({ ...findedProduct, cartQuantity: 1 });
        return {
          ...state,
          cart: updatedCart,
          commodityPrices: state.commodityPrices + findedProduct.price,
          totalShoppingCart: state.totalShoppingCart + findedProduct.offPrice,
        };
      } else {
        const selectedProduct = { ...updatedCart[index] };

        if (selectedProduct.cartQuantity < selectedProduct.quantity) {
          selectedProduct.cartQuantity++;
          updatedCart[index] = selectedProduct;
          return {
            ...state,
            cart: updatedCart,
            commodityPrices: state.commodityPrices + findedProduct.price,
            totalShoppingCart: state.totalShoppingCart + findedProduct.offPrice,
          };
        } else {
          toast("حداکثر تعداد انتخاب شده است", {
            position: "top-right",
            type: "error",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }

      // return {
      //   ...state,
      //   cart: updatedCart,
      //   commodityPrices: state.commodityPrices + findedProduct.price,
      //   totalShoppingCart: state.totalShoppingCart + findedProduct.offPrice,
      // };
    },

    deleteCartItem: (state, action) => {
      const updatedCart = [...state.cart];
      const payloadId = action.payload;
      const index = updatedCart.findIndex((item) => item.id === payloadId);
      const selectedProduct = { ...updatedCart[index] };
      const findedProduct = state.cart.find(
        (product) => product.id === payloadId
      );
      console.log("delete and decreament cart item");

      if (selectedProduct.cartQuantity > 1) {
        selectedProduct.cartQuantity--;
        updatedCart[index] = selectedProduct;

        return {
          ...state,
          cart: updatedCart,
          commodityPrices: state.commodityPrices - findedProduct.price,
          totalShoppingCart: state.totalShoppingCart - findedProduct.offPrice,
        };
      } else {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== payloadId
        );
        return {
          ...state,
          cart: filteredCart,
          commodityPrices: state.commodityPrices - findedProduct.price,
          totalShoppingCart: state.totalShoppingCart - findedProduct.offPrice,
        };
      }
    },

    deleteAllCartItems: (state, action) => {
      console.log("delete all");
      return {
        ...state,
        cart: [],
        commodityPrices: 0,
        totalShoppingCart: 0,
      };
    },
  },

  extraReducers: {
    [getAsyncProducts.pending]: (state, action) => {
      // return { ...state, products: [], loading: true, error: null };
      // state.loading = true;
    },
    [getAsyncProducts.fulfilled]: (state, action) => {
      // return {
      //   ...state,
      //   products: action.payload,
      //   loading: false,
      //   error: null,
      // };
      state.loading = false;
      state.products = action.payload;
    },
    [getAsyncProducts.rejected]: (state, action) => {
      // return {
      //   ...state,
      //   products: [],
      //   loading: false,
      //   error: action.error,
      // };
      state.loading = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  sorting,
  filtering,
  addToCart,
  deleteAllCartItems,
  increament,
  deleteCartItem,
} = sortSlice.actions;

export default sortSlice.reducer;
