const StudentForm=document.getElementByID("StudentForm");
const StudentList=document.getElementByID("StudentList");
const errorDiv=document.getElementByID("error");
const Students=[];
StudentForm.addEventListener('submit',function(event){
    event.preventDefault();
    const StudentId=document.getElementByID('StudentID').value;
    const StudentName=document.getElementByID('StudentName').value;
    const StudentAge=document.getElementByID('StudentAAge').value;
    try{
        addStudent( StudentID,StudentName,StudentAge);
        displayStudents();
        errorDiv.textContent="";
    }
    catch(error){
        errorDiv.textContent="error.message";

    }
    StudentForm.reset();
});
function addStudent(id,name,age){
    if(!id||!name||!age){
        throw new error("hhgugu");}
    if(isNaN(age)||age<=0){
        throw new error("uygygeygy");}
    const StudentExists=Students.some(Student=>Student.id===id);
    if(StudentExists){
        throw new error("jbhb");}
        const Student={
            id,
            name,
            age:parseInt(age,10)
        };
            Students.push(Student);
        }
        function displayStudents(){
            StudentList.innerHTML='Student Records';
            Students.forEach(Students=>{
                const li=document.createElement('li')
                li.textContent=`ID:${student.id}Name:${student.name} Age:${student.age}`;
                StudentList.appendChild(li);
            });

        
}

