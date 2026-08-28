/**
 * Your Doctor Abroad (yourdoctorabroad.com)
 * Centralized Google Analytics 4 (GA4) & Event Tracking Module
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. CONFIGURATION
  // Replace 'G-XXXXXXXXXX' with your real Google Analytics 4 Measurement ID
  // =========================================================================
  const GA_MEASUREMENT_ID = window.GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

  // Load Google Analytics gtag.js only if a valid ID is provided or in production
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: true,
      anonymize_ip: true
    });
  } else {
    // Development/Fallback logger when ID is not yet configured
    window.gtag = function (command, eventName, eventParams) {
      if (command === 'event') {
        console.log(`[GA4 Event (Preview)]: ${eventName}`, eventParams || {});
      }
    };
  }

  // =========================================================================
  // 2. AUTOMATIC CONVERSION & INTERACTION TRACKING
  // =========================================================================
  document.addEventListener('DOMContentLoaded', function () {
    // 2.1 Track Clicks on WhatsApp, Phone, Email & CTA Buttons
    document.addEventListener('click', function (e) {
      const targetLink = e.target.closest('a');
      if (!targetLink) return;

      const href = targetLink.getAttribute('href') || '';
      const buttonText = (targetLink.innerText || targetLink.getAttribute('aria-label') || '').trim();

      // Track WhatsApp Clicks (Core Business Lead)
      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'Lead',
          event_label: buttonText || 'WhatsApp Link',
          link_url: href,
          page_location: window.location.pathname
        });
      }

      // Track Phone Call Clicks
      else if (href.startsWith('tel:')) {
        window.gtag('event', 'phone_click', {
          event_category: 'Contact',
          event_label: href.replace('tel:', ''),
          page_location: window.location.pathname
        });
      }

      // Track Email Clicks
      else if (href.startsWith('mailto:')) {
        window.gtag('event', 'email_click', {
          event_category: 'Contact',
          event_label: href.replace('mailto:', ''),
          page_location: window.location.pathname
        });
      }

      // Track Primary CTA / Booking Link Clicks
      else if (
        targetLink.classList.contains('nav-cta') ||
        targetLink.classList.contains('btn-primary') ||
        href.includes('book.html')
      ) {
        window.gtag('event', 'booking_cta_click', {
          event_category: 'Engagement',
          event_label: buttonText || 'Book CTA',
          link_url: href,
          page_location: window.location.pathname
        });
      }
    });

    // 2.2 Track Form Submissions (Lead Generation)
    const forms = document.querySelectorAll('form');
    forms.forEach(function (form) {
      form.addEventListener('submit', function () {
        const formId = form.getAttribute('id') || form.getAttribute('name') || 'consultation_form';
        window.gtag('event', 'generate_lead', {
          event_category: 'Form',
          event_label: formId,
          page_location: window.location.pathname
        });
      });
    });
  });
})();
