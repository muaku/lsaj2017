$(function() {
    $('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 20, // Creates a dropdown of 15 years to control year
	    formatSubmit: 'yyyy/mm/dd',
	    hiddenName: true,
	    showMonthsShort: true,
	    today: '',
	    close: 'OK',
	    closeOnSelect: true
	  });



});

  

$("#register").click(function(){

	var name = $("#name").val()
	var degree = $("input[type=radio][name=group1]:checked").val()
	var grade = $("input[type=radio][name=group2]:checked").val()
	var schoolname = $("#schoolname").val()
	var email = $("#email").val()

	if (name === "" || typeof(degree) === "undefined" || typeof(grade) === "undefined" || schoolname === "" || email === "") {
		$("#errortext").css("color", "red");
		$('#errortext').text("Please fill all the required")
	} else {
		$('#errortext').text("")

		var data = {
	    	"name": name,
	    	"degree": degree,
	  		"grade": grade,
	  		"schoolname": schoolname,
	  		"email": email,
	  		"phone": $("#phone").val(),
	  		"youth_day": $('#datepicker1').val(),
	  		"unions_day": $('#datepicker2').val(),
	  		"union_women_day": $('#datepicker3').val()
	    }

		// post request
		$.post("https://lsaj2017.herokuapp.com/register",data, function(response){
			if (response === "OK") {
				// clear all input
				$("#form").find('input').val("")
				$("#form").find('input:date').val("")

				// apply error text
				$("#errortext").css("color", "green");
				$('#errortext').text("ຂອບໃຈທີ່ໃຫ້ຄວາມຮ່ວມມື")
			} else {
				$("#errortext").css("color", "red");
				$('#errortext').text(response)
			}
		})
	}


})
    
    


