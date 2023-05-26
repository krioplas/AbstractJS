// const firstName = 'Evgeny';
// const lastName = 'Loginov';
// const age = 30;

// let str;

// str = `
// <ul>
//     <li>First name: ${firstName}</li>
//     <li>Last name: ${lastName}</li>
//     <li>Age: ${5+5}</li>
//     <li>Random: ${Math.random()}</li>
// </ul>
// `
// document.body.innerHTML = str;

const text = `Some
simple multiline
text`;

function wrapInParagraph(text){
    return text.split(/\n/).map(line => `<p>${line}</p>`).join('\n');
}
console.log(wrapInParagraph(text));