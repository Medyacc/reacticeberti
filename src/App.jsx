import './App.css';
import i18n from "i18next";
import Languagedetector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Privacy from './pages/privacy/Privacy';
import Terms from './pages/terms/Terms';
import Faqs from './pages/faqs/Faqs';

i18n
  .use(initReactI18next)
  .use(Languagedetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
      caches: ["cookie"],
    },
    backend: {
      loadPath: '/reacticeberti/locales/{{lng}}/translation.json',
    }
  });

export default function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reacticeberti/" element={<Home />} />
        <Route path="/reacticeberti/privacy" element={<Privacy />} />
        <Route path="/reacticeberti/terms" element={<Terms />} />
        <Route path="/reacticeberti/faqs" element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  )
}