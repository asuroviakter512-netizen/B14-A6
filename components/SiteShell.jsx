'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, ArrowUpRight, Bookmark, Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useFitLog } from './FitLogProvider';

export function Logo() {
  return <Link href="/" className="brand" aria-label="FitLog home"><span className="brand-mark"><Activity size={19} strokeWidth={2.8}/></span><span>FIT<span className="brand-light">LOG</span></span></Link>;
}
export function Navbar() {
  const pathname = usePathname();
  const { planIds, savedIds } = useFitLog();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [{ href: '/', label: 'Workout', active: pathname === '/' || pathname.startsWith('/workouts/') }, { href: '/my-plan', label: 'My Plan', active: pathname === '/my-plan' }];
  return <header className="site-header"><div className="container nav-inner"><Logo/><nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">{links.map(link => <Link key={link.href} onClick={() => setMenuOpen(false)} className={`nav-link ${link.active ? 'active' : ''}`} href={link.href}>{link.label}</Link>)}</nav><div className="nav-actions"><Link href="/my-plan" className="nav-badge plan-badge"><Dumbbell size={14}/><span>Plan</span><b>{planIds.length}</b></Link><Link href="/my-plan?tab=saved" className="nav-badge saved-badge"><Bookmark size={14}/><span>Saved</span><b>{savedIds.length}</b></Link></div><button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button></div></header>;
}
export function Footer() { return <footer className="site-footer"><div className="container footer-inner"><Logo/><p>© 2026 FitLog — Workout Library. Train hard, log honest.</p><a href="#top" className="back-top">Back to top <ArrowUpRight size={15}/></a></div></footer>; }
export function Toast() { const { toast } = useFitLog(); return toast ? <div role="status" className="toast"><span className="toast-dot"/>{toast}</div> : null; }
