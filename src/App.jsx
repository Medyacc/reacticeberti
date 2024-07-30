import './App.css';
import { useEffect } from "react";
import i18n from "i18next";
import Languagedetector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import cookies from 'js-cookie';
import Home from "./pages/Home";

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
      loadPath: '/locales/{{lng}}/translation.json',
    }
  });

export default function App() {
  const { t } = useTranslation();

  const lng = cookies.get('i18next') || "en"

  useEffect(() => {
    window.document.dir = i18n.dir()
  }, [lng])

  return (
    <>
      <Home />
    </>
  )
}