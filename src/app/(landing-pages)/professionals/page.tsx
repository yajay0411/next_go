import LandingPage from '@/components/features/LandingPage/LandingPage';
import MainLayout from '@/core/Layouts/MainLayout/MainLayout';

export const metadata = {
  title: 'Professionals | Meta Go',
  description: 'Professionals',
};

export default function Professionals() {
  return (
    <>
      <MainLayout>
        <LandingPage variant="professionals" />
      </MainLayout>
    </>
  );
}
