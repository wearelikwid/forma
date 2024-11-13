// main.js

document.addEventListener('DOMContentLoaded', () => {
    let selectedWorkoutType = null;
    const generateBtn = document.querySelector('.generate-btn');
    const workoutTypeButtons = document.querySelectorAll('.workout-type-btn');
    const workoutDisplay = document.getElementById('workoutDisplay');
    const workoutContent = document.getElementById('workoutContent');
    const workoutTitle = document.getElementById('workoutTitle');

    // Add click event listeners to workout type buttons
    workoutTypeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            workoutTypeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Store selected workout type
            selectedWorkoutType = button.dataset.type;
            
            // Enable generate button
            generateBtn.disabled = false;
        });
    });

    // Add click event listener to generate button
    generateBtn.addEventListener('click', () => {
        if (!selectedWorkoutType) return;

        let workouts;
        switch(selectedWorkoutType) {
            case 'upper':
                workouts = upperWorkouts;
                break;
            case 'lower':
                workouts = lowerWorkouts;
                break;
            case 'core':
                workouts = coreWorkouts;
                break;
            case 'full':
                workouts = fullWorkouts;
                break;
            default:
                workouts = [];
        }

        // Generate random workout
        const workout = generateWorkout(workouts);
        
        // Display workout
        displayWorkout(workout, selectedWorkoutType);
    });

    function generateWorkout(workouts) {
        // Randomly select exercises from the workout array
        let selectedExercises = [];
        let exerciseCount = 6; // Default number of exercises

        // Create a copy of workouts array to avoid modifying original
        let availableExercises = [...workouts];

        for (let i = 0; i < exerciseCount && availableExercises.length > 0; i++) {
            // Get random index
            const randomIndex = Math.floor(Math.random() * availableExercises.length);
            
            // Add exercise to selected exercises
            selectedExercises.push(availableExercises[randomIndex]);
            
            // Remove selected exercise from available exercises
            availableExercises.splice(randomIndex, 1);
        }

        return selectedExercises;
    }

    function displayWorkout(exercises, type) {
        // Update workout title
        workoutTitle.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Body Workout`;

        // Clear previous workout content
        workoutContent.innerHTML = '';

        // Create and display exercise list
        const exerciseList = document.createElement('ul');
        exerciseList.className = 'exercise-list';

        exercises.forEach((exercise, index) => {
            const exerciseItem = document.createElement('li');
            exerciseItem.className = 'exercise-item';
            exerciseItem.innerHTML = `
                <span class="exercise-number">${index + 1}</span>
                <div class="exercise-details">
                    <h3>${exercise.name}</h3>
                    <p>${exercise.reps} ${exercise.type === 'time' ? 'seconds' : 'reps'}</p>
                    ${exercise.notes ? `<p class="exercise-notes">${exercise.notes}</p>` : ''}
                </div>
            `;
            exerciseList.appendChild(exerciseItem);
        });

        workoutContent.appendChild(exerciseList);

        // Add print button
        const printButton = document.createElement('button');
        printButton.className = 'print-workout-btn';
        printButton.textContent = 'Print Workout';
        printButton.onclick = () => window.print();
        workoutContent.appendChild(printButton);

        // Scroll workout into view
        workoutDisplay.scrollIntoView({ behavior: 'smooth' });
    }
});
