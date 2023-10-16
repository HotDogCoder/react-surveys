import { Provider } from "react-redux";
import store from "./store";
import NotFound from "./errors/not_found";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connect from "./pages/connect";
import Home from "./pages/home";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import PrivacyTerms from "./pages/privacy-terms";
import ServiceTerms from "./pages/service-terms";
import Survey from "./pages/survey";

function App() {

  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
            <Routes>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/survey" element={<Survey/>}/>
              <Route path="/connect" element={<Connect/>}/>
              <Route path="/privacy-terms" element={<PrivacyTerms/>}/>
              <Route path="/service-terms" element={<ServiceTerms/>}/>
            </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
