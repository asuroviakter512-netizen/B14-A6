'use client';
import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import WorkoutCard from './WorkoutCard';
import { useFitLog } from './FitLogProvider';
export default function WorkoutLibrary() {
  const { workouts, loading, apiNotice } = useFitLog();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('duration');
  const filtered = useMemo(() => workouts.filter(w => `${w.name} ${w.category.join(' ')} ${w.equipment}`.toLowerCase().includes(query.toLowerCase())).slice().sort((a,b) => Number(a[sort] || 0) - Number(b[sort] || 0)), [workouts, query, sort]);
  return <section id="library" className="section library-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">PICK YOUR NEXT MOVE</p><h2>THE <span>LIBRARY</span></h2><p className="section-subtitle">Twelve lifts covering every major muscle group.</p></div><div className="library-count"><span>{String(filtered.length).padStart(2,'0')}</span> / {String(workouts.length).padStart(2,'0')} EXERCISES</div></div>
    <div className="library-toolbar"><label className="search-box"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search lifts or muscle groups…" aria-label="Search workouts"/></label><label className="sort-box"><SlidersHorizontal size={16}/><span>Sort by</span><select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort workouts"><option value="duration">Duration</option><option value="calories">Calories</option><option value="rating">Rating</option></select></label></div>
    {apiNotice && <p className="api-notice">{apiNotice}</p>}
    {loading ? <div className="loading-grid">{Array.from({length:6}).map((_,i)=><div className="skeleton-card" key={i}><div className="skeleton-image"/><div className="skeleton-line"/><div className="skeleton-line short"/></div>)}</div> : filtered.length ? <div className="workout-grid">{filtered.map(workout => <WorkoutCard key={workout.id} workout={workout}/>)}</div> : <div className="empty-state small-empty"><h3>NO LIFTS FOUND</h3><p>Try a different workout name or muscle group.</p></div>}
    <div className="library-bottom"><span>BUILT FOR CONSISTENCY. DESIGNED FOR PROGRESS.</span><span>01 — {String(filtered.length).padStart(2,'0')}</span></div>
  </div></section>;
}
