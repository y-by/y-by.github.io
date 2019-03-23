console.log("i'm working");
// Take 2

let table = document.getElementById( "table" );
let data1 = document.querySelector('.mulA-select')


var tableArr = [];
for ( var i = 1; i < table.rows.length; i++ ) {
    tableArr.push({
        multiA: table.rows[i].cells[0].innerHTML,
        multiB: table.rows[i].cells[1].innerHTML,
        multiC: table.rows[i].cells[2].innerHTML,
        multiD: table.rows[i].cells[3].innerHTML,
        instrument: table.rows[i].cells[4].innerHTML,
        microphone: table.rows[i].cells[5].innerHTML,
        band1: table.rows[i].cells[6].innerHTML,
        band2: table.rows[i].cells[7].innerHTML,
        band3: table.rows[i].cells[8].innerHTML
    });
    console.log(table.rows[i]);
  }
  console.log(table.rows[1].cells[1].input);

for (i = 2; i < document.getElementById("table").rows.length; i++) {
  store.push(table[i]);
};
localStorage.setItem("store",JSON.stringify(store));

// talk to the button
let button = document.querySelector('#btn')

// clear the locall host and delete the view
button.addEventListener('click', function () {
  localStorage.clear();
  console.log(data1);
  window.location.reload()
});
