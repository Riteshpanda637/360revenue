import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface DynamicArticleCardProps {
  earningMethods: string;
  className?: string; // 👈 Add optional className prop
}

type Props = {
  params: { slug: string };
};

export const DynamicArticleCard: React.FC<DynamicArticleCardProps> = ({
  earningMethods,
  className = '',
}) => {
  return (
     <Link href={`/articles/details/${encodeURIComponent(earningMethods)}`}>
                <Card className={`overflow-hidden hover:shadow-lg w-full md:w-[300px] h-[150px] transition-shadow text-center ${className}`}>
      <CardContent className="p-6 text-center text-base mt-6 font-medium  rounded-xl py-5">
        {earningMethods}
      </CardContent>
    </Card>
     </Link>

  );
};
