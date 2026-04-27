export type Task = {
  id: number;
  title: string;
  desc: string;
};

export type PathDetail = {
  title: string;
  desc: string;
  tasks: Task[];
};

export const PATH_DATA: Record<string, PathDetail> = {
  "strength-training": {
    title: "Strength Training",
    desc: "Build muscle and progressive strength through resistance training",
    tasks: [
      { id: 1, title: "Learn proper form fundamentals", desc: "Master squats, deadlifts, and bench press form with light weights" },
      { id: 2, title: "Build baseline strength", desc: "Establish your 1RM (one-rep max) for compound lifts" },
      { id: 3, title: "Progressive overload weeks 1–4", desc: "Increase weight by 2–5% every week, 3–4 sessions per week" },
      { id: 4, title: "Hypertrophy phase (6–12 reps)", desc: "Train with moderate weight for 6–12 rep ranges to build muscle" },
      { id: 5, title: "Strength phase (3–6 reps)", desc: "Lower reps, higher weight to build pure strength" },
      { id: 6, title: "Advanced programming", desc: "Implement periodization and periodized training cycles" },
      { id: 7, title: "Peak strength", desc: "Test and demonstrate maximum strength capabilities" },
    ],
  },
  "running": {
    title: "Running",
    desc: "Training progression from beginner to marathon runner",
    tasks: [
      { id: 1, title: "Start with walk/run intervals", desc: "Alternate 1 minute running with 2 minutes walking for 20 minutes, 3x per week" },
      { id: 2, title: "Build to continuous 5K", desc: "Progress to running 5K (3.1 miles) continuously without stopping" },
      { id: 3, title: "5K speed work", desc: "Add tempo runs and interval training to improve pace" },
      { id: 4, title: "Build weekly mileage", desc: "Gradually increase weekly running volume to 20-30 miles per week" },
      { id: 5, title: "Half marathon training", desc: "Follow 10-12 week half marathon training plan" },
      { id: 6, title: "Marathon base building", desc: "Build aerobic base with long runs and consistent weekly training" },
      { id: 7, title: "Marathon race prep", desc: "Complete 16-week marathon training plan and race day execution" },
    ],
  },
  "yoga": {
    title: "Yoga",
    desc: "Yoga journey from basics to advanced asanas and mindfulness",
    tasks: [
      { id: 1, title: "Learn fundamental poses", desc: "Mountain pose, downward dog, cat-cow, child's pose - 10 min daily" },
      { id: 2, title: "Build flexibility", desc: "Hold stretches longer, practice gentle flows 3x per week" },
      { id: 3, title: "Breath work (pranayama)", desc: "Master ujjayi breathing, box breathing, and alternate nostril breathing" },
      { id: 4, title: "Sun salutations mastery", desc: "Perfect sun salutation A & B, flow smoothly through 20 rounds" },
      { id: 5, title: "Standing poses series", desc: "Warrior I, II, III, triangle, extended side angle - build balance and strength" },
      { id: 6, title: "Arm balances intro", desc: "Crow pose, side crow, handstand preparation exercises" },
      { id: 7, title: "Advanced inversions", desc: "Headstand, shoulder stand, scorpion pose, handstand" },
      { id: 8, title: "Meditation practice", desc: "20+ minute daily meditation and mindfulness integration" },
    ],
  },
  "cycling": {
    title: "Cycling",
    desc: "Path to becoming a strong, efficient cyclist",
    tasks: [
      { id: 1, title: "Get fitted to your bike", desc: "Professional bike fitting for comfort and efficiency" },
      { id: 2, title: "Build basic endurance", desc: "Ride 2-3 hours comfortably at a conversational pace" },
      { id: 3, title: "Learn cadence and gearing", desc: "Master RPM control (90-100) and proper gear selection" },
      { id: 4, title: "Add hill training", desc: "Include weekly hill repeats and long climbs" },
      { id: 5, title: "Speed work intervals", desc: "VO2 max efforts, threshold intervals, sprint work" },
      { id: 6, title: "Long ride building", desc: "Progress to 4-5 hour rides with proper nutrition strategy" },
      { id: 7, title: "Century ride (100 miles)", desc: "Complete a 100-mile century ride" },
    ],
  },
  "nutrition": {
    title: "Nutrition Coaching",
    desc: "Master nutrition science and meal planning",
    tasks: [
      { id: 1, title: "Learn macronutrient basics", desc: "Understand proteins, carbs, fats and their roles in performance" },
      { id: 2, title: "Calculate personal calorie needs", desc: "Determine TDEE and calorie targets for your goals" },
      { id: 3, title: "Build balanced meal plans", desc: "Create 7-day meal plans with proper macro ratios" },
      { id: 4, title: "Master meal prep", desc: "Prepare and store meals for the entire week efficiently" },
      { id: 5, title: "Pre/post-workout nutrition", desc: "Time nutrients correctly around training sessions" },
      { id: 6, title: "Supplement education", desc: "Learn which supplements are evidence-based and effective" },
      { id: 7, title: "Advanced periodized nutrition", desc: "Adjust nutrition based on training phase and goals" },
    ],
  },
};
