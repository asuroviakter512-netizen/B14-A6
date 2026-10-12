'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { API_URLS, fallbackWorkouts, normalizeWorkoutResponse } from '@/lib/workouts';

const FitLogContext = createContext(null);
const PLAN_KEY = 'fitlog-plan-v1';
const SAVED_KEY = 'fitlog-saved-v1';

export function FitLogProvider({ children }) {
  const [workouts, setWorkouts] = useState(fallbackWorkouts);
  const [loading, setLoading] = useState(true);
  const [apiNotice, setApiNotice] = useState('');
  const [planIds, setPlanIds] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  const [doneIds, setDoneIds] = useState([]);
  const [toast, setToast] = useState('');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      setPlanIds(JSON.parse(localStorage.getItem(PLAN_KEY) || '[]'));
      setSavedIds(JSON.parse(localStorage.getItem(SAVED_KEY) || '[]'));
      setDoneIds(JSON.parse(localStorage.getItem('fitlog-done-v1') || '[]'));
    } catch { /* Ignore invalid local storage and start fresh. */ }
    setHydrated(true);
  }, []);
  useEffect(() => { if (hydrated) localStorage.setItem(PLAN_KEY, JSON.stringify(planIds)); }, [planIds, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem(SAVED_KEY, JSON.stringify(savedIds)); }, [savedIds, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem('fitlog-done-v1', JSON.stringify(doneIds)); }, [doneIds, hydrated]);

  useEffect(() => {
    let active = true;
    async function load() {
      for (const url of API_URLS) {
        try {
          const response = await fetch(url, { cache: 'no-store' });
          if (!response.ok) throw new Error(`API returned ${response.status}`);
          const payload = await response.json();
          const normalized = normalizeWorkoutResponse(payload);
          if (!normalized.length) throw new Error('API data shape was not recognized');
          if (active) { setWorkouts(normalized); setApiNotice(''); setLoading(false); }
          return;
        } catch (error) { console.warn('FitLog API attempt failed:', error.message); }
      }
      if (active) { setApiNotice('Live API unavailable — showing sample workouts so you can continue testing.'); setLoading(false); }
    }
    load();
    return () => { active = false; };
  }, []);

  const notify = useCallback((message) => {
    setToast(message);
    window.clearTimeout(window.__fitlogToastTimer);
    window.__fitlogToastTimer = window.setTimeout(() => setToast(''), 2600);
  }, []);
  const addToPlan = useCallback((id) => {
    if (planIds.includes(id)) { notify("This lift is already in today's plan."); return; }
    if (planIds.length >= 5) { notify('Your plan is full — finish a lift before adding another.'); return; }
    setPlanIds(current => current.includes(id) ? current : [...current, id]);
    setSavedIds(current => current.filter(item => item !== id));
    notify("Added to today's plan.");
  }, [planIds, notify]);
  const saveForLater = useCallback((id) => {
    if (savedIds.includes(id)) { notify('Already saved for later.'); return; }
    setSavedIds(current => [...current, id]);
    notify('Saved for later.');
  }, [savedIds, notify]);
  const removeFromPlan = useCallback((id) => { setPlanIds(current => current.filter(item => item !== id)); setDoneIds(current => current.filter(item => item !== id)); notify('Removed from today’s plan.'); }, [notify]);
  const removeFromSaved = useCallback((id) => { setSavedIds(current => current.filter(item => item !== id)); notify('Removed from saved workouts.'); }, [notify]);
  const markDone = useCallback((id) => { setDoneIds(current => current.includes(id) ? current : [...current, id]); notify('Workout marked as done. Nice work!'); }, [notify]);
  const value = useMemo(() => ({ workouts, loading, apiNotice, planIds, savedIds, doneIds, toast, addToPlan, saveForLater, removeFromPlan, removeFromSaved, markDone, notify }), [workouts, loading, apiNotice, planIds, savedIds, doneIds, toast, addToPlan, saveForLater, removeFromPlan, removeFromSaved, markDone, notify]);
  return <FitLogContext.Provider value={value}>{children}</FitLogContext.Provider>;
}
export function useFitLog() {
  const context = useContext(FitLogContext);
  if (!context) throw new Error('useFitLog must be used inside FitLogProvider');
  return context;
}
