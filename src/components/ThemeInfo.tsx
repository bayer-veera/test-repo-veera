import { useCloudFrontTheme, useThemeColors } from '../hooks/use-cloudfront-theme';

export function ThemeInfo() {
  const { currentTheme } = useCloudFrontTheme();
  const colors = useThemeColors();
  
  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg border text-xs">
      <div className="font-medium mb-1">Current Theme: {currentTheme}</div>
      <div className="flex space-x-2">
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.primary('500') }}></div>
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.secondary('500') }}></div>
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.success('500') }}></div>
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.danger('500') }}></div>
      </div>
    </div>
  );
}

export default ThemeInfo;
