import { Suspense } from 'react';
import GlobalLoader from '@/components/common/Loader/GlobalLoader';

// Simulate a delayed component
async function DelayedContent() {
  await new Promise((res) => setTimeout(res, 2000)); // 2s delay
  return (
    <div>
      <h1>Welcome to test</h1>
      <p>This is a test page after 2s delay.</p>
    </div>
  );
}

export default function Test() {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <DelayedContent />
    </Suspense>
  );
}
