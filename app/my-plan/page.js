
'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  ArrowRight,
  Check,
  Clock3,
  Flame,
  Plus,
  Star,
  X,
} from 'lucide-react';

import { useFitLog } from '@/components/FitLogProvider';

function PlanWorkoutRow({ workout, done, onDone, onRemove }) {
  return (
    <article className={`plan-row ${done ? 'plan-row-done' : ''}`}>
      <Link
        href={`/workouts/${encodeURIComponent(workout.id)}`}
        className="plan-thumb"
      >
        <img src={workout.image} alt={workout.name} />
        <span>{done ? <Check size={18} /> : '↗'}</span>
      </Link>

      <div className="plan-row-main">
        <div className="tag-row">
          {workout.category.slice(0, 2).map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/workouts/${encodeURIComponent(workout.id)}`}
          className="plan-row-title"
        >
          {workout.name}
        </Link>

        <p className="equipment">{workout.equipment}</p>

        <div className="card-stats">
          <span>
            <Clock3 size={14} /> {workout.duration} min
          </span>
          <span>
            <Flame size={14} /> {workout.calories} kcal
          </span>
          <span>
            <Star size={14} /> {Number(workout.rating).toFixed(1)}
          </span>
        </div>
      </div>

      <div className="plan-row-actions">
        <Link
          className="mini-button mini-button-light"
          href={`/workouts/${encodeURIComponent(workout.id)}`}
        >
          VIEW DETAILS <ArrowRight size={14} />
        </Link>

        <button
          className={`mini-button ${done ? 'mini-done' : 'mini-button-lime'}`}
          onClick={onDone}
          disabled={done}
        >
          {done ? (
            <>
              <Check size={14} /> DONE
            </>
          ) : (
            <>
              <Check size={14} /> MARK AS DONE
            </>
          )}
        </button>

        <button
          className="remove-button"
          onClick={onRemove}
          aria-label={`Remove ${workout.name}`}
        >
          <X size={17} />
        </button>
      </div>
    </article>
  );
}

function MyPlanContent() {
  const searchParams = useSearchParams();

  const {
    workouts,
    loading,
    planIds,
    savedIds,
    doneIds,
    removeFromPlan,
    removeFromSaved,
    markDone,
  } = useFitLog();

  const [tab, setTab] = useState('plan');

  useEffect(() => {
    if (searchParams.get('tab') === 'saved') {
      setTab('saved');
    } else {
      setTab('plan');
    }
  }, [searchParams]);

  const planned = useMemo(
    () =>
      planIds
        .map((id) =>
          workouts.find((workout) => String(workout.id) === String(id))
        )
        .filter(Boolean),
    [planIds, workouts]
  );

  const saved = useMemo(
    () =>
      savedIds
        .map((id) =>
          workouts.find((workout) => String(workout.id) === String(id))
        )
        .filter(Boolean),
    [savedIds, workouts]
  );

  const minutes = planned.reduce(
    (sum, workout) => sum + Number(workout.duration || 0),
    0
  );

  const calories = planned.reduce(
    (sum, workout) => sum + Number(workout.calories || 0),
    0
  );

  const visible = tab === 'plan' ? planned : saved;

  return (
    <section className="my-plan-page">
      <div className="container">
        <div className="plan-page-head">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> YOUR TRAINING LOG
            </p>
            <h1>
              MY <span>PLAN</span>
            </h1>
            <p className="section-subtitle">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

          <div className="plan-day-stamp">
            <span>TRAINING LOG</span>
            <b>DAY / 01</b>
            <span>CONSISTENCY OVER INTENSITY</span>
          </div>
        </div>

        <div className="metrics-grid">
          <div className="metric-card">
            <span>EXERCISES</span>
            <b>
              {planIds.length.toString().padStart(2, '0')}
              <small> / 05</small>
            </b>
            <p>IN TODAY&apos;S PLAN</p>
            <div className="metric-progress">
              <i
                style={{
                  width: `${Math.min((planIds.length / 5) * 100, 100)}%`,
                }}
              />
            </div>
          </div>

          <div className="metric-card">
            <span>TOTAL MINUTES</span>
            <b>
              {minutes}
              <small> MIN</small>
            </b>
            <p>PLANNED TRAINING TIME</p>
            <div className="metric-icon">
              <Clock3 size={19} />
            </div>
          </div>

          <div className="metric-card">
            <span>CALORIES</span>
            <b>
              {calories}
              <small> KCAL</small>
            </b>
            <p>ESTIMATED BURN</p>
            <div className="metric-icon">
              <Flame size={19} />
            </div>
          </div>
        </div>

        <div className="plan-list-head">
          <div className="plan-tabs" role="tablist">
            <button
              role="tab"
              aria-selected={tab === 'plan'}
              className={tab === 'plan' ? 'selected' : ''}
              onClick={() => setTab('plan')}
            >
              TODAY&apos;S PLAN <span>{planIds.length}</span>
            </button>

            <button
              role="tab"
              aria-selected={tab === 'saved'}
              className={tab === 'saved' ? 'selected' : ''}
              onClick={() => setTab('saved')}
            >
              SAVED <span>{savedIds.length}</span>
            </button>
          </div>

          <span className="plan-list-caption">
            {tab === 'plan'
              ? 'THE WORK YOU COMMITTED TO'
              : 'LIFTS FOR ANOTHER DAY'}
          </span>
        </div>

        {loading ? (
          <div className="plan-loading">
            <span className="spinner" /> Loading workouts…
          </div>
        ) : visible.length ? (
          <div className="plan-rows">
            {visible.map((workout) => (
              <PlanWorkoutRow
                key={workout.id}
                workout={workout}
                done={doneIds.some(
                  (id) => String(id) === String(workout.id)
                )}
                onDone={() => markDone(workout.id)}
                onRemove={() =>
                  tab === 'plan'
                    ? removeFromPlan(workout.id)
                    : removeFromSaved(workout.id)
                }
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">
              <Plus size={25} />
            </div>

            <p className="eyebrow">NOTHING HERE YET</p>

            <h2>
              {tab === 'plan' ? 'NOTHING HERE YET' : 'NO SAVED LIFTS'}
            </h2>

            <p>
              {tab === 'plan'
                ? 'Browse the library and add a lift to get today moving.'
                : 'Save a workout you want to come back to later.'}
            </p>

            <Link href="/#library" className="button button-primary">
              GO TO WORKOUTS <ArrowRight size={16} />
            </Link>
          </div>
        )}

        <div className="plan-bottom-note">
          <span>SHOW UP FOR YOURSELF.</span>
          <span>
            {planIds.length >= 5
              ? 'DAILY CAP REACHED'
              : `${5 - planIds.length} OPEN ${
                  5 - planIds.length === 1 ? 'SLOT' : 'SLOTS'
                } LEFT`}
          </span>
        </div>
      </div>
    </section>
  );
}

export default function MyPlanPage() {
  return (
    <Suspense
      fallback={
        <div className="plan-loading">
          <span className="spinner" /> Loading your plan…
        </div>
      }
    >
      <MyPlanContent />
    </Suspense>
  );
}
