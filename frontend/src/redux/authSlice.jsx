export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password, age, skinType }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BASE_URL}/users/register`, {
        name,
        email,
        password,
        age,
        skinType,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Signup failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
    
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || action.payload;
      })

     
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
      
        state.user = action.payload.user; 
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || action.payload;
      });
  },
});