import React from "react"; // Import React library
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering the app to the DOM
import App from "./App"; // Import the main App component
import { Provider } from "react-redux"; // Import the Redux Provider component to integrate Redux
import { store, persistor } from "./redux/store"; // Import the Redux store and persistor from your store configuration
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate to manage persistence of Redux state

// Select the root DOM element where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application within the context of React Strict Mode and Redux
root.render(
  <> 
    {/* React Strict Mode for highlighting potential problems during development */}
    <Provider store={store}> 
      {/* Wrap the app in the Redux Provider, passing the store to make Redux available throughout the app */}
      <PersistGate loading={null} persistor={persistor}>
        {/* PersistGate ensures that the app is only rendered after Redux state is rehydrated */}
        <App />
      </PersistGate>
    </Provider>
  </>
);
