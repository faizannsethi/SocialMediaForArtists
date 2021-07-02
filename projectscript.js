function showallcats() {
	// body...
	document.getElementById("searchdropdown").classList.toggle("show");
	document.getElementById("downarr").classList.toggle("rotate");
}

function showsettings() {
	document.getElementById("settings").classList.toggle("show");
}
function aboutus() {
	// body...
	window.open("AboutUs.html","_self");
}



function categoriesSelect(name) {
	// body...
	var checkboxes = document.getElementsByName(name);
    var selected = [];
    var selectedarrays = "";
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
            selectedarrays += checkboxes[i].value;

    }
    }
    localStorage.setItem("categoriesSelected", JSON.stringify(selected));
    if (selected.length <1){

    window.alert("Please choose a category");
}
    else{
    	window.open("timeline.html","_self");

    }


}
function getCategory(category) {
	// body...
	window.alert(category);
	var jsonData = JSON.stringify(category);
	$.ajax({
        url: "http://localhost/project-web/timelineload.php",
        type: "POST",
        data: {field1: jsonData},
         success: function(data){
           window.alert("success");
           return data;
 },
         error: function(xhr, status, error){
          console.error(xhr);
 }
        
    }); 
    

}
function timelineExec() {
	// body...

	var categories_str =String(JSON.parse(localStorage.getItem("categoriesSelected")));


	var categories = categories_str.split(",");


	var length = categories.length;


	if (categories_str != '' && categories != "null"){

	for (var i = categories.length - 1; i >= 0; i--) {
		var folder=categories[i];
		//window.alert(folder);
		//var object_array;
	    var jsonData = JSON.stringify(folder);
	    $.ajax({
        url: "http://localhost/project-web/timelineload.php",
        type: "POST",
        data: {field1: jsonData},
         success: function(data){
           //window.alert("success");
           var object_array = JSON.parse(data);
           console.log(object_array);
           for (var i = object_array.length - 1; i >= 0; i--) {
           	
          
           	var path = object_array[i].ImageID;
           	var caption = object_array[i].Caption;
           	var desc = object_array[i].Description;
           	var username = object_array[i].UserID;
           	var contact = object_array[i].Contact;
           	var date = object_array[i].DateUp;
           	var region = object_array[i].Region;
           	$("#contentDisplayArea").append('<div class="content-picture" onclick="openselectedpost('+"\'"+path+"\'"+","+"\'"+caption+"\'"+","+"\'"+desc+"\'"+","+"\'"+username+"\'"+","+"\'"+contact+"\'"+","+"\'"+date+"\'"+","+"\'"+region+"\'"+')"><img src='+path+'.jpg></div>');


           }
 },
         error: function(xhr, status, error){
          console.error(xhr);
 }
        
    }); 
	    
		

		
	}
}




	}

function uploadAd() {
	// body...
	
	var caption = document.getElementById('uploadCaption').value;
	


	var description = document.getElementById("uploadDescription").value;
	
	var contact = document.getElementById("uploadContact").value;
	var userID = localStorage.getItem("userLoggedIn");
	var region = document.getElementById("uploadRegion").value;
	var category = document.getElementById("uploadCategory").value;

	
	var image = document.getElementById("uploadImage").value;
	window.alert("Uploading");
	
	
	if (caption == "" || description == "" || contact == "" || userID == "" || region == "" || category == "" || image == "") {
		window.alert("Please complete all fields");
	}
	else{
		//var caption_json = JSON.stringify(caption);
		//var description_json = JSON.stringify(description);
		//var contact_json = JSON.stringify(contact);
		//var userID_json = JSON.stringify(userID);
		//var region_json = JSON.stringify(region);
		//var category_json = JSON.stringify(category);
		//var image_selector = $("#uploadimageoutput");
		var image_and_data = new FormData();
		image_and_data.append('imageFile',$('#uploadImage').prop('files')[0]);
		image_and_data.append('caption',caption);
		image_and_data.append('description',description);
		image_and_data.append('contact',contact);
		image_and_data.append('userID',userID);
		image_and_data.append('region',region);
		image_and_data.append('category',category);
		
		$.ajax({
			url: "http://localhost/project-web/uploadpost.php",
			type: "POST",
			
			//data: {'file': image_file, 'caption': caption_json, 'description': description_json, 'contact': contact_json, 'user': userID_json, 'region': region_json, 'category': category_json},
			data: image_and_data,
			contentType: false,
			cache: false,
			processData: false,
			success: function(status){
				status_new = JSON.stringify(status);
				
				
					window.alert("Done!");
					window.open("timeline.html", "_self");


				
				
			},
			error: function(xhr, status, error){
          console.error(xhr);
          if (status != 200) {
          window.alert(JSON.stringify(status));
      }
 }
		});

	}


}

//function regButton(){
	


	//window.open("profileSetup.html","_self");
//}

function regOpen(){
	


	window.open("register.html","_self");
}
function displayUploadProfile() {
	// body...
	var image = document.getElementById("profilePicImg");
	image.src = URL.createObjectURL(event.target.files[0]);

}


function timelineopen() {
	// body...


	var username = document.getElementById("username_login").value;

	var password = document.getElementById("pwd_inline").value;

	if (username != "" &&password != "") {
		
		var logindata = new FormData();
		logindata.append("username", username);
		logindata.append("password", password);
		$.ajax({
			url: "http://localhost/project-web/login.php",
			type: "POST",
			data: logindata,
			contentType: false,
			cache: false,
			processData: false,
			success: function(data){
				window.alert(data);
				if (data == "login successful") {
					//window.alert(data);
					localStorage.setItem("userLoggedIn", username);
					//window.alert(localStorage.getItem("userLoggedIn"));
					window.open("timeline.html", "_self");
				}
				},
			error: function(xhr, status, error) {
				// body...
				window.alert("The username and password do not match the database");
			}

			});
		}
	
	else{
		window.alert("Username and/or password was unfilled.")
	}



}
function loadFile(event) {
	// body...



	var image = document.getElementById('uploadimageoutput');
	image.src = URL.createObjectURL(event.target.files[0]);
}
function openupload() {

	// body...
	window.open("upload.html", "_self");
}
function closeselectedpost() {
	// body...
	document.getElementById("addtofav").innerHTML = "<span class=\"glyphicon glyphicon-heart-empty\"></span>";
	document.getElementById("selectedpost").classList.remove("show");


}
function openselectedpost(path, caption, desc, username, contact, date, region) {
	// body...

	document.getElementById("pictureselectedpost").innerHTML = "";
	document.getElementById("captionselectedpost").innerHTML = "<b>CAPTION: </b>";
	document.getElementById("descriptionselectedpost").innerHTML = "<b>DESCRIPTION: </b>";
	document.getElementById("usernameselectedpost").innerHTML = "<b>USERNAME: </b>";
	document.getElementById("contactselectedpost").innerHTML = "<b>CONTACT: </b>";
	document.getElementById("regionselectedpost").innerHTML = "<b>REGION: </b>";
	document.getElementById("dateselectedpost").innerHTML = "<b>DATE: </b>";
	localStorage.setItem("imageSelected", path);
	localStorage.setItem("captionSelected", caption);
	localStorage.setItem("descSelected", desc);
	localStorage.setItem("usernameSelected", username);
	localStorage.setItem("contactSelected", contact);
	localStorage.setItem("dateSelected", date);
	localStorage.setItem("regionSelected", region);

	

	$("#captionselectedpost").append(caption);
    $("#descriptionselectedpost").append(desc);
	$("#usernameselectedpost").append("<a href='profilePageVisit.html'>"+username+"</a>");
	$("#contactselectedpost").append("<a href=\'https://api.whatsapp.com/send?phone="+contact+"\'>"+contact+"</a>");
	$("#regionselectedpost").append(region);
	$("#dateselectedpost").append(date);

	document.getElementById("selectedpost").classList.toggle("show");

	$("#pictureselectedpost").append("<img src="+path+".jpg></div>");





}
function addToFav() {
	// body...
	if (document.getElementById("addtofav").innerHTML == "<span class=\"glyphicon glyphicon-heart-empty\"></span>") {
		
		var addFavData = new FormData();
		addFavData.append("username", localStorage.getItem("userLoggedIn"));
		addFavData.append("usernameUp", localStorage.getItem("usernameSelected"));
		addFavData.append("caption", localStorage.getItem("captionSelected"));
		addFavData.append("description", localStorage.getItem("descSelected"));
		addFavData.append("contact", localStorage.getItem("contactSelected"));
		addFavData.append("date", localStorage.getItem("dateSelected"));
		addFavData.append("region", localStorage.getItem("regionSelected"));
		addFavData.append("imagepath", localStorage.getItem("imageSelected"));
			$.ajax({
		url: "http://localhost/project-web/addFav.php",
		type: "POST",
		data: addFavData,
		contentType: false,
		cache: false,
		processData: false,
		success: function (data) {
			// body...
			
			if(data == "Added to Favorites"){
			window.alert(data);
			document.getElementById("addtofav").innerHTML = "<span class=\"glyphicon glyphicon-heart\"></span>";
			
			

		}
		    if (data == "Failed to Add") {
		    	window.alert("The post is already a Favorite.");
		    	document.getElementById("addtofav").innerHTML = "<span class=\"glyphicon glyphicon-heart\"></span>";
		    }

		},
		error: function (xhr, status, error) {
			// body...
			window.alert(error);
		}

	});


	}
	else{
		
		var removeFavData = new FormData();
		removeFavData.append("username", localStorage.getItem("userLoggedIn"));
		
		removeFavData.append("imagepath", localStorage.getItem("imageSelected"));
			$.ajax({
		url: "http://localhost/project-web/removeFav.php",
		type: "POST",
		data: removeFavData,
		contentType: false,
		cache: false,
		processData: false,
		success: function (data) {
			// body...
			
			if(data == "Removed from Favorites"){
			window.alert(data);
			document.getElementById("addtofav").innerHTML = "<span class=\"glyphicon glyphicon-heart-empty\"></span>";
			
			
			

		}
		    if (data == "Failed to Remove") {
		    	window.alert("An error occurred.");
		    	//document.getElementById("addtofav").innerHTML = "<span class=\"glyphicon glyphicon-heart-empty\"></span>";
		    }

		},
		error: function (xhr, status, error) {
			// body...
			window.alert(error);
		}

	});
	}

}
function regButton(){


	var firstName = document.getElementsByName("fname")[0].value;

	var lastName = document.getElementsByName("fname")[1].value;


	var email = document.getElementById("email").value;


	var password = document.getElementById("pwd_inline").value;



	var gender = document.getElementById("gender").value;


	var dob = document.getElementById("dob").value;

	var username = document.getElementById("username").value;
	//window.alert("adfsgbdhf");




if (username != "" &&password != "" &&firstName != "" &&lastName != "" &&email != "" &&gender != "" &&dob != ""){
	localStorage.setItem("first",firstName);
	localStorage.setItem("email",email);
	localStorage.setItem("last",lastName);
	localStorage.setItem("password",password);
	localStorage.setItem("gender",gender);
	localStorage.setItem("dob",dob);
	localStorage.setItem("uname",username);
	//window.alert(firstName+email+lastName+password+gender+dob+username);
	//window.open("profileSetup.html","_self");
	var registerData = new FormData();
	registerData.append("firstname", firstName);
	registerData.append("lastname", lastName);
	registerData.append("email", email);
	registerData.append("username", username);
	registerData.append("dob", dob);
	registerData.append("password", password);
	registerData.append("gender", gender);
	$.ajax({
		url: "http://localhost/project-web/register.php",
		type: "POST",
		data: registerData,
		contentType: false,
		cache: false,
		processData: false,
		success: function (data) {
			// body...
			if(data == "Registered"){
			window.alert(data);
			localStorage.setItem("userLoggedIn",username);
			window.open("profileAdditionalInfo.html","_self");

		}
		    if (data == "Failed to Register") {
		    	window.alert(data);
		    }

		},
		error: function (xhr, status, error) {
			// body...
			window.alert(error);
		}

	});


}
	else{
		window.alert("Please fill all fields");
	}
}


function profileSetup (){
	window.open("profileAdditionalInfo.html", "_self");
}

function pwd_reset (){
	window.open("passwordReset.html", "_self");
}
function resetPassword() {
	// body...
	var username = localStorage.getItem('userLoggedIn');
	var password = document.getElementById("new_pwd").value;
	var password_confirm = document.getElementById('new_pwd_confirm').value;
	
	if (password != password_confirm) {
		window.alert("The Passwords donot match");
	}
	else{

	var passwordChangeData = new FormData();
	passwordChangeData.append("username", username);
	passwordChangeData.append("password", password);

	$.ajax({
		url: "http://localhost/project-web/passwordChange.php",
		type: "POST",
		data: passwordChangeData,
		processData: false,
		cache: false,
		contentType: false,
		success: function(data) {
			// body...
			
			if(data == "Changed"){
				window.alert(data);
				window.open("timeline.html","_self");
			}
			else{
				window.alert("There was a problem");
			}

		},
		error: function (xhr, status, error) {
			// body...
			window.alert("There was an error");
		}
	});
}
}

function timeline(){
	window.open("timeline.html", "_self");
}

function openProfile (){
	window.open("profilePage.html", "_self");
}


function register (){
	
}


function settingsToTimeline(){

	//window.open("choosecategories.html","_self");
	profileImage=document.getElementById("profilePicUpload").value;
	var additionalInfo = new FormData();
	if (document.getElementById("description").value && document.getElementById("description").value && document.getElementById("contact").value && document.getElementById("country").value &&  profileImage){
	additionalInfo.append("userID", localStorage.getItem("userLoggedIn"));
	additionalInfo.append("description", document.getElementById("description").value);
	additionalInfo.append("contact", document.getElementById("contact").value);
	additionalInfo.append("country", document.getElementById("country").value);
	additionalInfo.append("profilePic", $('#profilePicUpload').prop('files')[0]);
	$.ajax({
		url: "http://localhost/project-web/profileInfo.php",
		type: "POST",
		data: additionalInfo,
		processData: false,
		cache: false, 
		contentType:false,
		success: function (data) {
			// body...
			if (data == "updated") {

			window.alert(data);
			window.open("choosecategories.html", "_self");
		}
		else{
			window.alert(data);

		}
		},
		error: function (xhr, status, error) {
			// body...
			window.alert(error);
		}
	});

}
else{
	window.alert("Fill all fields.");
}
}


function updateUserData(){
	fname = localStorage.getItem("first");
	$('#first_name').val(fname);
	lname = localStorage.getItem("last");
	$('#last_name').val(lname);
	email = localStorage.getItem("email");
	$('#pro_email').val(email);
	password = localStorage.getItem("password");
	$('#password').val(password);
	$('#password2').val(password);
	uname = localStorage.getItem("uname");
	$('#user_name').val(uname);
	dob = localStorage.getItem("dob");
	$('#dob').val(dob);
	gender = localStorage.getItem("gender");
	$('#gender').val(gender);

}
function logout() {
	// body...
	var newuser = "";
	localStorage.setItem("userLoggedIn", newuser);
	window.open("login.html","_self");
}
