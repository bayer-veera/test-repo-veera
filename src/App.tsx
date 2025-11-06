import { useState } from 'react';
import { Lock, Mail, User, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import { bayerSansClasses } from './lib/bayer-sans';
import LoginForm from './components/LoginForm';
import BrandLogo from './components/BrandLogo';
import ThemeInfo from './components/ThemeInfo';
import { useCloudFrontTheme } from './hooks/use-cloudfront-theme';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const { isLoading: themeLoading } = useCloudFrontTheme();

  if (themeLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Brand/Image */}
      <div className="hidden md:flex md:w-1/2 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="relative z-10 flex flex-col justify-between h-full p-12">
          <div>
            <BrandLogo className="h-10 w-auto text-white" />
          </div>
          
          <div className="space-y-6">
            <h1 className={`${bayerSansClasses.heading.h1} text-white`}>
              {isSignUp ? 'Join our community' : 'Welcome back'}
            </h1>
            <p className="text-white/80 text-xl max-w-md">
              {isSignUp 
                ? 'Create an account to access all features and start your journey with us.'
                : 'Log in to access your dashboard, projects, and continue your work.'}
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="h-1 w-12 bg-white/30 rounded-full"></div>
              <div className="h-1 w-8 bg-white/60 rounded-full"></div>
              <div className="h-1 w-4 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="text-white/70 text-sm">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <p>© 2023 Stewart Seeds. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Right side - Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="md:hidden mb-8 flex justify-center">
            <BrandLogo className="h-10 w-auto text-primary-600" />
          </div>
          
          <div className="text-center mb-8">
            <h2 className={`${bayerSansClasses.heading.h3} text-gray-900`}>
              {isSignUp ? 'Create your account' : 'Sign in to your account'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isSignUp 
                ? 'Already have an account?' 
                : "Don't have an account yet?"} 
              <button 
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary-600 hover:text-primary-700 font-medium ml-1 focus:outline-none"
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </div>
          
          <LoginForm isSignUp={isSignUp} />
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </button>
              <button className="flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Theme Info */}
      <ThemeInfo />
    </div>
  );
}

export default App;
