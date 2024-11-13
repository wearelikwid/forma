const fullWorkouts = {
    workout1: {
        title: "WORKOUT 1",
        circuits: [
            {
                name: "Circuit 1",
                type: "AMRAP 12 minutes",
                exercises: [
                    "Double DB clean & jerk (12.5 or 10kg) x 3,6,9,12 reps",
                    "Burpee over DB x 3,6,9,12 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "Man maker DB (12.5kg) x 8 reps",
                    "KB swings x 15 reps"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                exercises: [
                    "Alternating DB snatch x 16 reps",
                    "Wall ball (20 lbs) x 16 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                exercises: [
                    "Deadlift to row with barbell (50kg) x 10 reps",
                    "Thrusters barbell (35kg) x 10 reps"
                ]
            }
        ]
    },

    workout2: {
        title: "WORKOUT 2",
        sections: [
            {
                name: "Warm-up",
                type: "AMRAP 3 minutes",
                exercises: [
                    "Push-ups x 3 reps",
                    "Half burpee x 3 reps",
                    "Squat jumps x 3 reps"
                ]
            },
            {
                name: "Circuit 1",
                type: "AMRAP 12 minutes",
                exercises: [
                    "Burpees x 5 reps",
                    "KB thrusters (12kg x2) x 8 reps",
                    "KB swing (20-24kg) x 12 reps"
                ]
            },
            {
                name: "Circuit 2",
                type: "AMRAP 12 minutes",
                exercises: [
                    "DB burpees (12.5kg x2) x 8 reps",
                    "DB plank row (1 is 1) (12.5kg) x 10 reps",
                    "DB double snatch (12.5 or 15kg) x 12 reps"
                ]
            },
            {
                name: "Circuit 3",
                type: "AMRAP 12 minutes",
                exercises: [
                    "Slam ball (35 lbs) x 10 reps",
                    "Wall ball (20 lbs) x 15 reps",
                    "Side kick through x 20 reps"
                ]
            }
        ]
    },

    workout3: {
        title: "WORKOUT 3",
        circuits: [
            {
                name: "For Time Circuit 1",
                note: "Alternate between exercises when resting",
                exercises: [
                    "Wall ball (9-10kg) x 150 reps",
                    "KB swings (20-24kg) x 150 reps"
                ]
            },
            {
                name: "For Time Circuit 2",
                note: "Alternate between exercises when resting",
                exercises: [
                    "KB thrusters (12kg) x 100 reps",
                    "Chest to ground burpees x 100 reps"
                ]
            },
            {
                name: "For Time Circuit 3",
                exercises: [
                    "Slam ball (35lb) x 100 reps",
                    "Side kick through (2 as 1) x 100 reps"
                ]
            }
        ]
    },

    workout4: {
        title: "WORKOUT 4",
        sections: [
            {
                name: "Main Circuit",
                rounds: 4,
                type: "8-minute circuit (40 sec work/20 sec rest)",
                exercises: [
                    "Wall balls",
                    "KB swings",
                    "Burpee pull-ups",
                    "KB squat clean",
                    "Slam ball",
                    "DB double snatch",
                    "Row machine",
                    "Side kick through"
                ],
                finisher: "Jump rope x 2 minutes"
            }
        ]
    },

    workout5: {
        title: "WORKOUT 5",
        sections: [
            {
                name: "Warm-up",
                exercises: [
                    "Running x 2 laps",
                    {
                        rounds: 3,
                        exercises: [
                            "Push-up jacks x 8 reps",
                            "Half burpee x 8 reps",
                            "Squat jumps x 8 reps"
                        ]
                    }
                ]
            },
            {
                name: "Circuit 1",
                rounds: 4,
                note: "Barbell work (35-40kg)",
                exercises: [
                    "Barbell row to deadlift x 10 reps",
                    "Barbell hang clean x 10 reps",
                    "Barbell push press x 10 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "KB swings x 20 reps",
                    "Heavy slam ball x 15 reps",
                    "Burpee star jump x 10 reps"
                ]
            }
        ]
    },

    workout6: {
        title: "WORKOUT 6",
        sections: [
            {
                name: "Warm-up",
                exercises: [
                    "Rope x 3 minutes",
                    {
                        duration: "3 minutes",
                        exercises: [
                            "Plank pushups x 3 reps",
                            "Half burpees x 3 reps",
                            "Squats x 3 reps"
                        ]
                    }
                ]
            },
            {
                name: "Barbell Complex",
                rounds: 4,
                weight: "30-35-37.5kg",
                format: "8x8 format (8 reps each)",
                exercises: [
                    "Rollout",
                    "Pushups on bar",
                    "Deadlift",
                    "Rows",
                    "Hang clean",
                    "Push press",
                    "Squats",
                    "Front lunges"
                ],
                rest: "2-3 minutes between rounds"
            }
        ]
    },

    workout7: {
        title: "WORKOUT 7",
        sections: [
            {
                name: "Warm-up",
                exercises: ["Rope x 3 minutes"]
            },
            {
                name: "Circuit 1",
                type: "Pyramid 14 to 9",
                exercises: [
                    "Wall balls (10-14 lbs)",
                    "KB swings (18-20kg)"
                ]
            },
            {
                name: "Circuit 2",
                type: "Pyramid 10 to 1",
                exercises: [
                    "Barbell thrusters (30-35kg)",
                    "Burpees jump over bar"
                ]
            },
            {
                name: "Circuit 3",
                type: "Pyramid 10 to 1",
                exercises: [
                    "Barbell clean (34-40kg)",
                    "Slam ball (35 lbs)"
                ]
            },
            {
                name: "Circuit 4",
                type: "Pyramid 10,8,6,4,2",
                exercises: [
                    "DB man maker (12.5-15kg)",
                    "DB double snatches (12.5-15kg)"
                ]
            }
        ]
    },

    workout8: {
        title: "WORKOUT 8",
        sections: [
            {
                name: "EMOM",
                duration: "10 minutes",
                exercises: [
                    "Minute 1: Wall balls x 12 reps",
                    "Minute 2: Thrusters x 12 reps"
                ]
            },
            {
                name: "Circuit Pairs",
                pairs: [
                    {
                        exercises: [
                            "Deadlift x 10 reps",
                            "Pull-ups x 8 reps"
                        ]
                    },
                    {
                        exercises: [
                            "DB double snatches (12.5-15kg) x 12 reps",
                            "Toe to bar x 8-10 reps"
                        ]
                    },
                    {
                        exercises: [
                            "Heavy sled push",
                            "Burpees x 8 reps"
                        ]
                    },
                    {
                        exercises: [
                            "Trap farmers walk (80kg)",
                            "Double unders x 25 reps"
                        ]
                    }
                ]
            }
        ]
    },

    workout9: {
        title: "WORKOUT 9",
        sections: [
            {
                name: "Warm-up",
                rounds: 2,
                exercises: [
                    "Assault bike x 1 minute",
                    "Row x 1 minute"
                ]
            },
            {
                name: "Circuit 1",
                type: "10-9-8-7-6-5-4-3-2-1",
                exercises: [
                    "Barbell hang clean",
                    "Barbell push press",
                    "Barbell deadlifts",
                    "Burpees"
                ]
            },
            {
                name: "Circuit 2",
                type: "14 to 9",
                exercises: [
                    "DB thrusters",
                    "DB plank row (1 is 1)",
                    "DB double snatches"
                ]
            },
            {
                name: "Circuit 3",
                type: "14 to 9",
                exercises: [
                    "KB swings",
                    "Box jump overs"
                ]
            },
            {
                name: "Circuit 4",
                type: "14 to 9",
                exercises: [
                    "KB Russian twists (8-10kg, 2 as 1)",
                    "GHD Weighted situps"
                ]
            }
        ]
    },

    workout10: {
        title: "WORKOUT 10",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 5,
                exercises: [
                    "Row x 40 seconds",
                    "Wall balls (9 or 12kg) x 15 reps",
                    "Side kick through (2 as 1) x 15 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "Full burpees x 5 reps",
                    "KB thrusters (16kg) x 8 reps",
                    "KB swing (24kg) x 12 reps"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                exercises: [
                    "DB man makers (12.5 or 15kg) x 8 reps",
                    "DB front squat x 8 reps",
                    "DB single snatch (8 right, 8 left)"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                exercises: [
                    "Barbell squat clean (40/45kg) x 8 reps",
                    "Toes to bar x 8 reps",
                    "Ski erg x 40 seconds"
                ]
            }
        ]
    },

    workout11: {
        title: "WORKOUT 11",
        sections: [
            {
                name: "Warm-up",
                exercises: [
                    "Rope x 3 minutes",
                    "Rower x 1 minute",
                    "Ski erg x 1 minute"
                ]
            },
            {
                name: "Barbell Complex",
                rounds: "3-4",
                note: "increase weight each round 30-35-40kg",
                exercises: [
                    "Deadlift x 8 reps",
                    "Squat clean x 8 reps",
                    "Push press x 8 reps",
                    "Back squat x 8 reps",
                    "Reverse lunge x 8 reps",
                    "Burpee over bar x 8 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "KB thrusters (12kg each side) x 10 reps",
                    "KB double swings x 15 reps",
                    "KB squat to upright row (16/20kg) x 12 reps"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                exercises: [
                    "DB double snatches (12.5/15kg) x 12 reps",
                    "DB row (2 as 1) x 10 reps",
                    "Toes to bar or knee raises x 8-10 reps"
                ]
            }
        ]
    },

    workout12: {
        title: "WORKOUT 12",
        sections: [
            {
                name: "Circuit 1",
                rounds: 4,
                exercises: [
                    "KB clean and press (each side) x 10 reps",
                    "Burpees x 15 reps",
                    "Kettlebell swings x 20 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 3,
                exercises: [
                    "Dumbbell thrusters x 12 reps",
                    "Slam ball x 15 reps",
                    "Push-ups x 10 reps"
                ]
            },
            {
                name: "Finisher",
                type: "3 minutes AMRAP",
                exercises: [
                    "Push-ups x 5 reps",
                    "Squats x 10 reps",
                    "Mountain climbers x 15 reps"
                ]
            }
        ]
    },

    workout13: {
        title: "WORKOUT 13",
        sections: [
            {
                name: "Every 2 minutes for 16 minutes",
                exercises: [
                    "Wall balls x 10 reps",
                    "Kettlebell swings x 12 reps",
                    "Burpees x 8 reps"
                ]
            },
            {
                name: "Circuit",
                rounds: 3,
                exercises: [
                    "Dumbbell renegade rows x 12 reps",
                    "Goblet squats x 15 reps",
                    "Push press x 10 reps"
                ]
            },
            {
                name: "Finisher",
                exercises: [
                    "Jump rope x 50 reps",
                    "Russian twists x 20 reps",
                    "Up-downs x 10 reps"
                ]
            }
        ]
    },

    workout14: {
        title: "WORKOUT 14",
        sections: [
            {
                name: "Pyramid",
                type: "10-8-6-4-2",
                exercises: [
                    "Dumbbell clean and press",
                    "Burpees over dumbbells"
                ]
            },
            {
                name: "Circuit",
                rounds: 3,
                exercises: [
                    "Kettlebell swings x 15 reps",
                    "Push-ups x 12 reps",
                    "Air squats x 20 reps"
                ]
            },
            {
                name: "Finisher",
                type: "1 minute each",
                exercises: [
                    "Wall balls",
                    "Mountain climbers",
                    "Squat jumps"
                ]
            }
        ]
    },

    workout15: {
        title: "WORKOUT 15",
        sections: [
            {
                name: "AMRAP",
                duration: "12 minutes",
                exercises: [
                    "Dumbbell snatch (alternating) x 8 reps",
                    "Push-ups x 10 reps",
                    "Goblet squats x 12 reps"
                ]
            },
            {
                name: "Circuit",
                rounds: 4,
                exercises: [
                    "Kettlebell swings x 15 reps",
                    "Ball slams x 12 reps",
                    "Burpees x 10 reps"
                ]
            },
            {
                name: "Finisher",
                type: "30-20-10",
                exercises: [
                    "Jumping jacks",
                    "Air squats",
                    "Mountain climbers"
                ]
            }
        ]
    },

    workout16: {
        title: "WORKOUT 16",
        sections: [
            {
                name: "Every 3 minutes for 15 minutes",
                exercises: [
                    "Dumbbell thrusters x 10 reps",
                    "Kettlebell swings x 12 reps",
                    "Burpees x 8 reps"
                ]
            },
            {
                name: "Circuit",
                rounds: 3,
                exercises: [
                    "Ball slams x 15 reps",
                    "Push-ups x 12 reps",
                    "Walking lunges x 20 reps"
                ]
            },
            {
                name: "Finisher",
                type: "1 minute each",
                exercises: [
                    "Plank hold",
                    "Jump rope",
                    "Squat hold"
                ]
            }
        ]
    }
};
