import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LandingPage } from './pages/landingPage'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import {WhyShopWithUs} from './pages/WhyShopWithUs.tsx'
import {PaymentMethods} from './pages/PaymentMethods.tsx'
import {AfterSalesSupport} from './pages/AfterSalesSupport.tsx'
import {ReturnAndRefundPolicy} from './pages/Returnandrefundpolicy.tsx'
import {PrivacyPolicy} from './pages/Privacypolicy.tsx'
import {TermsAndConditions} from './pages/Termsandconditions.tsx'
import {AboutUs} from './pages/Aboutus.tsx'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/why-shop-with-us" element={<WhyShopWithUs />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/after-sales-support" element={<AfterSalesSupport />} />
        <Route path="/return-and-refund-policy" element={<ReturnAndRefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)