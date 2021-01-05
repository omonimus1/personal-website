var color_text  = '#FFD700';
var default_color_text = '#228B22';
var default_color_bar = '#e6e6e6';
var color_bar =   '#1E90FF';


$('#collapseOne').on('shown.bs.collapse', function () {
    // QUando apriamo, settiamo gli altri normali e quelli correnti con i color scelti
    document.getElementById('headingOne').style.backgroundColor =color_bar;
    document.getElementById('headingOne').style.color= color_text;

    document.getElementById('headingTwo').style.backgroundColor =default_color_bar;
    document.getElementById('headingTwo').style.color= default_color_text;

    document.getElementById('headingThree').style.backgroundColor =default_color_bar;
    document.getElementById('headingThree').style.color= default_color_text;
});

// Second bar
$('#collapseTwo').on('shown.bs.collapse', function () {
    // QUando apriamo, settiamo gli altri normali e quelli correnti con i color scelti
    document.getElementById('headingOne').style.backgroundColor = default_color_bar;
    document.getElementById('headingOne').style.color= default_color_text;

    document.getElementById('headingTwo').style.backgroundColor =color_bar;
    document.getElementById('headingTwo').style.color= color_text;

    document.getElementById('headingThree').style.backgroundColor =default_color_bar;
    document.getElementById('headingThree').style.color= default_color_text;
});

// Third bar
$('#collapseThree').on('shown.bs.collapse', function () {
    // QUando apriamo, settiamo gli altri normali e quelli correnti con i color scelti
    document.getElementById('headingOne').style.backgroundColor = default_color_bar;
    document.getElementById('headingOne').style.color= default_color_text;

    document.getElementById('headingTwo').style.backgroundColor =default_color_bar;
    document.getElementById('headingTwo').style.color= default_color_text;

    document.getElementById('headingThree').style.backgroundColor = color_bar;
    document.getElementById('headingThree').style.color= color_text;
});




