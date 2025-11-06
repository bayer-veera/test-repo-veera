import { Sprout } from 'lucide-react';

interface BrandLogoProps {
  className?: string;
}

const BrandLogo = ({ className = "h-8 w-auto" }: BrandLogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Sprout className="mr-2" />
      <span className="font-bold text-xl">Stewart Seeds</span>
    </div>
  );
};

export default BrandLogo;
