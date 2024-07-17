"use strict";
// Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: '123',
    title: 'Math',
    grade: 85
};
const assignGrade = updateAssignment(assign1, { grade: 99 });
console.log(assignGrade);
// Required and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assingVerified = Object.assign(Object.assign({}, assignGrade), { verified: true });
// assingVerified.grade = 88;
const result = recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true }));
console.log(result);
// Record
const hexColorMap = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF'
};
const finalGrades = {
    sara: 'A',
    kelly: 'B'
};
const gradeData = {
    sara: { assing1: 85, assign2: 93 },
    kelly: { assing1: 90, assign2: 79 }
};
const score = {
    studentId: '123',
    grade: 90
};
const preview = {
    studentId: '123',
    title: 'Math',
};
// ReturnType
// type newAssign = {
//     title: string, points: number
// }
const createNewAssign = (title, points) => {
    return {
        title, points
    };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Math", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
});
fetchUsers().then(users => console.log(users));
