// Створити телефонну книгу

// - створити початковий клас Abonent, де зберігатимуться ім*я і номер
// - створити set який прийматиме телефон і номер
// - створити get який виводитиме данні про абонента
// - створити три різних юзери
// - вивести данні


// class Abonent {
//   constructor(props) {
//     this.newContact = props.newContact
//   }

//   firstName = ""
//   phoneNum = ""

//   set newContact(newAbonent) {
//     const inputRow = newAbonent.split(", ")
//     this.firstName = inputRow[0]
//     this.phoneNum = inputRow[1]
//   }

//   get newContact() {
//     return `First Name: ${this.firstName}, Phone Number: ${this.phoneNum}`
//   }
// }

// const abonA = new Abonent({
//   newContact: "Андрій, 380958868323"
// })
// console.log(abonA)

// const abonB = new Abonent({
//   newContact: "Богдан, 380991168763"
// })
// console.log(abonB)

// const abonС = new Abonent({
//   newContact: "Циля, 380689073401"
// })
// console.log(abonС)


//--------------------------//
// Варіант з прийомом даних збраузера та виводом їх в браузер

// class Abonent {
//   constructor(props) {
//     this.newContact = props.newContact
//   }

//   firstName = ""
//   phoneNum = ""

//   set newContact(newAbonent) {
//     const inputRow = newAbonent.split(", ")
//     this.firstName = inputRow[0]
//     this.phoneNum = inputRow[1]
//   }

//   get newContact() {
//     return `First Name: ${this.firstName}, Phone Number: ${this.phoneNum}`
//   }
// }

// const newEntry = prompt('Введіть Ім\'я та Номер телефону нового абонента через кому з пробілом. Приклад: "Олег, 380990001122"')

// const abonA = new Abonent({
//   newContact: newEntry
// })
// alert(`Новий контакт записано! Деталі: ${abonA.firstName}, ${abonA.phoneNum}`)