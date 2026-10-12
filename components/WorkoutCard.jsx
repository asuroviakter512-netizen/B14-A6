import Link from 'next/link';
import { ArrowUpRight, Clock3, Flame, Star } from 'lucide-react';
export default function WorkoutCard({ workout, compact = false }) {
  return <Link href={`/workouts/${encodeURIComponent(workout.id)}`} className={`workout-card ${compact ? 'compact-card' : ''}`}>
    <div className="card-image-wrap"><img className="card-image" src={workout.image} alt={`${workout.name} exercise`} loading="lazy"/><span className="image-index">{String(workout.id).slice(0,2).toUpperCase()}</span><span className="card-arrow"><ArrowUpRight size={18}/></span></div>
    <div className="card-content"><div className="tag-row">{(workout.category || []).slice(0,3).map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><h3>{workout.name}</h3><p className="equipment">{workout.equipment}</p><div className="card-stats"><span><Clock3 size={14}/>{workout.duration} min</span><span><Flame size={14}/>{workout.calories} kcal</span><span><Star size={14}/>{Number(workout.rating).toFixed(1)}</span></div></div>
  </Link>;
}
