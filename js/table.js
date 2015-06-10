$(document).ready(function() {
    console.log('hello!');
    $(".tab").click(function() {
        $(".tab").removeClass('active');
        $(this).addClass("active");
    });
});

var gradeArray = [{
        class: "biology",
        teacher: "John Manning",
        date: "06/4/15",
        grade: "88.56",
        letter: "B"
    },

    {
        class: "math",
        teacher: "Peter Parker",
        date: "05/22/15",
        grade: "80.9",
        letter: "C"
    },

    {
        class: "english",
        teacher: "Jim Raynor",
        date: "04/20/15",
        grade: "93.4",
        letter: "A"
    }
]

var table = $("<TABLE></TABLE>");
var row = $("<TR></TR>");
var td = $("<TD></TD>");
td.text('some text');
row.append(td);
table.append(row);

