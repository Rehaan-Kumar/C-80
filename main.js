name_of_students_array= [];

function submit() {
    var display_array = [];
    
    for (i=1;i<=4;i++) {
        var student_name = document.getElementById("student_" + i).value;
        name_of_students_array.push(student_name);
    }
    
    var array_length = name_of_students_array.length;
    for (j=0;j<array_length;j++) {
        display_array.push("<h4>Name: "+name_of_students_array[j]+"</h4>") 
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;

    var remove_commas = display_array.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="block";
}

function sorting() {
    var display_sorted_array = [];
    name_of_students_array.sort();
    var array_length = name_of_students_array.length;
    for (j=0;j<array_length;j++) {
        display_sorted_array.push("<h4>Name: "+name_of_students_array[j]+"</h4>") 
    }
    var remove_commas = display_sorted_array.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}