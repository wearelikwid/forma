const lowerWorkouts = {
    workout1: {
        title: "WORKOUT 1",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 3,
                exercises: [
                    "Sled push w/rage3 pull (backwards)"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "Nordic quad extensions x 10 reps",
                    "Barbell wall sit (40-60kg) x 30-40 seconds"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                exercises: [
                    "Back squat tempo 2-1-2 x 10 reps",
                    "Barbell Romanian deadlift x 10 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 3,
                exercises: [
                    "DB split squat Right (8-10kg DBs) x 10 reps",
                    "DB split squat Left (8-10kg DBs) x 10 reps"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 4,
                exercises: [
                    "Hip thrusters (machine or bar) x 10 reps",
                    "Single leg hamstring curl machine x 12 reps"
                ]
            },
            {
                name: "Circuit 6",
                rounds: 4,
                exercises: [
                    "Barbell sumo squat x 10 reps",
                    "Lunge jumps x 12 reps"
                ]
            },
            {
                name: "Circuit 7",
                rounds: 4,
                exercises: [
                    "Calf raises machine x 15 reps"
                ]
            }
        ]
    },

    workout2: {
        title: "WORKOUT 2",
        warmup: {
            part1: "Rope x 3 minutes",
            part2: {
                rounds: 2,
                equipment: "10kg plate or DB",
                exercises: [
                    "Squat jumps x 10 reps",
                    "Reverse lunges (1 is 1) x 10 reps"
                ]
            }
        },
        circuits: [
            {
                name: "Circuit 1",
                rounds: 4,
                exercises: [
                    "Single leg hamstring curl machine x 12 reps",
                    "Calf machine x 12 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                type: "descending",
                reps: [15, 12, 10, 10],
                exercises: [
                    "Hack squat machine",
                    "Romanian deadlift"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                exercises: [
                    "Zercher squat/heel elevated front squats x 10 reps",
                    "Hip thrusters x 10 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                exercises: [
                    "Bulgarian split squat x 10 each leg"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 4,
                exercises: [
                    "Adductor machine x 12 reps",
                    "Achilles raises x 12 reps"
                ]
            }
        ]
    },

    workout3: {
        title: "WORKOUT 3",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 3,
                exercises: [
                    "Sumo squat x 10 reps",
                    "Sumo deadlift x 10 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 3,
                exercises: [
                    "Back squats x 10 reps",
                    "Walking lunges with bar 30kg (2 as 1) x 10 steps"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 3,
                exercises: [
                    "Hamstring curls machine/TRX x 15 reps OR Nordic hamstring curls x 10 reps",
                    "Nordic quads x 10 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 3,
                exercises: [
                    "Single leg calf raises (15kg) x 15 reps",
                    "Achilles raises x 15 reps"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 3,
                exercises: [
                    "Split squat each side (8-10kg DBs) x 8 reps"
                ]
            }
        ]
    },

    workout4: {
        title: "WORKOUT 4",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 3,
                exercises: [
                    "Goblet squat (12.5/16kg KB/DB) x 10 reps",
                    "KB reverse lunges (1 is 1) x 10 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "Single leg hamstring curl machine x 10 reps",
                    "Nordic quads x 10 reps"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                type: "descending",
                reps: [15, 12, 10, 8],
                exercises: [
                    "Back squat",
                    "Romanian Deadlift"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                exercises: [
                    "Zercher squat x 10 reps",
                    "Hip thrusters x 10 reps"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 4,
                exercises: [
                    "Step ups with bar x 8 reps each leg"
                ]
            },
            {
                name: "Circuit 6",
                rounds: 4,
                exercises: [
                    "Single leg calf raises (15kg DB) x 12 reps"
                ]
            }
        ]
    },

    workout5: {
        title: "WORKOUT 5",
        emom: {
            duration: 10,
            exercises: {
                "Minute 1": "Wall balls x 12 reps",
                "Minute 2": "Thrusters x 12 reps"
            }
        },
        circuitPairs: [
            {
                pair: 1,
                exercises: [
                    "Deadlift x 10 reps",
                    "Pull ups x 8 reps"
                ]
            },
            {
                pair: 2,
                exercises: [
                    "DB double snatches (12.5-15kg) x 12 reps",
                    "Toe to bar x 8-10 reps"
                ]
            },
            {
                pair: 3,
                exercises: [
                    "Heavy sled push rayh rage3",
                    "Burpees x 8 reps"
                ]
            },
            {
                pair: 4,
                exercises: [
                    "Trap farmers walk 80kg rayh rage3",
                    "Double unders x 25 reps"
                ]
            }
        ]
    },

    workout6: {
        title: "WORKOUT 6",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 4,
                exercises: [
                    "Single leg hamstring curl machine x 12 reps each leg",
                    "Calf raises machine x 15 reps"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 2,
                exercises: [
                    "Sled push & pull"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 5,
                type: "progressive",
                weights: [60, 70, 75, 80, 90],
                exercises: [
                    "Back squat x 12-10 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                exercises: [
                    "Romanian deadlift (70-90kg) x 10 reps"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 3,
                exercises: [
                    "Walking lunges with bar 40kg (2 as 1) x 12 steps"
                ]
            },
            {
                name: "Circuit 6",
                rounds: 3,
                exercises: [
                    "Hip thrusters machine x 10 reps"
                ]
            }
        ]
    },

    workout7: {
        title: "WORKOUT 7",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 4,
                exercises: [
                    "Calf raises machine x 15 reps",
                    "Achilles raises on the wall x 15 reps",
                    "Sled push w/rage3 pull"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "Zercher squat or front squat x 10 reps",
                    "Hip thrusters x 10 reps"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 3,
                exercises: [
                    "Reverse lunges from step x 10 each leg"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                exercises: [
                    "Romanian deadlift x 10 reps"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 3,
                exercises: [
                    "Nordic hamstring curl x 8 reps",
                    "Nordic quads x 10 reps"
                ]
            }
        ]
    },

    workout8: {
        title: "WORKOUT 8",
        warmup: {
            part1: "Rope x 3 minutes",
            part2: "Dynamic stretching"
        },
        circuits: [
            {
                name: "Circuit 1",
                rounds: 3,
                exercises: [
                    "Sled push & pull",
                    "Calf machine"
                ]
            },
            {
                name: "Circuit 2",
                rounds: 4,
                exercises: [
                    "Single leg hamstring curl machine x 15 reps each leg"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                type: "descending",
                reps: [15, 12, 10, 10],
                exercises: [
                    "Hack squat",
                    "Romanian deadlift"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 4,
                type: "descending",
                reps: [15, 12, 10, 8],
                exercises: [
                    "Back squat",
                    "Sumo squat"
                ]
            },
            {
                name: "Circuit 5",
                rounds: 3,
                exercises: [
                    "Hip thrusters x 10 reps",
                    "Barbell walking lunges 40kg (2 as 1) x 12 steps"
                ]
            },
            {
                name: "Circuit 6",
                rounds: 3,
                exercises: [
                    "ATG split squat x 8-10 reps each leg"
                ]
            }
        ]
    },
      
    workout9: {
        title: "WORKOUT 9",
        mainCircuit: {
            type: "straight through",
            exercises: [
                "Wall sit x 1 minute",
                "Prisoners squats x 20 reps",
                "Lunge jumps (2 as 1) x 20 reps", 
                "Calf raises x 20 reps",
                "Single leg hip thrust Right x 15 reps",
                "Single leg hip thrust Left x 15 reps",
                "Nordic quads x 10 reps",
                "Achilles raises x 15 reps",
                "Split squat jumps x 15 each leg",
                "Bodyweight hamstring curl x 10 reps",
                "VMO squats on toes x 15 reps",
                "ATG split squats x 8 each leg"
            ]
        }
    },

    workout10: {
        title: "WORKOUT 10",
        circuits: [
            {
                name: "Circuit 1",
                rounds: 4,
                exercises: [
                    "Jump squats x 15 reps",
                    "Cossack squats x 20 reps (10 each side)",
                    "Split squat jumps x 15 each leg"
                ]
            },
            {
                name: "Circuit 2", 
                rounds: 3,
                exercises: [
                    "Single leg balance hold x 30 sec each side",
                    "Pistol squat progressions x 10 each leg",
                    "Matrix lunges (5 each direction, each leg) x 20 total"
                ]
            },
            {
                name: "Circuit 3",
                rounds: 4,
                exercises: [
                    "Natural leg extensions x 15 reps",
                    "Sliding hamstring curls x 12 reps",
                    "Speed skater jumps x 20 reps"
                ]
            },
            {
                name: "Circuit 4",
                rounds: 3,
                exercises: [
                    "Box jumps x 30 reps",
                    "Lateral bounds x 20 (10 each side)",
                    "Single leg calf raises x 15 each leg"
                ]
            }
        ]
    },

    workout11: {
        title: "WORKOUT 11",
        circuits: [
            {
                name: "Agility Circuit",
                rounds: 4,
                exercises: [
                    "Ladder drills: in-out shuffle x 30 sec",
                    "Box step-ups with knee drive x 10 each leg",
                    "Plyo lunges with rotation x 10 each side"
                ]
            },
            {
                name: "Balance Work",
                rounds: 3,
                exercises: [
                    "Single leg RDLs (bodyweight) x 20 each leg",
                    "Shrimp squats x 15 each leg",
                    "Single leg hops x 30 sec each leg"
                ]
            },
            {
                name: "Strength Focus",
                rounds: 4,
                exercises: [
                    "Sissy squats x 12 reps",
                    "Nordic hamstring curls (or negatives) x 15 reps",
                    "Jump rope single leg alternating x 20 (10 each)",
                    "Wall sit with calf raises x 30 sec"
                ]
            }
        ]
    },

    workout12: {
        title: "WORKOUT 12",
        circuits: [
            {
                name: "Plyometric Focus",
                rounds: 3,
                exercises: [
                    "Broad jumps x 15 reps",
                    "Tuck jumps x 20 reps",
                    "Depth jumps x 15 reps"
                ]
            },
            {
                name: "Balance Sequence",
                rounds: 4,
                exercises: [
                    "Bosu squats x 30 sec",
                    "Single leg dead lift to backward lunge x 10 each leg",
                    "Walking high knees with pause x 20 steps"
                ]
            },
            {
                name: "Strength Elements",
                rounds: 3,
                exercises: [
                    "Dragon pistol squats (or progression) x 12 reps",
                    "Natural glute-ham raises x 15 reps",
                    "Sprint in place (high knees) x 20 reps"
                ]
            },
            {
                name: "Finisher",
                exercises: [
                    "Jump rope double unders x 100 (or 200 singles)",
                    "Calf raises with 1 sec hold at top x 30 reps",
                    "Hindu squats x 20 reps"
                ]
            }
        ]
    },

    workout13: {
        title: "WORKOUT 13",
        circuits: [
            {
                name: "Explosive Warmup",
                rounds: 2,
                exercises: [
                    "Mountain climbers x 20 reps",
                    "Jump rope high knees x 15 reps",
                    "Burpee broad jumps x 10 reps"
                ]
            },
            {
                name: "Main Work",
                rounds: 4,
                exercises: [
                    "Elevated single-leg squats x 12 each leg",
                    "Explosive switch lunges x 15 reps",
                    "Lateral lunge walks x 20 (10 each side)"
                ]
            },
            {
                name: "Balance Sequence",
                rounds: 3,
                exercises: [
                    "Single-leg stance with eyes closed x 30 sec each leg",
                    "Airborne lunges x 10 each leg",
                    "Curtsy lunges to side kicks x 15 each side"
                ]
            },
            {
                name: "Power Finisher",
                rounds: 4,
                exercises: [
                    "Sprint in place x 30 sec",
                    "Pogo jumps x 30 sec",
                    "Scissor jumps x 30 sec",
                    "Rest x 30 sec"
                ]
            }
        ]
    },

    workout14: {
        title: "WORKOUT 14",
        circuits: [
            {
                name: "Movement Prep",
                rounds: 3,
                exercises: [
                    "Bear crawl x 20 meters",
                    "Crab walk x 20 meters",
                    "Duck walk x 20 meters"
                ]
            },
            {
                name: "Skill Work",
                rounds: 4,
                exercises: [
                    "Assisted pistol squats x 8 each leg",
                    "Jump lunges with hover x 12 reps",
                    "Side plank leg lifts x 15 each side"
                ]
            },
            {
                name: "Power Complex",
                rounds: 3,
                exercises: [
                    "Box jump to backward step-down x 10 each leg",
                    "Lateral bounds with stick x 15 reps",
                    "Quick feet ladder drills x 20 reps"
                ]
            },
            {
                name: "Endurance Finish",
                exercises: [
                    "Jump squats x 100 reps (break as needed)",
                    "Split squat jumps x 50 each leg",
                    "Burpee long jumps x 25 reps"
                ]
            }
        ]
    },

    workout15: {
        title: "WORKOUT 15",
        circuits: [
            {
                name: "Agility Ladder Complex",
                rounds: 3,
                exercises: [
                    "In-out runs",
                    "Lateral high knees",
                    "Single-leg hops"
                ]
            },
            {
                name: "Balance Work",
                rounds: 4,
                exercises: [
                    "Single-leg Romanian deadlift with hop x 15 each leg",
                    "Walking lunges with knee drive x 20 reps",
                    "Cross-behind lunges x 12 each leg"
                ]
            },
            {
                name: "Strength Focus",
                rounds: 3,
                exercises: [
                    "Bulgarian split squat jumps x 10 each leg",
                    "Single-leg glute bridges with march x 15 each leg",
                    "Speed skater bounds x 20 reps"
                ]
            },
            {
                name: "Control Work",
                rounds: 4,
                exercises: [
                    "Slow eccentric squats (4 count down)",
                    "Single-leg calf raises with pause",
                    "Wall sit to calf raise x 45 sec"
                ]
            }
        ]
    },

    workout16: {
        title: "WORKOUT 16",
        circuits: [
            {
                name: "Athletic Prep",
                rounds: 3,
                exercises: [
                    "Multi-directional hops x 30 sec",
                    "Lateral shuffle with sprint x 20 meters",
                    "Backward run to forward sprint"
                ]
            },
            {
                name: "Power Sequence",
                rounds: 4,
                exercises: [
                    "Drop squat to jump x 8 reps",
                    "Alternating bound lunges x 12 reps",
                    "180-degree jump squats x 15 reps"
                ]
            },
            {
                name: "Balance Challenge",
                rounds: 3,
                exercises: [
                    "Single-leg deadlift to backward hop x 10 each",
                    "Walking single-leg squat touches",
                    "Lateral lunge to curtsy x 12 each side"
                ]
            },
            {
                name: "Finisher",
                type: "EMOM",
                duration: 10,
                exercises: {
                    "Odd minutes": "Jump squats x 15 reps",
                    "Even minutes": "Split jumps x 20 reps"
                }
            }
        ]
    }
};
