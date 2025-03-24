// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);

//   function validateData(course, ag) {
//     try {
//         if (ag.course_id !== course.id) {
//             throw new Error(`Invalid Assignment`);
//         }
//         ag.assignments.forEach((assignment) => {
//             if (typeof assignments.points_possible !== "number" || assignment.points_possible <= 0) {
//                 throw new Error(`Invalid possible points for assignment ${assignment.id}`)
//             }
            
//         });
//     } catch (error) {
//         console.error(`Validation Error:`, error.message);
//         throw error;
//     }
//   }


// //Booleans to filter due dates for assigments
//   const isDue = new Date(assignment.due_at) <= new Date();
//   const isLate = new Date(submission.submitted_at) > new Date(assignment.due_at);

//   for (let submission of submissions) {
//     const assignment = filteredAssignments.find(a => a.id === submission.assignment_id);
//     if (!assignment) continue;
//     const dueDate = new Date(assignment.due_at);
//     const submittedDate = new Date(submission.submitted_at);
//     const isLate = submittedDate > dueDate;

//     let score = submission.submission.score;
//     if (isLate) {
//         score -= assignment.points_possible * 0.1;
//     }
//   }

//   let learnersData = {};

function getLearnerData(course, ag, submissions) {
    try {
        if (ag.course_id !== course.id) {
            throw new error(`Invalid Assignment`);
        }

        const todayDate = "2025-03-22";
        const learners ={};

        function isLate(dueDate, subDate)
        const part1 = subDate.split("-");
        const part2 = dueDate.split("-");

        const year1 = parseInt(part1[0]);
        const month1 = parseInt(part1[1]);
        const day1 = parseInt(part1[2]);

        const year2 = parseInt(part2[0]);
        const month2 = parseInt(part2[1]);
        const day2 = parseInt(part2[2]);

        if (year1 > year2) return true;
        if (year1 < year2) return false;
        if (month1 > month2) return true;
        if (month1 < month2) return false;
        if (day1 > day2) return true;
        if (day1 < day2) return false;
    }

    function findAssingment(assignmentId) {
        for (let i= 0; i < ag.assignments.length; i++) {
            if (ag.assignments[i].id === assignmentId) {
                return ag.assignments[i];
            }
        }
        return null;
    }

    for (let i = 0; i < submissions.lenght; i++) {
        const sub = submissions[i];
        const assignment = findAssignment(sub.assignment_id);

        if (!assignment) {
            console.warn(`Assignment ID ${sub.assignment_Id} not found`);
            continue;
        }

        if (isLate(assignment.due_at, todayDate)) {
            continue;
        }
        if (typeof assignment.points_possible !== "number" || assignments.points_possible === 0) {
            console.warn(`Invalid scoring for assignment ID ${assignment.id}`);
            continue;
        }

        let score = sub.submission.score;

        if (isLate(sub.submission.submitted_at, assignment.due_at)) {
            score -= 0.1 * assignment.points_possible;
            if (score < 0) score = 0;
        }

        const percentage = score / assignment.points_possible;
    }
    


}
