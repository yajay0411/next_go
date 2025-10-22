import { LegalContent } from '@/components/features/LegalContent/LegalContent';
import termsConditionsData from './terms-conditions.data.json';
import { Metadata } from 'next';
import MainLayout from '@/core/Layouts/MainLayout/MainLayout';

// NOTE: SSG COMPONENT
export const dynamic = 'force-static';

// Set: SEO
export const metadata: Metadata = {
  title: 'Terms and Conditions | MetaGo',
  description:
    'Read our terms and conditions for using MetaGo services, including eligibility requirements, payment policies, and user responsibilities.',
};

export default function TermsAndConditions() {
  return (
    <MainLayout showNavbar={true} showFooter={true}>
      <LegalContent title={termsConditionsData.title} sectionsData={termsConditionsData.sections} />
    </MainLayout>
  );
}
