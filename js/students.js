var selectGraphics = document.getElementById('graphics');
var selectStudents = document.getElementById('students-option');
var bodyGraphics = document.getElementById('graphics-cuerpo');
var bodyStudents = document.getElementById('content-students');

console.log(selectGraphics);
console.log(selectStudents);
console.log(bodyGraphics);
console.log(bodyStudents);


selectStudents.addEventListener("load",function(event){
  bodyStudents
})
selectStudents.addEventListener('click', function (event) {
    
    bodyGraphics.classList.toggle('ocult');
  
    bodyStudents.classList.toggle('see');
});

selectGraphics.addEventListener('click', function (event) {
  bodyStudents.classList.add('ocult');
  bodyGraphics.classList.add('see');
});

/*selectGraphics.addEventListener('click', function showStudents(event) {
  bodyStudents.classList.add('ocult');
  bodyGraphics.classList.add('see');
});


// Lima tiene un score antes data.LIM["2017-1"].students[12]["sprints"][3].score["tech"]
// data.AQP["2016-2"].students[]["sprints"]
// data.AQP["2016-2"].students[2]["sprints"][3]["score"].tech
// data.AQP["2016-2"].students[n]["sprints"][3]*/
