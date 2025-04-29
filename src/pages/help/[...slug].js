import { useRouter } from 'next/router';
import Link from 'next/link';

const HelpPage = () => {
  const router = useRouter();
  const { slug = [] } = router.query;

  const renderContent = () => {
    if (slug.length === 0) {
      return (
        <div>
          <h1>Help Center</h1>
          <p>Welcome to the Help Center. Choose a topic below:</p>
          <ul>
            <li><Link href="/help/faqs">FAQs</Link></li>
            <li><Link href="/help/contact">Contact</Link></li>
            <li><Link href="/help/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      );
    }

    switch (slug[0]) {
      case 'faqs':
        return <p className="text-gray-700">Frequently Asked Questions: [Add your FAQs here]</p>;
      case 'contact':
        return <p className="text-gray-700">Contact Us at contact@moviehouse.com</p>;
      case 'privacy':
        return <p className="text-gray-700">Privacy Policy: Your data is safe with us.</p>;
      default:
        return <p className="text-red-600">Help topic not found.</p>;
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Help Page</h1>
      {renderContent()}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Quick Links:</h3>
        <ul className="list-disc list-inside mt-2">
          <li><Link href="/help/faqs" className="text-blue-600 hover:underline">FAQs</Link></li>
          <li><Link href="/help/contact" className="text-blue-600 hover:underline">Contact</Link></li>
          <li><Link href="/help/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HelpPage;
