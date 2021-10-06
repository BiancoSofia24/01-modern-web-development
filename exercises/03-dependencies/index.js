import { isBefore, compareAsc, format } from "date-fns";


const formatDay = date => format(date, 'dd-MMM-yyyy');
console.log(`Cake for me on ${formatDay(new Date(1993, 2, 24))} 🎂😸!!!`);

const birthdays = [
    new Date(1996, 11, 24),
    new Date(2014, 5, 21),
    new Date(1993, 2, 24),
    new Date(2020, 9, 26),
    new Date(2017, 8, 9)
]

for(let i = 1; i < birthdays.length; i++) {
    let date = formatDay(birthdays[i]);
    if (isBefore(birthdays[i-1], birthdays[i])) {
        console.log(`The person born in ${date} is younger 👶!`);
    } else {
        console.log(`The person born in ${date} is older 🧓!`);
    }
}

const olderOnTop = dates => dates.sort(compareAsc);

console.log(`Ordered birthdays:`)
for(let i = 0; i < birthdays.length; i++) {
    const array = olderOnTop(birthdays);
    console.log(formatDay(array[i]));
}