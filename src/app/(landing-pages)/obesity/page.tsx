import LandingPage from '@/components/features/LandingPage/LandingPage';
import MainLayout from '@/core/Layouts/MainLayout/MainLayout';

export const metadata = {
  title: 'Obesity | Meta Go',
  description: 'Obesity',
};

export default function Obesity() {
  return (
    <MainLayout>
      <LandingPage variant="obesity" />
    </MainLayout>
  );
}
