'use client';

import { useRouter } from 'next/navigation';

const GoBack: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const router = useRouter();

  return (
    <div className={className ? `${className}-go-back` : 'go-back'} onClick={() => router.back()}>
      {children}
    </div>
  );
};

export default GoBack;
