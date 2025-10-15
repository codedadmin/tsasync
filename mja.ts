import { getInput } from "./utilities";

let students = [
    { name: "Mohammad", id: 0, Grade: 100},
]
let studentGrades = [
    { subject: "Math", grade: 90, studentId: 0},
]

function updateMainGrade(studentId: number, grade: number) {
   
    students.find(student => student.id === studentId).Grade += grade;
}

function getAllStudents() {
    console.table(students);
}

function getAllStudentsGrades() {
    console.table(studentGrades);
}

function getStudentGrades(studentId: number) {
    return studentGrades.filter(grade => grade.studentId === studentId);
}

function getStudent(studentId: number) {
    return students.find(student => student.id === studentId);
}

async function newStudent() {
    console.log("\x1b[36mEnter Student Name: \x1b[0m");   
    const name = await getInput();
    console.log("\x1b[36mEnter Student ID: \x1b[0m");   
    let id = await getInput();
    let idNumber = Number(id);

    if (getStudent(idNumber) == undefined) {
        students.push({ name: name, id: idNumber, Grade: 0});
        console.log("\x1b[32mStudent added successfully!\x1b[0m");    
    } else {
        console.log("\x1b[31mStudent already exists\x1b[0m"); 
    }

}

async function newGrade() {
    console.log("\x1b[36mEnter Subject: \x1b[0m"); 
    let subject = await getInput();

    console.log("\x1b[36mEnter Student ID: \x1b[0m");    
    let id = await getInput();
    let idNumber = Number(id);

    if (getStudent(idNumber) == undefined) {
        console.log("\x1b[31mStudent does not exist\x1b[0m");    
    } else {
        console.log("\x1b[36mEnter Grade: \x1b[0m");        
        let grade = await getInput();
        let gradeNumber = Number(grade);
        if (gradeNumber < 0 || gradeNumber > 100) {
            console.log("\x1b[31mInvalid grade\x1b[0m");        
        } else {
            studentGrades.push({ subject: subject, grade: gradeNumber, studentId: idNumber});
            updateMainGrade(idNumber, gradeNumber);
            console.log("\x1b[32mGrade added successfully!\x1b[0m");        
        }
} }

const main = async () => {

        while (true) {
            console.log(`\x1b[33m
                Welcome to the Student Grading System
                1: New Student     2: New Grade          3: View Student Grades
                4: Get Student     5: View All Grades    6: View All Students    
                7: Exit
                \x1b[0m`);
            let choice = await getInput();
            let choiceNumber = Number(choice);
            if (choiceNumber == 1) {
                await newStudent();
            } else if (choiceNumber == 2) {
                await newGrade();
            } else if (choiceNumber == 3) {

                console.log("\x1b[36mEnter Student ID: \x1b[0m"); 
                let id = await getInput();
                let idNumber = Number(id);
                console.table(getStudentGrades(idNumber));

            } else if (choiceNumber == 4) {

                console.log("\x1b[36mEnter Student ID: \x1b[0m"); 
                let id = await getInput();
                let idNumber = Number(id);
                console.table(getStudent(idNumber));

            } else if (choiceNumber == 5) {
                getAllStudentsGrades();
            } else if (choiceNumber == 6) {
                getAllStudents();
            } else if (choiceNumber == 7) {
                console.log("\x1b[35mExiting...\x1b[0m"); 
                break;
            }
        }
    }

main();
