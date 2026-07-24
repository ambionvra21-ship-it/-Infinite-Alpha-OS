// Global State Tracking variables
let currentBmiUnit = 'metric';
let currentTdeeUnit = 'metric';

// --- BMI CALCULATOR FUNCTIONS ---
window.setBmiUnit = function(unit) {
  currentBmiUnit = unit;
  const metricBtn = document.getElementById('bmiMetricBtn');
  const imperialBtn = document.getElementById('bmiImperialBtn');
  const wLabel = document.getElementById('weightLabel');
  const hLabel = document.getElementById('heightLabel');
  const wInput = document.getElementById('bmiWeight');
  const hInput = document.getElementById('bmiHeight');

  if (!metricBtn || !imperialBtn || !wLabel || !hLabel || !wInput || !hInput) return;

  if (unit === 'metric') {
    metricBtn.className = "px-3 py-1 text-sm rounded bg-blue-600 text-white font-medium transition";
    imperialBtn.className = "px-3 py-1 text-sm rounded bg-gray-200 text-gray-700 font-medium transition";
    wLabel.textContent = "Weight (kg)";
    hLabel.textContent = "Height (cm)";
    wInput.placeholder = "e.g. 70";
    hInput.placeholder = "e.g. 175";
  } else {
    imperialBtn.className = "px-3 py-1 text-sm rounded bg-blue-600 text-white font-medium transition";
    metricBtn.className = "px-3 py-1 text-sm rounded bg-gray-200 text-gray-700 font-medium transition";
    wLabel.textContent = "Weight (lbs)";
    hLabel.textContent = "Height (inches)";
    wInput.placeholder = "e.g. 154";
    hInput.placeholder = "e.g. 69";
  }
  wInput.value = "";
  hInput.value = "";
};

window.calculateBmi = function() {
  let weight = parseFloat(document.getElementById('bmiWeight')?.value);
  let height = parseFloat(document.getElementById('bmiHeight')?.value);
  
  if (!weight || !height || weight <= 0 || height <= 0) {
    alert('Please enter valid measurements.');
    return;
  }

  let bmi = 0;
  let minHealthyWeight = 0;
  let maxHealthyWeight = 0;
  let rangeString = "";

  if (currentBmiUnit === 'metric') {
    let heightInMeters = height / 100;
    bmi = weight / (heightInMeters * heightInMeters);
    minHealthyWeight = 18.5 * (heightInMeters * heightInMeters);
    maxHealthyWeight = 24.9 * (heightInMeters * heightInMeters);
    rangeString = `${minHealthyWeight.toFixed(1)} kg – ${maxHealthyWeight.toFixed(1)} kg`;
  } else {
    bmi = (weight / (height * height)) * 703;
    minHealthyWeight = (18.5 * (height * height)) / 703;
    maxHealthyWeight = (24.9 * (height * height)) / 703;
    rangeString = `${minHealthyWeight.toFixed(1)} lbs – ${maxHealthyWeight.toFixed(1)} lbs`;
  }

  let status = "";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Normal weight";
  else if (bmi < 30) status = "Overweight";
  else status = "Obesity";

  document.getElementById('bmiValue').textContent = bmi.toFixed(1);
  document.getElementById('bmiStatus').textContent = status;
  document.getElementById('idealRange').textContent = rangeString;
  document.getElementById('bmiOutput').classList.remove('hidden');
};

// --- TDEE CALCULATOR FUNCTIONS ---
window.setTdeeUnit = function(unit) {
  currentTdeeUnit = unit;
  document.getElementById('tdeeMetricBtn').className = unit === 'metric' ? "px-3 py-1 text-sm rounded bg-blue-600 text-white font-medium transition" : "px-3 py-1 text-sm rounded bg-gray-200 text-gray-700 font-medium transition";
  document.getElementById('tdeeImperialBtn').className = unit === 'imperial' ? "px-3 py-1 text-sm rounded bg-blue-600 text-white font-medium transition" : "px-3 py-1 text-sm rounded bg-gray-200 text-gray-700 font-medium transition";
  document.getElementById('tdeeWLabel').textContent = unit === 'metric' ? "Weight (kg)" : "Weight (lbs)";
  document.getElementById('tdeeHLabel').textContent = unit === 'metric' ? "Height (cm)" : "Height (in)";
};

window.calculateTdee = function() {
  let w = parseFloat(document.getElementById('tdeeWeight')?.value);
  let h = parseFloat(document.getElementById('tdeeHeight')?.value);
  let age = parseFloat(document.getElementById('tdeeAge')?.value);
  let activity = parseFloat(document.getElementById('tdeeActivity')?.value);

  if (!w || !h || !age || w <= 0 || h <= 0 || age <= 0) {
    alert('Please complete all form inputs accurately.');
    return;
  }

  let weightKg = currentTdeeUnit === 'metric' ? w : w * 0.453592;
  let heightCm = currentTdeeUnit === 'metric' ? h : h * 2.54;

  let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5; 
  let tdee = bmr * activity;
  let deficit = tdee - 500;

  document.getElementById('tdeeVal').textContent = Math.round(tdee);
  document.getElementById('deficitVal').textContent = Math.round(deficit < 1200 ? 1200 : deficit); 
  document.getElementById('tdeeOutput').classList.remove('hidden');
};
