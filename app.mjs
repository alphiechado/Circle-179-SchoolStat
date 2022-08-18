function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  const frontend = 'Frontend';
  const backend = 'Backend';
  const cloud = 'cloud';
  const M = 'male';
  const F = 'female';
  const O = 'others';
  let noOfFrontStudents = 0;
  let noOfBackStudents = 0;
  let noOfCloudStudents = 0;
  let noOfMale = 0;
  let noFemale = 0;
  let noOthers = 0;
  let totalAge = 0;
  let table2 = document.getElementById('students');
  let table3 = document.getElementById('studentsNo');
  let table4 = document.getElementById('age');

  let Instructors = [
    {
      name: 'John Doe',
      courses: [frontend, cloud],
    },
    {
      name: 'Jane Doe',
      courses: [cloud],
    },
    {
      name: 'Eloho Ben',
      courses: [backend, cloud],
    },
    {
      name: 'Ben Victor',
      courses: [frontend, backend, cloud],
    },
    {
      name: 'Valerie',
      courses: [frontend],
    },
  ];

  let students = [
    {
      name: 'Billy Ken',
      gender: M,
      age: 20,
      course: frontend,
    },
    {
      name: 'Katty',
      gender: F,
      age: 22,
      course: backend,
    },
    {
      name: 'Kenneth',
      gender: M,
      age: 26,
      course: cloud,
    },
    {
      name: 'Janneth',
      gender: O,
      age: 22,
      course: frontend,
    },
    {
      name: 'Bill',
      gender: M,
      age: 20,
      course: frontend,
    },
    {
      name: 'Victoria',
      gender: F,
      age: 23,
      course: frontend,
    },
  ];

  // instructors and no of courses
  let table = document.getElementById('instructors');
  for (let i = 0; i < Instructors.length; i++) {
    let row = `<tr>
          <td>${Instructors[i].name}</td>
          <td>${Instructors[i].courses.length}</td>
        </tr>
        `;
    table.innerHTML += row;
  }

  // students

  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
    switch (students[i].gender) {
      case M: {
        noOfMale++;
        break;
      }
      case F: {
        noFemale++;
        break;
      }
      default:
        noOthers++;
    }

    switch (students[i].course) {
      case frontend: {
        noOfFrontStudents++;
        break;
      }
      case backend: {
        noOfBackStudents++;
        break;
      }
      case cloud: {
        noOfCloudStudents++;
        break;
      }
    }
  }
  // age of students
  let ageArr = students.map((student) => student.age);
  const maxAge = Math.max(...ageArr);
  const minAge = Math.min(...ageArr);
  const avrAge = (totalAge / ageArr.length).toFixed(2);

  let row = `<tr>
<td>${frontend}</td>
<td>${noOfFrontStudents}</td>
</tr>
<tr>
<td>${backend}</td>
<td>${noOfBackStudents}</td>
</tr>
<tr>
<td>${cloud}</td>
<td>${noOfCloudStudents}</td>
</tr>
`;

  let rowGender = `<tr>
<td>${noOfMale}</td>
<td>${noFemale}</td>
<td>${noOthers}</td>
</tr>`;

  let rowAge = `<tr>
<td>${maxAge}</td>
<td>${minAge}</td>
<td>${avrAge}</td>
</tr>`;

  table2.innerHTML += row;
  table3.innerHTML += rowGender;
  table4.innerHTML += rowAge;

  document.getElementById('sort').addEventListener('click', (e) => {
    e.preventDefault();
    sortTable('instructors');
  });
  document.getElementById('sort1').addEventListener('click', (e) => {
    e.preventDefault();
    sortTable('students');
  });

  // sorting
  function sortTable(tableId) {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(tableId);
    switching = true;
    /*Make a loop that will continue until
            no switching has been done:*/

    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
              first, which contains table headers):*/
      for (i = 1; i < rows.length - 1; i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
                one from current row and one from the next:*/
        x = rows[i].getElementsByTagName('TD')[1];
        y = rows[i + 1].getElementsByTagName('TD')[1];
        //check if the two rows should switch place:
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }

      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
}
// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //