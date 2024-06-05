const recommendedPlans = [
  {
   name: 'Recommended Plan 1: Arms', goal: "Strengthen arm muscles", workouts: [
      {
        bodyPart: "upper arms",
        equipment: "cable",
        gifUrl: "https://v2.exercisedb.io/image/Bryhi8GJUEK5uF",
        instructions: ["Stand upright with your feet shoulder-width apart and a slight bend in your knees.", "Hold the cable rope attachment with an underhand grip, palms facing each other, and your arms fully extended.", "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.", "Continue to raise the cable rope attachment until your biceps are fully contracted and the rope is at shoulder level.", "Hold the contracted position for a brief pause as you squeeze your biceps.", "Inhale and slowly begin to lower the cable rope attachment back to the starting position.", "Repeat for the desired number of repetitions."],
        name: "cable hammer curl (with rope)",
        progress: [],
        secondary: ["forearms"],
        target: "biceps",
        // workoutId: 165
      },
      {
        bodyPart: "upper arms",
        equipment: "dumbbell",
        gifUrl: "https://v2.exercisedb.io/image/BFMU2JBqC-olrZ",
        instructions: ["Sit on a bench with a dumbbell in each hand, palms facing your torso and arms extended down.", "Keep your back straight and your elbows close to your torso.", "Exhale and curl the dumbbell in your right hand towards your shoulder, keeping your upper arm stationary.", "Continue to raise the dumbbell until your biceps are fully contracted and the dumbbell is at shoulder level.", "Pause for a brief moment, then inhale and slowly lower the dumbbell back to the starting position.", "Repeat the movement with your left arm.", "Continue alternating arms for the desired number of repetitions."],
        name: "dumbbell alternate seated hammer curl",
        progress: [],
        secondary: ["forearms"],
        target: "biceps",
        // workoutId: 1648
      },
      {
        bodyPart: "upper arms",
        equipment: "dumbbell",
        gifUrl: "https://v2.exercisedb.io/image/tZwiNHR-ftWF0M",
        instructions: ["Stand up straight with a dumbbell in each hand, palms facing your torso.", "Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward.", "This will be your starting position.", "Now, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps.", "Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.", "Hold the contracted position for a brief pause as you squeeze your biceps.", "Then, inhale and slowly begin to lower the dumbbells back to the starting position.", "Repeat for the recommended amount of repetitions."],
        name: "dumbbell hammer curl",
        progress: [],
        secondary: ["forearms"],
        target: "biceps",
        // workoutId: 313
      },
      {
        bodyPart: "upper arms",
        equipment: "band",
        gifUrl: "https://v2.exercisedb.io/image/zeImPkhuk0S44W",
        instructions: ["Stand with your feet shoulder-width apart and hold the band with an underhand grip, palms facing up.", "Keep your elbows close to your sides and slowly curl one arm up towards your shoulder, squeezing your biceps at the top.", "Lower the arm back down to the starting position and repeat with the other arm.", "Continue alternating arms for the desired number of repetitions."],
        name: "band alternating biceps curl",
        progress: [],
        secondary: ["forearms"],
        target: "biceps",
        // workoutId: 968
      },
      {
        bodyPart: "upper arms",
        equipment: "band",
        gifUrl: "https://v2.exercisedb.io/image/C1GMnUWg2WEU0O",
        instructions: ["Stand with your feet shoulder-width apart and place one end of the band under your foot.", "Hold the other end of the band with your arm fully extended overhead, palm facing forward.", "Keeping your upper arm stationary, curl your forearm towards your shoulder, squeezing your biceps.", "Pause for a moment at the top, then slowly lower your forearm back to the starting position.", "Repeat for the desired number of repetitions, then switch arms."],
        name: "band one arm overhead biceps curl",
        progress: [],
        secondary: ["forearms", "shoulders"],
        target: "biceps",
        // workoutId: 986
      },
      {
        bodyPart: "upper arms",
        equipment: "barbell",
        gifUrl: "https://v2.exercisedb.io/image/IXPYtcuDwKgBZp",
        instructions: ["Stand up straight with your feet shoulder-width apart and hold a barbell in each hand, palms facing forward.", "Keep your upper arms stationary and exhale as you curl the weights while contracting your biceps.", "Continue to raise the barbells until your biceps are fully contracted and the barbells are at shoulder level.", "Hold the contracted position for a brief pause as you squeeze your biceps.", "Inhale as you slowly begin to lower the barbells back to the starting position.", "Repeat for the desired number of repetitions, alternating arms."],
        name: "barbell alternate biceps curl",
        progress: [],
        secondary: ["forearms"],
        target: "biceps",
        // workoutId: 23
      },
      {
        bodyPart: "upper arms",
        equipment: "barbell",
        gifUrl: "https://v2.exercisedb.io/image/fBF9i-HJYKtfs-",
        instructions: ["Stand with your feet shoulder-width apart and hold a barbell with an underhand grip, hands wider than shoulder-width apart.", "Keep your back straight and your elbows close to your torso.", "Exhale and curl the barbell up towards your shoulders, keeping your upper arms stationary.", "Pause for a moment at the top, squeezing your biceps.", "Inhale and slowly lower the barbell back to the starting position, fully extending your arms.", "Repeat for the desired number of repetitions."], name: "barbell standing wide grip biceps curl",
        progress: [],
        secondary: ["forearms"],
        target: "biceps",
        // workoutId: 1629
      },
      {
        bodyPart: "upper arms",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/Lj4mYh4R2HfJao",
        instructions: ["Hang from a pull-up bar with your palms facing away from you and your hands shoulder-width apart.", "Engage your core and pull yourself up by bending your elbows, bringing your chest towards the bar.", "Pause at the top of the movement, then slowly lower yourself back down to the starting position.", "Repeat for the desired number of repetitions."],
        name: "biceps pull-up",
        progress: [],
        secondary: ["forearms", "shoulders"],
        target: "biceps",
        // workoutId: 140
      },
      {
        bodyPart: "upper arms",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/IvaQ-gp20iIk0E",
        instructions: ["Hang from a pull-up bar with your palms facing towards you and your hands shoulder-width apart.", "Engage your core and pull yourself up towards the bar, focusing on using your biceps to lift your body.", "Pause for a moment at the top, then slowly lower yourself back down to the starting position.", "Repeat for the desired number of repetitions."],
        name: "biceps narrow pull-ups",
        progress: [],
        secondary: ["forearms", "shoulders"],
        target: "biceps",
        // workoutId: 139
      },
      {
        bodyPart: "upper arms",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/ri8RYdmrD68cYG",
        instructions: ["Sit on a bench with your legs spread apart and your feet flat on the ground.", "Hold a dumbbell in one hand and place your elbow on the inside of your thigh, just above the knee.", "With your palm facing up, curl the dumbbell towards your shoulder while keeping your upper arm stationary.", "Squeeze your biceps at the top of the movement, then slowly lower the dumbbell back to the starting position.", "Repeat for the desired number of repetitions, then switch arms."],
        name: "biceps leg concentration curl",
        progress: [],
        secondary: ["forearms"],
        target: "biceps",
        // workoutId: 1770
      },
      {
        bodyPart: "upper arms",
        equipment: "dumbbell",
        gifUrl: "https://v2.exercisedb.io/image/qHyVeDRr83BS3b",
        instructions: ["Stand up straight with a dumbbell in each hand, palms facing forward and arms fully extended.", "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.", "Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.", "Hold the contracted position for a brief pause as you squeeze your biceps.", "Inhale and slowly begin to lower the dumbbells back to the starting position.", "Repeat for the desired number of repetitions."],
        name: "dumbbell biceps curl",
        progress: [],
        secondary: ["forearms"],
        target: "biceps",
        // workoutId: 294
      },
      {
        bodyPart: "shoulders",
        equipment: "band",
        gifUrl: "https://v2.exercisedb.io/image/HuBQOHsTN88544",
        instructions: ["Stand with your feet shoulder-width apart and place the band under your feet.", "Hold the band handles at shoulder height with your palms facing forward.", "Engage your core and press the band overhead, fully extending your arms.", "As you press, twist your torso to one side, keeping your hips stable.", "Pause for a moment at the top, then return to the starting position.", "Repeat the press and twist on the opposite side.", "Continue alternating sides for the desired number of repetitions."],
        name: "band twisting overhead press",
        progress: [],
        secondary: ["triceps", "upper back"],
        target: "delts",
        // workoutId: 1012
      },
      {
        bodyPart: "upper arms",
        equipment: "barbell",
        gifUrl: "https://v2.exercisedb.io/image/sqlm6NhiJaTTg6",
        instructions: ["Sit on a bench with your back straight and feet flat on the ground.", "Hold a barbell with an overhand grip, hands shoulder-width apart, and raise it overhead.", "Lower the barbell behind your head by bending your elbows, keeping your upper arms close to your head.", "Pause for a moment, then extend your arms to raise the barbell back to the starting position.", "Repeat for the desired number of repetitions."],
        name: "barbell seated overhead triceps extension",
        progress: [],
        secondary: ["shoulders"],
        target: "triceps",
        // workoutId: 92
      },
      {
        bodyPart: "upper arms",
        equipment: "barbell",
        gifUrl: "https://v2.exercisedb.io/image/e9pfZy52ZCvyDQ",
        instructions: ["Stand with your feet shoulder-width apart and hold a barbell with an overhand grip.", "Raise the barbell overhead, fully extending your arms.", "Keeping your upper arms close to your head, slowly lower the barbell behind your head by bending your elbows.", "Pause for a moment, then raise the barbell back to the starting position by extending your arms.", "Repeat for the desired number of repetitions."],
        name: "barbell standing overhead triceps extension",
        progress: [],
        secondary: ["shoulders"],
        target: "triceps",
        // workoutId: 109
      },
      {
        bodyPart: "upper arms",
        equipment: "cable",
        gifUrl: "https://v2.exercisedb.io/image/35GGoU9qj6VPAR",
        instructions: ["Attach a straight bar to a high pulley cable machine.", "Stand facing the machine with your feet shoulder-width apart.", "Grasp the bar with an underhand grip, hands shoulder-width apart.", "Keep your elbows close to your sides and your upper arms stationary.", "Exhale and curl the bar down towards your forehead, keeping your upper arms stationary.", "Pause for a moment at the bottom of the movement, squeezing your biceps.", "Inhale and slowly return the bar to the starting position, fully extending your arms.", "Repeat for the desired number of repetitions."],
        name: "cable overhead curl",
        progress: [],
        secondary: ["forearms", "shoulders"],
        target: "biceps",
        // workoutId: 1636
      },
      {
        bodyPart: "upper arms",
        equipment: "cable",
        gifUrl: "https://v2.exercisedb.io/image/iUS2KNa60Ldy1i",
        instructions: ["Stand facing a cable machine with your feet shoulder-width apart.", "Hold the cable handle with your right hand and step back to create tension in the cable.", "Bend your knees slightly and hinge forward at the hips, keeping your back straight.", "Keep your upper arm close to your body and your elbow bent at a 90-degree angle.", "Extend your forearm backward, straightening your arm fully.", "Pause for a moment, then slowly return to the starting position.", "Repeat for the desired number of repetitions, then switch sides."],
        name: "cable kickback",
        progress: [],
        secondary: ["shoulders"],
        target: "triceps",
        // workoutId: 860
      },
      {
        bodyPart: "upper arms",
        equipment: "cable",
        gifUrl: "https://v2.exercisedb.io/image/jMprCB0jbWD6RA",
        instructions: ["Stand with your feet shoulder-width apart and knees slightly bent.", "Hold the cable handle in each hand with your palms facing inwards and your arms bent at a 90-degree angle.", "Keeping your upper arms stationary, extend your forearms backwards until your arms are fully extended.", "Pause for a moment, then slowly return to the starting position.", "Repeat for the desired number of repetitions."],
        name: "cable two arm tricep kickback",
        progress: [],
        secondary: ["shoulders"],
        target: "triceps",
        // workoutId: 1728
      },
      {
        bodyPart: "upper arms", 
        equipment: "dumbbell", 
        gifUrl: "https://v2.exercisedb.io/image/dh6cZYPfwJO5t6", 
        instructions: ["Stand with your feet shoulder-width apart and hold a dumbbell in your right hand.", "Bend your knees slightly and hinge forward at the hips, keeping your back straight.", "Bring your right elbow up to your side, keeping it bent at a 90-degree angle.", "Extend your right arm straight back, squeezing your triceps at the top of the movement.", "Slowly lower the dumbbell back to the starting position.", "Repeat for the desired number of repetitions, then switch sides."], 
        name: "dumbbell one arm kickback", 
        progress: [], 
        secondary: ["shoulders"], 
        target: "triceps",
        // workoutId: 354
      },
      {
        bodyPart: "upper arms",
        equipment: "barbell",
        gifUrl: "https://v2.exercisedb.io/image/Qed5aE18OUjV1d",
        instructions: ["Lie flat on a bench with your feet flat on the ground and your head at the end of the bench.", "Hold the barbell with an overhand grip, hands shoulder-width apart, and extend your arms straight up over your chest.", "Keeping your upper arms stationary, slowly lower the barbell towards your forehead by bending your elbows.", "Pause for a moment when the barbell is just above your forehead, then extend your arms back up to the starting position.", "Repeat for the desired number of repetitions."],
        name: "barbell lying triceps extension skull crusher",
        progress: [],
        secondary: ["shoulders"],
        target: "triceps",
        // workoutId: 60
      },
      {
        bodyPart: "upper arms",
        equipment: "band",
        gifUrl: "https://v2.exercisedb.io/image/-klPVD8v4LgJZF",
        instructions: ["Place a band around your upper arms, just above the elbows.", "Assume a push-up position with your hands directly under your shoulders and your body in a straight line from head to heels.", "Bend your elbows and lower your chest towards the ground, keeping your elbows close to your sides.", "Push through your palms to extend your arms and return to the starting position.", "Repeat for the desired number of repetitions."],
        name: "band close-grip push-up",
        progress: [],
        secondary: ["chest", "shoulders"],
        target: "triceps",
        // workoutId: 975
      },
      {
        bodyPart: "chest",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/Bi8xVYeWIyqo56",
        instructions: ["Start in a push-up position with your hands slightly wider than shoulder-width apart.", "Extend one arm straight out to the side, parallel to the ground.", "Lower your body by bending your elbows, keeping your back straight and core engaged.", "Push back up to the starting position.", "Repeat on the other side, extending the opposite arm out to the side.", "Continue alternating sides for the desired number of repetitions."],
        name: "archer push up",
        progress: [],
        secondary: ["triceps", "shoulders", "core"],
        target: "pectorals",
        // workoutId: 3294
      },
      {
        bodyPart: "back",
        equipment: "cable",
        gifUrl: "https://v2.exercisedb.io/image/rRquZVMOlsGlZ4",
        instructions: ["Attach a straight bar to a high pulley cable machine.", "Stand facing away from the machine with your feet shoulder-width apart.", "Grasp the bar with an overhand grip, hands slightly wider than shoulder-width apart.", "Lean forward slightly and keep your back straight.", "Pull the bar down towards your thighs by extending your elbows.", "Pause for a moment at the bottom, then slowly return the bar to the starting position.", "Repeat for the desired number of repetitions."],
        name: "cable incline pushdown",
        progress: [],
        secondary: ["triceps", "shoulders"],
        target: "lats",
        // workoutId: 172
      },
      {
        bodyPart: "upper arms",
        equipment: "cable",
        gifUrl: "https://v2.exercisedb.io/image/peqwcF2dZITZdL",
        instructions: ["Stand facing a cable machine with a straight bar attachment at chest height.", "Grasp the bar with an overhand grip and step back to create tension in the cable.", "Position your feet shoulder-width apart and slightly bend your knees.", "Keep your back straight and core engaged throughout the exercise.", "Start with your arm fully extended and perpendicular to the floor.", "Keeping your upper arm stationary, exhale and push the bar down until your arm is fully extended.", "Pause for a moment, then inhale and slowly return to the starting position.", "Repeat for the desired number of repetitions, then switch arms."],
        name: "cable one arm tricep pushdown",
        progress: [],
        secondary: ["forearms"],
        target: "triceps",
        // workoutId: 1723
      },
      {
        bodyPart: "upper arms",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/sxlmQooNnPfzZ7",
        instructions: ["Start in a high plank position with your hands placed close together, directly under your shoulders.", "Engage your core and lower your body towards the ground, keeping your elbows close to your sides.", "Push through your palms to extend your arms and return to the starting position.", "Repeat for the desired number of repetitions."],
        name: "close-grip push-up",
        progress: [],
        secondary: ["chest", "shoulders"],
        target: "triceps",
        // workoutId: 259
      },
      {
        bodyPart: "upper arms",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/UoZZlpQGZkQgvE",
        instructions: ["Start in a high plank position with your hands close together, forming a diamond shape with your thumbs and index fingers.", "Keep your body in a straight line from head to toe, engaging your core and glutes.", "Lower your chest towards the diamond shape formed by your hands, keeping your elbows close to your body.", "Pause for a moment at the bottom, then push yourself back up to the starting position.", "Repeat for the desired number of repetitions."],
        name: "diamond push-up",
        progress: [],
        secondary: ["chest", "shoulders"],
        target: "triceps",
        // workoutId: 283
      },
    ]
  },
  {
    name: 'Recommended Plan 2: Core', goal: "Strengthen core muscles", workouts: [
      {
        bodyPart: "waist",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/UcvY9fRgNeiV4m",
        // id: "0001",
        name: "3/4 sit-up",
        progress: [],
        target: "abs",
        secondary: [
          "hip flexors",
          "lower back"
        ],
        instructions: [
          "Lie flat on your back with your knees bent and feet flat on the ground.",
          "Place your hands behind your head with your elbows pointing outwards.",
          "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
          "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
          "Repeat for the desired number of repetitions."
        ],
        // workoutId: 2023
      },
      {
        bodyPart: "waist",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/hcbbkHUzwGrwny",
        // id: "3204",
        name: "arms overhead full sit-up (male)",
        progress: [],
        target: "abs",
        secondary: [
          "hip flexors",
          "lower back"
        ],
        instructions: [
          "Lie flat on your back with your knees bent and feet flat on the ground.",
          "Extend your arms overhead, keeping them straight.",
          "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is upright.",
          "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
          "Repeat for the desired number of repetitions."
        ],
        // workoutId: 2022
      },
      {
        bodyPart: "waist",
        equipment: "assisted",
        gifUrl: "https://v2.exercisedb.io/image/DD2SFnov6f7Pax",
        // id: "1758",
        name: "assisted sit-up",
        progress: [],
        target: "abs",
        secondary: [
          "hip flexors"
        ],
        instructions: [
          "Sit on the edge of a bench or have someone hold your feet down.",
          "Lie flat on your back with your knees bent and feet flat on the ground.",
          "Place your hands behind your head with your elbows pointing outwards.",
          "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
          "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
          "Repeat for the desired number of repetitions."
        ],
        // workoutId: 2021
      },
      {
        bodyPart: "waist",
        equipment: "band",
        gifUrl: "https://v2.exercisedb.io/image/8PI6ipelW8nv6O",
        // id: "0981",
        name: "band jack knife sit-up",
        progress: [],
        target: "abs",
        secondary: [
          "hip flexors"
        ],
        instructions: [
          "Lie flat on your back with your legs straight and your arms extended overhead, holding the band.",
          "Engage your abs and lift your legs and upper body simultaneously, bringing your hands towards your feet.",
          "Pause for a moment at the top, then slowly lower your legs and upper body back down to the starting position.",
          "Repeat for the desired number of repetitions."
        ],
        // workoutId: 2020
      },
      {
        bodyPart: "waist",
        equipment: "band",
        gifUrl: "https://v2.exercisedb.io/image/IUcdLoigxDE3KL",
        // id: "0992",
        name: "band push sit-up",
        progress: [],
        target: "abs",
        secondary: [
          "shoulders",
          "chest"
        ],
        instructions: [
          "Attach the band securely to a stable anchor point.",
          "Lie flat on your back with your knees bent and feet flat on the ground.",
          "Hold the band with both hands and extend your arms straight up towards the ceiling.",
          "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
          "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
          "Repeat for the desired number of repetitions."
        ],
        // workoutId: 2019
      },
      {
        bodyPart: "waist",
        equipment: "barbell",
        gifUrl: "https://v2.exercisedb.io/image/mnag8FV566NUU6",
        // id: "0071",
        name: "barbell press sit-up",
        progress: [],
        target: "abs",
        secondary: [
          "shoulders",
          "chest"
        ],
        instructions: [
          "Lie flat on your back on a mat with your knees bent and feet flat on the ground.",
          "Hold the barbell with an overhand grip, resting it on your chest.",
          "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
          "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
          "Repeat for the desired number of repetitions."
        ],
        // workoutId: 2018
      },
      {
        bodyPart: "waist",
        equipment: "barbell",
        gifUrl: "https://v2.exercisedb.io/image/mBaihNkBNDnE5T",
        // id: "2799",
        name: "barbell sitted alternate leg raise",
        progress: [],
        target: "abs",
        secondary: [
          "hip flexors"
        ],
        instructions: [
          "Sit on a bench with your back straight and hold a barbell across your thighs.",
          "Keeping your legs straight, lift one leg up as high as possible while keeping the other leg on the ground.",
          "Lower the raised leg back down and repeat with the other leg.",
          "Continue alternating legs for the desired number of repetitions."
        ],
        // workoutId: 2017
      },
      {
        bodyPart: "waist",
        equipment: "barbell",
        gifUrl: "https://v2.exercisedb.io/image/5LvNfT82laHyTp",
        // id: "2800",
        name: "barbell sitted alternate leg raise (female)",
        progress: [],
        target: "abs",
        secondary: [
          "hip flexors",
          "quadriceps"
        ],
        instructions: [
          "Sit on a bench with your back straight and hold a barbell across your thighs.",
          "Place your hands on the sides of the bench for support.",
          "Keeping your legs straight, lift one leg up as high as possible while keeping it parallel to the ground.",
          "Lower the leg back down and repeat with the other leg.",
          "Continue alternating legs for the desired number of repetitions."
        ],
        // workoutId: 2016
      },
      {
        bodyPart: "waist",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/kXoOcAlD51wuBt",
        // id: "0282",
        name: "decline sit-up",
        progress: [],
        target: "abs",
        secondary: [
          "hip flexors",
          "lower back"
        ],
        instructions: [
          "Lie on a decline bench with your feet secured and your knees bent.",
          "Place your hands behind your head or across your chest.",
          "Engage your abs and lift your upper body off the bench, curling forward towards your knees.",
          "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
          "Repeat for the desired number of repetitions."
        ],
        // workoutId: 2015
      },
      {
        bodyPart: "upper arms",
        equipment: "dumbbell",
        gifUrl: "https://v2.exercisedb.io/image/gbGSIqVPY8Cy2b",
        // id: "1656",
        name: "dumbbell biceps curl v sit on bosu ball",
        progress: [],
        target: "biceps",
        secondary: [
          "forearms",
          "shoulders"
        ],
        instructions: [
          "Sit on a bosu ball with your feet flat on the ground and your knees bent at a 90-degree angle.",
          "Hold a dumbbell in each hand with your palms facing forward and your arms fully extended down by your sides.",
          "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
          "Continue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.",
          "Hold the contracted position for a brief pause as you squeeze your biceps.",
          "Inhale and slowly begin to lower the dumbbells back to the starting position.",
          "Repeat for the desired number of repetitions."
        ],
        // workoutId: 2014
      }
    ],
  },
  {
    name: 'Recommended Plan 3: Cardio/Legs', goal: "Improve cardio endurance and leg strength", workouts: [
      {
        bodyPart: "upper legs",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/SnSQHwx8sNGknJ",
        instructions: ["Stand with your feet shoulder-width apart.", "Bend your knees slightly and jump backwards, pushing off with both feet.", "Land softly on the balls of your feet, bending your knees to absorb the impact.", "Repeat for the desired number of repetitions."],
        name: "backward jump",
        progress: [],
        secondary: ["hamstrings", "glutes", "calves"],
        target: "quads",
        // workoutId: 2000,
      },
      {
        bodyPart: "upper legs",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/XepqIICNKiRJ8l",
        instructions: ["Stand with your feet shoulder-width apart.", "Lower your body into a squat position by bending your knees and pushing your hips back.", "Jump up explosively, extending your hips, knees, and ankles.", "While in mid-air, quickly bring your feet together.", "Land softly on the balls of your feet and immediately drop back into a squat position.", "Repeat for the desired number of repetitions."],
        name: "bodyweight drop jump squat",
        progress: [],
        secondary: ["quadriceps", "hamstrings", "calves"],
        target: "glutes",
        // workoutId: 2001,
      },
      {
        bodyPart: "upper legs",
        equipment: "barbell",
        gifUrl: "https://v2.exercisedb.io/image/1N33o-pSmiSdfN",
        instructions: ["Start by standing with your feet shoulder-width apart, holding a barbell across your upper back.", "Lower your body into a squat position by bending your knees and pushing your hips back.", "Once you reach the bottom of the squat, explode upwards by jumping off the ground.", "As you jump, extend your hips, knees, and ankles, pushing through your toes.", "Land softly back into the squat position and immediately repeat the movement for the desired number of repetitions."],
        name: "barbell jump squat",
        progress: [],
        secondary: ["quadriceps", "hamstrings", "calves"],
        target: "glutes",
        // workoutId: 2002,
      },
      {
        bodyPart: "upper legs", equipment: "body weight", gifUrl: "https://v2.exercisedb.io/image/wvEBnfbLWMekvu", instructions: ["Stand with your feet shoulder-width apart.", "Bend your knees and lower your body into a squat position.", "Swing your arms back for momentum.", "Jump forward explosively, extending your hips, knees, and ankles.", "Land softly on the balls of your feet and immediately go into the next jump.", "Repeat for the desired number of repetitions."],
        name: "forward jump",
        progress: [],
        progress: [], secondary: ["calves", "hamstrings", "glutes"],
        target: "quads",
        // workoutId: 1472
      },
      {
        bodyPart: "cardio",
        equipment: "rope",
        gifUrl: "https://v2.exercisedb.io/image/DWrGCLFB3Rx3Z0",
        instructions: ["Hold the handles of the jump rope with your hands, palms facing inward.", "Stand with your feet shoulder-width apart and knees slightly bent.", "Swing the rope over your head and jump over it as it comes towards your feet.", "Land softly on the balls of your feet and repeat the jump as the rope comes around again.", "Continue jumping for the desired duration or number of repetitions."],
        name: "jump rope",
        progress: [],
        secondary: ["calves", "quadriceps", "hamstrings", "glutes"],
        target: "cardiovascular system",
        // workoutId: 2003,
      },
      {
        bodyPart: "upper legs",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/9agmPbDNPXBww6",
        instructions: ["Stand with your feet shoulder-width apart.", "Lower your body into a squat position by bending your knees and pushing your hips back.", "Jump explosively off the ground, extending your hips, knees, and ankles.", "While in mid-air, quickly bring your arms forward for balance.", "Land softly on the balls of your feet and immediately go into the next repetition.", "Repeat for the desired number of repetitions."],
        name: "jump squat",
        progress: [],
        secondary: ["quadriceps", "hamstrings", "calves"],
        target: "glutes",
        // workoutId: 2004,
      },
      {
        bodyPart: "upper legs",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/nMGlOblCFMLHnG",
        instructions: ["Stand with your feet shoulder-width apart.", "Lower your body into a squat position by bending your knees and pushing your hips back.", "Jump explosively, extending your hips and knees fully.", "Land softly on the balls of your feet and immediately lower your body back into a squat position.", "Repeat for the desired number of repetitions."],
        name: "jump squat v. 2",
        secondary: ["quadriceps", "hamstrings", "calves"],
        target: "glutes",
        // workoutId: 2005,
      },
      {
        bodyPart: "upper legs",
        equipment: "barbell",
        gifUrl: "https://v2.exercisedb.io/image/PUFaNhjW0YwZzu",
        instructions: ["Start by kneeling on the ground with your feet hip-width apart and your toes pointing forward.", "Hold a barbell across your upper back, resting it on your shoulders.", "Engage your core and glutes, then explosively jump up into the air, extending your hips and knees.", "As you jump, push through your toes and fully extend your ankles, knees, and hips.", "Land softly back on the ground, bending your knees to absorb the impact.", "Immediately go into the next repetition, repeating the jump squat motion."],
        name: "kneeling jump squat",
        progress: [],
        secondary: ["quadriceps", "hamstrings", "calves"],
        target: "glutes",
        // workoutId: 2006,
      },
      {
        bodyPart: "upper legs",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/l-ogMiegPX69yC",
        instructions: ["Start by standing with your feet shoulder-width apart.", "Take a step forward with your right foot, lowering your body into a lunge position.", "Push off with your right foot and jump into the air, switching the position of your feet mid-air.", "Land softly with your left foot forward and immediately lower your body into a lunge position.", "Continue alternating between lunges and jumps for the desired number of repetitions."],
        name: "lunge with jump",
        progress: [],
        secondary: ["quadriceps", "hamstrings", "calves"],
        target: "glutes",
        // workoutId: 2007,
      },
      {
        bodyPart: "cardio",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/r26lL2-7CWGO4C",
        instructions: ["Start in a push-up position with your hands shoulder-width apart and your body in a straight line.", "Lower your chest towards the ground by bending your elbows, keeping your body straight.", "Push through your hands to extend your arms and return to the starting position.", "Quickly bring one knee towards your chest, then quickly switch and bring the other knee towards your chest.", "Continue alternating knees as fast as you can while maintaining good form.", "Continue for the desired duration or number of repetitions."],
        name: "push to run",
        progress: [],
        secondary: ["quadriceps", "hamstrings", "calves"],
        target: "cardiovascular system",
        // workoutId: 2008,
      },
      {
        bodyPart: "cardio",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/r26lL2-7CWGO4C",
        instructions: ["Start in a push-up position with your hands shoulder-width apart and your body in a straight line.", "Lower your chest towards the ground by bending your elbows, keeping your body straight.", "Push through your hands to extend your arms and return to the starting position.", "Quickly bring one knee towards your chest, then quickly switch and bring the other knee towards your chest.", "Continue alternating knees as fast as you can while maintaining good form.", "Continue for the desired duration or number of repetitions."],
        name: "push to run",
        progress: [],
        secondary: ["quadriceps", "hamstrings", "calves"],
        target: "cardiovascular system",
        // workoutId: 2009,
      },
      {
        bodyPart: "upper legs",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/l-ogMiegPX69yC",
        instructions: ["Start by standing with your feet shoulder-width apart.", "Take a step forward with your right foot, lowering your body into a lunge position.", "Push off with your right foot and jump into the air, switching the position of your feet mid-air.", "Land softly with your left foot forward and immediately lower your body into a lunge position.", "Continue alternating between lunges and jumps for the desired number of repetitions."],
        name: "lunge with jump",
        progress: [],
        secondary: ["quadriceps", "hamstrings", "calves"],
        target: "glutes",
        // workoutId: 2010,
      },
      {
        bodyPart: "upper legs",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/z4ue41osP98t1k",
        instructions: ["Stand with your feet shoulder-width apart.", "Take a step forward with your right leg, lowering your body into a lunge position.", "Keep your torso upright and your front knee aligned with your ankle.", "Push off with your right foot and bring your left foot forward, stepping into a lunge position with your left leg.", "Continue alternating legs and walking forward, maintaining a controlled and steady pace.", "Repeat for the desired number of repetitions."],
        name: "walking lunge",
        progress: [],
        secondary: ["quadriceps", "hamstrings", "calves"],
        target: "glutes",
        // workoutId: 2011,
      },
      {
        bodyPart: "cardio",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/fC5H5hEb3mMXqz",
        instructions: ["Stand with your feet hip-width apart.", "Lift your right knee up towards your chest as high as you can while balancing on your left leg.", "Step forward with your right foot and lower your body into a lunge position, bending both knees to a 90-degree angle.", "Push off with your right foot and bring your left knee up towards your chest.", "Step forward with your left foot and lower your body into a lunge position.", "Continue alternating legs and lunging forward, keeping your core engaged and maintaining a steady pace.", "Repeat for the desired number of repetitions."],
        name: "walking high knees lunge",
        progress: [],
        secondary: ["quadriceps", "hamstrings", "glutes", "calves"],
        target: "cardiovascular system",
        // workoutId: 2012,
      },
      {
        bodyPart: "upper legs",
        equipment: "smith machine",
        gifUrl: "https://v2.exercisedb.io/image/5ZELpNX4nxRtUg",
        instructions: ["Set up the smith machine with the barbell at hip height.", "Stand facing away from the machine with your feet shoulder-width apart.", "Step back with your right foot and place it on the barbell, resting the top of your foot on the bar.", "Bend your left knee and lower your body into a lunge position, keeping your back straight.", "Push through your left heel to return to the starting position.", "Repeat on the other side, stepping back with your left foot.", "Continue alternating sides for the desired number of repetitions."],
        name: "smith sprint lunge",
        progress: [],
        secondary: ["quadriceps", "hamstrings", "calves"],
        target: "glutes",
        // workoutId: 2013,
      }
    ]
  },

];

module.exports = recommendedPlans;