import { LegalContent } from '@/components/features/LegalContent/LegalContent';
import privacyPolicyData from './privacy-policy.data.json';
import MainLayout from '@/core/Layouts/MainLayout/MainLayout';
import { Metadata } from 'next';

// NOTE: SSG COMPONENT
export const dynamic = 'force-static';

// Set: SEO
export const metadata: Metadata = {
  title: 'Privacy Policy | MetaGo',
  description:
    'Read our privacy policy for using MetaGo services, including eligibility requirements, payment policies, and user responsibilities.',
};

export default function PrivacyPolicy() {
  return (
    <MainLayout showNavbar={true} showFooter={true}>
      <LegalContent title={privacyPolicyData.title} sectionsData={privacyPolicyData.sections} />
    </MainLayout>
  );
}
