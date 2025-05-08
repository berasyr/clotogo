'use client'

import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Notice (CloToGo)</h1>
      <p className="text-gray-600 mb-8">Effective Date: May 2025</p>

      <div className="prose prose-lg">
        <p className="mb-6">
          Your privacy is important to us. This policy explains how CloToGo collects, uses, and protects your information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. What We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Personal Information: Name, email, phone number, school, and location</li>
          <li>Order Data: Item requests, delivery addresses, order history</li>
          <li>Usage Data: How you interact with our website or services</li>
          <li>Marketing Info: Email sign-ups, social media interaction, and feedback forms</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p>We use your data to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Process and deliver your orders</li>
          <li>Communicate with you about updates or service changes</li>
          <li>Evaluate ambassador applications and performance</li>
          <li>Improve our platform, products, and marketing efforts</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing and Third Parties</h2>
        <p>We do not sell or rent your personal data. We only share data with:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Payment processors to complete transactions</li>
          <li>Delivery partners to fulfill orders</li>
          <li>Analytics tools to understand user behavior (anonymized)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p>
          We take appropriate security measures to protect your data, including encrypted transmission of payment data 
          and limiting internal access.
        </p>
        <p className="mt-4">
          However, no method of data transmission is 100% secure. By using our service, you acknowledge this risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies</h2>
        <p>We use cookies and tracking tools to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Improve site functionality</li>
          <li>Track marketing performance</li>
          <li>Personalize user experience</li>
        </ul>
        <p>
          You can disable cookies through your browser settings, but some features may not function properly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
        <p>You may:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Request access to the data we hold</li>
          <li>Ask us to correct or delete your data</li>
          <li>Opt-out of marketing communications at any time</li>
        </ul>
        <p>To exercise your rights, email us at support@clotogo.com</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Retention</h2>
        <p>
          We retain user and order data only as long as necessary to fulfill the purpose it was collected for, 
          or to comply with legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
        <p>
          We do not knowingly collect data from anyone under the age of 13.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Updates to This Policy</h2>
        <p>
          We may revise this policy. The latest version will always be available on our website. 
          Continued use of our services means you agree to any updates.
        </p>
      </div>
    </div>
  )
} 