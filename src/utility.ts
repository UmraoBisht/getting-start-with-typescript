// Utility types

//Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {
        ...assign,
        ...propsToUpdate
    }
}
const assign1: Assignment = {
    studentId: '123',
    title: 'Math',
    grade: 85
}


const assignGrade: Assignment = updateAssignment(assign1, { grade: 99 })
console.log(assignGrade);




// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign;
}


const assingVerified: Readonly<Assignment> = {
    ...assignGrade, verified: true
}

// assingVerified.grade = 88;

const result = recordAssignment({ ...assignGrade, verified: true });
console.log(result);




// Record
const hexColorMap: Record<string, string> = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF'
}

type Students = 'sara' | 'kelly'
type LetterGrades = "A" | "B" | "C" | "D" | "F"

const finalGrades: Record<Students, LetterGrades> = {
    sara: 'A',
    kelly: 'B'
}

interface Grades {
    assing1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    sara: { assing1: 85, assign2: 93 },
    kelly: { assing1: 90, assign2: 79 }
}


// pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: '123',
    grade: 90
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: '123',
    title: 'Math',
}



// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "F">
type HightGrades = Extract<LetterGrades, "A" | "B">



// Nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>;



// ReturnType

// type newAssign = {
//     title: string, points: number
// }

const createNewAssign = (title: string, points: number) => {
    return {
        title, points
    }
}

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign("Utility Types", 100)

console.log(tsAssign);



// parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Math", 100]
const tsAssign2: newAssign = createNewAssign(...assignArgs)

console.log(tsAssign2);




// awaited helps us with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    email: string,
    username: string

}
const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    })
    return data;
}


type FetchedUserReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users));
