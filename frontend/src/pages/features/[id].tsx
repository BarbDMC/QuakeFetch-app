import { useRouter } from 'next/router';

const FeaturePage = () => {
  const router = useRouter();
  const { id } = router.query;  // `id` matches the dynamic segment in the file name `[id].tsx`

  return (
    <div>
      <h1>Feature ID: {id}</h1>
    </div>
  );
};

export default FeaturePage;