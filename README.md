// Project Planning

First:

-Validate inputs
1 AssignmentGroup.course_id needs to match CourseInfo.id or throw an error
2 Make sure points_poosible > 0 and a valid number
3 Use try/catch

Second:

-Due Dates
Use bolean to say if assignments due = true or not

-Learner Submissions Groups into Objects
Organize by learner_id

Third:

-Process the assignment submissions
1 late assignments - submitted after the due_at take 10% off points_possible
2 score/possible_points = grade in percentage
3 store grade under assignment ID in that learners object

Fourth:

-Weighted Grade
1 sum of points earned on valid assignments
2 take sum/all possible points = weighted grade per learner_id

Fifth:
-Output format
1 id
2 avg
3 percentage for each assigment ID
4 should look like:
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];

Sixth:

-Helper Functions??
1 function isLate (submitted_at, due_at)
2 function calcPercentage
3 function calcWeightedAvg
