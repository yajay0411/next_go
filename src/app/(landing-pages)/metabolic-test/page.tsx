import LandingPage from '@/components/features/LandingPage/LandingPage';
import MainLayout from '@/core/Layouts/MainLayout/MainLayout';

export const metadata = {
  title: 'Metabolic Test | Meta Go',
  description: 'Metabolic Test',
};

export default function MetabolicTest() {
  return (
    <MainLayout>
      <LandingPage variant="metabolic-test" />
    </MainLayout>
  );
}
