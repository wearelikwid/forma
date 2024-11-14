let selectedWorkoutType = null;

// Add click event listeners to workout type buttons
document.querySelectorAll('.workout-type-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.workout-type-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        selectedWorkoutType = this.id;
    });
});

// Generate workout function
function generateWorkout() {
    if (!selectedWorkoutType) {
        alert('Please select a workout type first!');
        return;
    }

    const workoutDisplay = document.getElementById('workoutDisplay');
    const printButton = document.getElementById('printWorkout');
    let workouts;

    // Select workout data based on type
    switch(selectedWorkoutType) {
        case 'upperBody':
            workouts = upperWorkouts;
            break;
        case 'lowerBody':
            workouts = lowerWorkouts;
            break;
        case 'core':
            workouts = coreWorkouts;
            break;
        case 'fullBody':
            workouts = fullWorkouts;
            break;
    }

    // Get random workout
    const workoutKeys = Object.keys(workouts);
    const randomWorkout = workouts[workoutKeys[Math.floor(Math.random() * workoutKeys.length)]];

    // Generate workout HTML
    let workoutHTML = `<h2>${randomWorkout.title}</h2>`;

    // Add workout type if present
    if (randomWorkout.type) {
        workoutHTML += `<p class="workout-type">${randomWorkout.type}</p>`;
    }

    // Handle simple exercise list
    if (randomWorkout.exercises) {
        workoutHTML += '<ul>';
        randomWorkout.exercises.forEach(exercise => {
            workoutHTML += `<li>${exercise}</li>`;
        });
        workoutHTML += '</ul>';
    }

    // Handle circuits
    if (randomWorkout.circuits) {
        randomWorkout.circuits.forEach(circuit => {
            workoutHTML += `<div class="circuit">
                <h3>${circuit.name}</h3>`;
            
            if (circuit.type) {
                workoutHTML += `<p>${circuit.type}</p>`;
            }
            
            if (circuit.rounds) {
                workoutHTML += `<p>${circuit.rounds} rounds</p>`;
            }

            if (circuit.note) {
                workoutHTML += `<p><em>${circuit.note}</em></p>`;
            }

            workoutHTML += '<ul>';
            circuit.exercises.forEach(exercise => {
                workoutHTML += `<li>${exercise}</li>`;
            });
            workoutHTML += '</ul></div>';
        });
    }

    // Handle sections
    if (randomWorkout.sections) {
        randomWorkout.sections.forEach(section => {
            workoutHTML += `<div class="section">
                <h3>${section.name}</h3>`;
            
            if (section.type) {
                workoutHTML += `<p>${section.type}</p>`;
            }
            
            if (section.rounds) {
                workoutHTML += `<p>${section.rounds} rounds</p>`;
            }

            if (section.description) {
                workoutHTML += `<p><em>${section.description}</em></p>`;
            }

            workoutHTML += '<ul>';
            if (Array.isArray(section.exercises)) {
                section.exercises.forEach(exercise => {
                    workoutHTML += `<li>${exercise}</li>`;
                });
            } else if (typeof section.exercises === 'object') {
                Object.entries(section.exercises).forEach(([key, value]) => {
                    workoutHTML += `<li>${key}: ${value}</li>`;
                });
            }
            workoutHTML += '</ul></div>';
        });
    }

    // Display workout and show print button
    workoutDisplay.innerHTML = workoutHTML;
    workoutDisplay.classList.add('active');
    printButton.style.display = 'block';
}

// Add click event listener to generate button
document.getElementById('generateWorkout').addEventListener('click', generateWorkout);

// Add click event listener to print button
document.getElementById('printWorkout').addEventListener('click', () => {
    window.print();
});
