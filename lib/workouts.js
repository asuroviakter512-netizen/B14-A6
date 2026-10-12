export const API_URLS = [
  'https://api.abcz.workers.dev/api/fitlog',
  'https://api.api-store.workers.dev/api/fitlog',
];

// A safe fallback keeps the app usable if the public API is temporarily unavailable.
export const fallbackWorkouts = [
  { id: 'bench-press', name: 'Barbell Bench Press', category: ['Chest', 'Arms'], equipment: 'Barbell, Bench', duration: 25, calories: 180, rating: 4.8, difficulty: 'Intermediate', sets: 4, reps: '6–8', description: 'A compound press that builds chest thickness, triceps, and pressing power from a stable bench.', image: '/workout-athlete.png', instructions: ['Lie flat on the bench with your eyes under the bar and feet firmly on the floor.', 'Grip the bar slightly wider than shoulder-width and keep your wrists stacked.', 'Lower the bar with control toward the middle of your chest.', 'Press up until your arms are extended without bouncing the bar.'] },
  { id: 'goblet-squat', name: 'Goblet Squat', category: ['Legs', 'Glutes'], equipment: 'Dumbbell', duration: 18, calories: 140, rating: 4.7, difficulty: 'Beginner', sets: 3, reps: '10–12', description: 'A simple squat variation that builds leg strength and reinforces a strong upright position.', image: '/workout-athlete.png', instructions: ['Hold one dumbbell close to your chest.', 'Stand with feet around shoulder-width apart.', 'Sit your hips down while keeping your chest lifted.', 'Drive through your feet to return to standing.'] },
  { id: 'lat-pulldown', name: 'Lat Pulldown', category: ['Back', 'Arms'], equipment: 'Cable Machine', duration: 20, calories: 155, rating: 4.7, difficulty: 'Beginner', sets: 3, reps: '10–12', description: 'A controlled vertical pull targeting the lats and upper back.', image: '/workout-athlete.png', instructions: ['Adjust the thigh pad and take a comfortable wide grip.', 'Sit tall and brace your core.', 'Pull the bar toward your upper chest by driving elbows down.', 'Return the bar slowly until your arms are extended.'] },
  { id: 'romanian-deadlift', name: 'Romanian Deadlift', category: ['Legs', 'Glutes', 'Back'], equipment: 'Barbell', duration: 22, calories: 190, rating: 4.9, difficulty: 'Intermediate', sets: 4, reps: '8–10', description: 'A hip-hinge movement for the hamstrings, glutes, and posterior chain.', image: '/workout-athlete.png', instructions: ['Stand tall holding the bar in front of your thighs.', 'Keep a soft bend in your knees and push hips backward.', 'Lower the bar close to your legs while keeping your back neutral.', 'Drive hips forward to stand tall again.'] },
  { id: 'dumbbell-shoulder-press', name: 'Dumbbell Shoulder Press', category: ['Shoulders', 'Arms'], equipment: 'Dumbbells', duration: 17, calories: 125, rating: 4.6, difficulty: 'Intermediate', sets: 3, reps: '8–10', description: 'An overhead press to develop shoulder strength and upper-body stability.', image: '/workout-athlete.png', instructions: ['Sit or stand with dumbbells at shoulder height.', 'Brace your torso and keep your ribs down.', 'Press the weights overhead in a controlled path.', 'Lower slowly back to shoulder height.'] },
  { id: 'barbell-curl', name: 'Barbell Curl', category: ['Arms'], equipment: 'Barbell', duration: 12, calories: 85, rating: 4.5, difficulty: 'Beginner', sets: 3, reps: '10–12', description: 'An isolation exercise that targets the biceps through controlled elbow flexion.', image: '/workout-athlete.png', instructions: ['Stand tall holding the bar with palms facing forward.', 'Keep elbows close to your sides.', 'Curl the bar toward your shoulders without swinging.', 'Lower the bar slowly to the starting position.'] },
  { id: 'push-up', name: 'Push-Up', category: ['Chest', 'Arms', 'Core'], equipment: 'Bodyweight', duration: 10, calories: 90, rating: 4.8, difficulty: 'Beginner', sets: 3, reps: '8–15', description: 'A classic bodyweight press for chest, shoulders, triceps, and core control.', image: '/workout-athlete.png', instructions: ['Start in a high plank with hands just wider than shoulders.', 'Keep your body in a straight line from head to heels.', 'Lower your chest toward the floor with elbows angled back.', 'Push the floor away to return to the start.'] },
  { id: 'russian-twist', name: 'Russian Twist', category: ['Core'], equipment: 'Medicine Ball', duration: 14, calories: 110, rating: 4.6, difficulty: 'Intermediate', sets: 3, reps: '16–20 total', description: 'A rotational core exercise that challenges trunk control and obliques.', image: '/workout-athlete.png', instructions: ['Sit with knees bent and lean back slightly with a long spine.', 'Hold a medicine ball close to your chest.', 'Rotate your torso from side to side under control.', 'Keep the movement smooth and avoid pulling on your neck.'] },
  { id: 'plank', name: 'Forearm Plank', category: ['Core'], equipment: 'Bodyweight', duration: 8, calories: 55, rating: 4.7, difficulty: 'Beginner', sets: 3, reps: '30–45 sec', description: 'A bracing exercise that trains the abdominal wall and full-body stability.', image: '/workout-athlete.png', instructions: ['Place forearms on the floor with elbows below shoulders.', 'Step feet back and make a straight line with your body.', 'Brace your abs and squeeze your glutes.', 'Breathe steadily while holding the position.'] },
  { id: 'walking-lunge', name: 'Walking Lunge', category: ['Legs', 'Glutes'], equipment: 'Bodyweight or Dumbbells', duration: 16, calories: 135, rating: 4.6, difficulty: 'Beginner', sets: 3, reps: '10 each leg', description: 'A single-leg movement for lower-body strength, balance, and coordination.', image: '/workout-athlete.png', instructions: ['Stand tall with feet hip-width apart.', 'Step forward and lower until both knees are bent comfortably.', 'Keep your front knee tracking in line with your toes.', 'Push through the front foot and step into the next lunge.'] },
  { id: 'seated-cable-row', name: 'Seated Cable Row', category: ['Back', 'Arms'], equipment: 'Cable Machine', duration: 19, calories: 150, rating: 4.8, difficulty: 'Intermediate', sets: 3, reps: '10–12', description: 'A horizontal pull that develops the mid-back and supports posture.', image: '/workout-athlete.png', instructions: ['Sit upright with knees slightly bent and grasp the handle.', 'Begin with arms extended and shoulders relaxed.', 'Pull the handle toward your lower ribs, drawing elbows back.', 'Return slowly without rounding your back.'] },
  { id: 'hip-thrust', name: 'Barbell Hip Thrust', category: ['Glutes', 'Legs'], equipment: 'Barbell, Bench', duration: 21, calories: 165, rating: 4.9, difficulty: 'Intermediate', sets: 4, reps: '8–12', description: 'A hip-extension exercise focused on glute strength and control.', image: '/workout-athlete.png', instructions: ['Rest your upper back against a stable bench and position the bar at your hips.', 'Place feet flat with shins near vertical at the top.', 'Drive through your feet and lift your hips.', 'Pause briefly at the top, then lower with control.'] },
  { id: 'mountain-climber', name: 'Mountain Climber', category: ['Core', 'Cardio'], equipment: 'Bodyweight', duration: 9, calories: 100, rating: 4.5, difficulty: 'Beginner', sets: 3, reps: '30 sec', description: 'A dynamic bodyweight drill combining core stability and cardiovascular work.', image: '/workout-athlete.png', instructions: ['Start in a high plank with shoulders above wrists.', 'Brace your core and keep hips level.', 'Drive one knee toward your chest, then switch legs.', 'Move steadily while keeping your hands planted.'] },
];

const pick = (...values) => values.find(v => v !== undefined && v !== null && v !== '');
const number = (value, fallback) => { const parsed = Number(value); return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback; };
function normalizeWorkout(item, index) {
  const rawId = pick(item.id, item._id, item.workoutId, item.slug, `workout-${index + 1}`);
  const name = pick(item.name, item.title, item.workoutName, item.exercise, fallbackWorkouts[index % fallbackWorkouts.length].name);
  const rawCategories = pick(item.category, item.categories, item.tags, item.muscleGroups, item.muscle_group, fallbackWorkouts[index % fallbackWorkouts.length].category);
  const category = Array.isArray(rawCategories) ? rawCategories : String(rawCategories).split(/[,|]/).map(s => s.trim()).filter(Boolean);
  const fallback = fallbackWorkouts[index % fallbackWorkouts.length];
  return {
    ...fallback, ...item,
    id: String(rawId), name: String(name),
    category: category.length ? category : fallback.category,
    equipment: String(pick(item.equipment, item.equipments, item.requiredEquipment, fallback.equipment)),
    duration: number(pick(item.duration, item.durationMinutes, item.minutes, item.time), fallback.duration),
    calories: number(pick(item.calories, item.caloriesBurned, item.kcal), fallback.calories),
    rating: number(pick(item.rating, item.averageRating, item.score), fallback.rating),
    difficulty: String(pick(item.difficulty, item.level, fallback.difficulty)),
    sets: number(pick(item.sets, item.totalSets), fallback.sets),
    reps: String(pick(item.reps, item.repetitions, fallback.reps)),
    description: String(pick(item.description, item.instructionsText, fallback.description)),
    image: '/workout-athlete.png',
    instructions: Array.isArray(item.instructions) ? item.instructions : fallback.instructions,
  };
}
export function normalizeWorkoutResponse(payload) {
  const list = Array.isArray(payload) ? payload : payload?.data ?? payload?.workouts ?? payload?.results ?? payload?.exercises ?? payload?.items ?? [];
  if (!Array.isArray(list)) return [];
  return list.map(normalizeWorkout);
}
export function getWorkoutById(workouts, id) {
  return workouts.find(w => String(w.id) === String(id)) || workouts.find(w => String(w.id).toLowerCase() === String(id).toLowerCase());
}
