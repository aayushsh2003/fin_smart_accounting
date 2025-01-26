import React from 'react';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { AccountingCompliancePage } from './pages/services/AccountingCompliancePage';
import { AccountingPayrollServicesIndia } from './pages/services/AccountingPayrollServicesIndia';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PricingPage } from './pages/PricingPage';
import { CareersPage } from './pages/CareersPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';

export default function App() {
  // Simple routing based on pathname
  const pathname = window.location.pathname;
  const blogPostMatch = pathname.match(/^\/blog\/(.+)$/);

  return (
    <Layout>
      {pathname === '/about' ? (
        <AboutPage />
      ) : pathname === '/services' ? (
        <ServicesPage />
      ) : pathname === '/services/accounting-compliance' ? (
        <AccountingCompliancePage />
      ) : pathname === '/services/accounting-payroll-services-india' ? (
        <AccountingPayrollServicesIndia />
      ) : pathname === '/blog' ? (
        <BlogPage />
      ) : pathname === '/pricing' ? (
        <PricingPage />
      ) : pathname === '/careers' ? (
        <CareersPage />
      ) : pathname === '/testimonials' ? (
        <TestimonialsPage />
      ) : pathname === '/contact' ? (
        <ContactPage />
      ) : pathname === '/privacy-policy' ? (
        <PrivacyPolicyPage />
      ) : pathname === '/terms' ? (
        <TermsPage />
      ) : pathname === '/case-studies' ? (
        <CaseStudiesPage />
      ) : blogPostMatch ? (
        <BlogPostPage postId={blogPostMatch[1]} />
      ) : (
        <HomePage />
      )}
    </Layout>
  );
}