import './globals.css';
import { FitLogProvider } from '@/components/FitLogProvider';
import { Footer, Navbar, Toast } from '@/components/SiteShell';
export const metadata = { title: 'FitLog — Workout Library', description: 'A dark, no-nonsense gym companion. Pick a lift, lock it into today’s plan, and track your progress.' };
export default function RootLayout({ children }) {
  return <html lang="en"><body><FitLogProvider><Navbar/><main>{children}</main><Footer/><Toast/></FitLogProvider></body></html>;
}
