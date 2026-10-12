import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() { return <section className="not-found container"><p className="eyebrow">ERROR / 404</p><h1>WRONG <span>TURN.</span></h1><p>This page isn’t in the workout library. Let’s get you back on track.</p><Link href="/" className="button button-primary"><ArrowLeft size={16}/> BACK TO WORKOUTS</Link></section>; }
