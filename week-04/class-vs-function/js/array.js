const tasks = [
  {name: `Morning class`, date: `May 27`},
  {name: `Lunch`, date: `May 27`},
  {name: `Afternoon class`, date: `May 27`},
];



// Examples of different data formats
// AJAX = Asyncronous Javascript and XML (which is now more commonly JSON)

const apptsJSON = `
  [
    {"name": "Morning class", "date": "May 27"},
    {"name": "Lunch", "date": "May 27"},
    {"name": "Afternoon class", "date": "May 27"},
  ]
`;

const apptsXML = `
  <Appts>
    <Appt name="Morning class" date="May 27" />
    <Appt name="Lunch" date="May 27" />
    <Appt name="Afternoon class" date="May 27" />
  </Appts>
`