# Fugitive Hunt Game

## Assumptions
- Cops select cities and vehicles independently.
- Vehicles must have enough range for a round trip.
- City selections must be unique for each cop.
- No actual database connections, using in-memory data structures for simplicity.

## Build Steps

### Backend
1. Navigate to `fugitive-hunt-backend` folder.
2. Install dependencies: `npm install`.
3. Start the server: `node src/server.js`.

### Frontend
1. Navigate to `fugitive-hunt-frontend` folder.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

## Deployment

### Backend

#### Using Render
1. **Create a Render Account:** If you don't have one, sign up at [Render](https://render.com/).
2. **Create a New Web Service:**
    - Go to your Render dashboard and click on "New" > "Web Service".
    - Connect your GitHub repository containing the backend code.
    - Use the following settings:
      - **Environment:** Node
      - **Build Command:** `npm install`
      - **Start Command:** `node src/server.js`
    - Click "Create Web Service".

#### Configure CORS
Ensure your backend server handles CORS requests from your frontend URL. Update your backend code to include the necessary CORS headers.

### Frontend

1. **Build the Project:**
    ```sh
    npm run build
    ```

2. **Install Netlify CLI:**
    ```sh
    npm install -g netlify-cli
    ```

3. **Login to Netlify:**
    ```sh
    netlify login
    ```

4. **Deploy the Project:**
    ```sh
    netlify deploy --prod --dir=build
    ```

## Environment Variables

### Backend
Set up the following environment variables in Render:
- Ensure you set any necessary environment variables for your backend services.

### Frontend
1. **Netlify Environment Variables:**
    - Go to your Netlify dashboard.
    - Navigate to "Site Settings" > "Build & Deploy" > "Environment".
    - Add a new variable like `REACT_APP_API_BASE_URL` with your backend URL.

2. **Using Environment Variables in React:**
    ```javascript
    // src/api/index.js
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    ```

## API Endpoints
Ensure your frontend code points to the correct backend endpoints:
```javascript
// src/api/index.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://your-render-backend-url.com';

export const getCities = () => axios.get(`${API_BASE_URL}/cities`);
export const selectCity = (cop, city) => axios.post(`${API_BASE_URL}/select-city`, { cop, city });
export const getVehicles = () => axios.get(`${API_BASE_URL}/vehicles`);
export const selectVehicle = (cop, vehicle) => axios.post(`${API_BASE_URL}/select-vehicle`, { cop, vehicle });


