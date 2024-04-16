import '@/src/app/globals.css'
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { Card } from '@/src/components/Card/Card';
import { Item } from '@/src/interfaces/featuresInterfaces';
import { getFeature } from '@/src/services/featuresServices';
import { AppNameDisplay } from '@/src/components/AppNameDisplay/AppNameDisplay';

const FeaturePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [feature, setFeature] = useState<Item>();

  const onGetFeature = async (id: string) => {
    const response = await getFeature(id);
    setFeature(response);
  };

  useEffect(() => {
    if (id) onGetFeature(id as string);
  }, [id]);

  

  return (
    <>
    <div className='text-center
    '>
      <AppNameDisplay />
    </div>
    <div className='h-screen flex items-center justify-center'>
      {feature && <Card feature={feature} />}
    </div>
    </>
  );
};

export default FeaturePage;