import { useRouter } from 'next/router';
import Link from 'next/link';

const HelpPage = () => {
  const router = useRouter();
  const { slug = [] } = router.query;

  const renderContent = () => {
    if (slug.length === 0) {
      return <p>Welcome to the Help Center. Choose a topic below:</p>;
    }

    switch (slug[0]) {
      case 'faqs':
        return <p>Frequently Asked Questions: [Add your FAQs here]</p>;
      case 'contact':
        return <p>Contact Us at contact@moviehouse.com</p>;
      case 'privacy':
        return <p>Privacy Policy: Your data is safe with us.</p>;
      default:
        return <p>Help topic not found.</p>;
    }
  };

  return (
    <div>
      <h1>Help Page</h1>
      {renderContent()}
      <br />
      <h3>Quick Links:</h3>
      <ul>
        <li><Link href="/help/faqs">FAQs</Link></li>
        <li><Link href="/help/contact">Contact</Link></li>
        <li><Link href="/help/privacy">Privacy Policy</Link></li>
      </ul>
    </div>
  );
};

export default HelpPage;
