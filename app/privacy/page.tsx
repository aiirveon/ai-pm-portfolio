import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardContent className="p-8">
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Last Updated: November 26, 2025</p>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mt-6 mb-4">
                Contact Form Data Collection
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                When you submit the contact form on this website, I collect:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
                <li>Timestamp of submission</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mt-6 mb-4">
                How I Use Your Data
              </h2>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-6">
                <li><strong>Purpose:</strong> To respond to your inquiry only</li>
                <li><strong>Storage:</strong> Data is stored securely via Formspree</li>
                <li><strong>Retention:</strong> Deleted after 90 days or upon request</li>
                <li><strong>Third Parties:</strong> I do not sell or share your data</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mt-6 mb-4">
                Your Rights (GDPR Compliant)
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-6">
                <li>Request data deletion (contact me at your email)</li>
                <li>Request a copy of your data</li>
                <li>Opt out of future contact</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mt-6 mb-4">
                Cookies & Analytics
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                This site uses no tracking cookies. Analytics (if enabled) are anonymized via Vercel Analytics and do not collect personally identifiable information.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mt-6 mb-4">
                Contact for Privacy Concerns
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                For any privacy-related questions or data requests, please email me directly through the contact form or at stephen.kihuni@example.com (replace with your actual email).
              </p>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-900 rounded-lg p-4 mt-8">
                <p className="text-emerald-800 dark:text-emerald-400 text-sm">
                  <strong>UK GDPR & Data Protection Act 2018 Compliant</strong>
                  <br />
                  This privacy policy complies with UK data protection laws applicable to portfolio websites.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
