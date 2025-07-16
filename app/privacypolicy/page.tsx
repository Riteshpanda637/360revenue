// pages/privacy.js
import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – 360revenue</title>
        <meta
          name="description"
          content="Privacy Policy for How to Earn Money Online — we collect no personal data directly; we use Google Analytics, Search Console, and AdSense."
        />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p>
          Welcome to <strong>360revenue</strong>. We do <em>not</em> collect any personal information
          directly from visitors. Below is how we use third-party tools.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">1. Information We Don’t Collect</h2>
        <ul className="list-disc ml-6">
          <li>No names, email addresses, or other personal identifiers.</li>
          <li>No contact form submissions or direct user input storage.</li>
          <li>No cookies or trackers run by us directly.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">2. Analytics & Search Console</h2>
        <p>
          We use <strong>Google Analytics</strong> to measure page views, session duration, and general traffic
          patterns. We also use <strong>Google Search Console</strong> to monitor site performance in Google’s search index.
        </p>
        <p>
          Both tools collect only anonymized usage data via cookies and do not reveal any personally identifiable
          information to us. For details, see:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Google Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/analytics/answer/6004245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Google Analytics Data Collection
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/webmasters/answer/4559176"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Google Search Console Overview
            </a>
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">3. Third-Party Advertising</h2>
        <p>
          We monetize with <strong>Google AdSense</strong>. Google may use cookies and web beacons to serve ads
          based on prior visits to our site or other sites. We have no control over their data collection or use.
          For their policies, please see&nbsp;
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Google Ads Privacy & Terms
          </a>.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">4. Log Files & Server Data</h2>
        <p>
          Our web host automatically records basic connection data (IP address, browser type, referring site,
          timestamps). This is used solely for server maintenance and security, and is not linked to any personal
          identifier.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">5. Children’s Privacy</h2>
        <p>
          We do not knowingly collect data from children under 13. If you believe we have inadvertantly collected
          any such data. please email to{" "}
            <a
    href="mailto:riteshpanda292@gmail.com"
    className="text-blue-600 underline"
  >
     riteshpanda292@gmail.com
  </a>.
          &nbsp;and we will delete it.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">6. Changes to This Policy</h2>
        <p>
          We may update this policy occasionally. Any changes will be posted here with a new “Last updated” date.
        </p>
        <p className="text-sm text-gray-500">Last updated: June 24, 2025</p>

      <h2 className="mt-8 text-2xl font-semibold">7. Contact Us</h2>
<p>
  For questions about this policy, please email us at { " "} 
  <a
    href="mailto:riteshpanda292@gmail.com"
    className="text-blue-600 underline"
  >
     riteshpanda292@gmail.com
  </a>.
</p>
      </main>
    </>
  )
}
