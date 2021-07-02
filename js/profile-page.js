function showallcats() {
	// body...
	document.getElementById("searchdropdown").classList.toggle("show");
	document.getElementById("downarr").classList.toggle("rotate");
}
function showsettings() {
	document.getElementById("settings").classList.toggle("show");
}
function showpersonal() {
	// body...
	document.getElementById("Favorites").style.display = "none";
	document.getElementById("Posts").style.display = "block";
	document.getElementById("favoriteposts").style.backgroundColor = "white";
	document.getElementById("personalposts").style.backgroundColor = "silver";
}
function showfavorites() {
	// body...
	document.getElementById("Posts").style.display = "none";
	document.getElementById("Favorites").style.display = "block";
	document.getElementById("personalposts").style.backgroundColor = "white";
	document.getElementById("favoriteposts").style.backgroundColor = "silver";
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


function loadImages(id){
	
	var table = id;
	var loadProfileData = new FormData();
	loadProfileData.append("username", localStorage.getItem("userLoggedIn"));
	loadProfileData.append("table", table);
	$.ajax({
		url: "http://localhost/project-web/loadProfile.php",
		type: "POST",
		data: loadProfileData,
		processData: false,
		cache: false,
		contentType: false,
		success: function (data) {
			// body...
			
			if (data == "error") {
				window.alert("Error loading posts.");
			}
			else{
				var object_array = JSON.parse(data);
				if (object_array.length == 0) {
					document.getElementById(id).innerHTML="<br>No Posts To Show";

				}
				
				if(object_array.length > 0){
				document.getElementById(id).innerHTML="";

			}
				for (var i = object_array.length - 1; i >= 0; i--) {

					var path = object_array[i].ImageID;
           	        var caption = object_array[i].Caption;
           	        var desc = object_array[i].Description;
           	        if (id == "Favorites") {
           	        var username = object_array[i].UpUser;
           	        
           	    }
           	        else{
           	        var username = object_array[i].UserID;

           	        }
           	        var contact = object_array[i].Contact;
           	        var date = object_array[i].DateUp;
           	        var region = object_array[i].Region;
           	        $("#"+table).append('<div class="post" onclick="openselectedpost('+"\'"+path+"\'"+","+"\'"+caption+"\'"+","+"\'"+desc+"\'"+","+"\'"+username+"\'"+","+"\'"+contact+"\'"+","+"\'"+date+"\'"+","+"\'"+region+"\'"+')"><img src='+path+'.jpg></div>');

				}
			}
		},
		error: function (xhr, status, error) {
			// body...
			window.alert("There was an error!");
		}

	});
}

function closeselectedpost() {
	// body...
	document.getElementById("addtofav").innerHTML = "<span class=\"glyphicon glyphicon-heart-empty\"></span>";
	document.getElementById("selectedpost").classList.remove("show");

}
function getUser() {
	// body...
	document.getElementById("usernamefield").innerHTML = localStorage.getItem("userLoggedIn");
}
function getUserVisit() {
	// body...
	document.getElementById("usernamefield").innerHTML = localStorage.getItem("usernameSelected");
}
function setLastSearched() {
	// body...
	var categories = String(JSON.parse(localStorage.getItem("categoriesSelected")));
	var categories_arr = categories.split(",");
	for (var i = categories_arr.length - 1; i >= 0; i--) {
		$("#lastSearched").append("<div class='interest-divs'>"+categories_arr[i]+"</div>");
	}
}
function getProfilePic() {
	// body...
	$("#profilePic").append("<img src=\"profile-pictures/"+localStorage.getItem("userLoggedIn")+".jpg\">");
}
function getProfilePicVisit() {
	// body...
	$("#profilePic").append("<img src=\"profile-pictures/"+localStorage.getItem("usernameSelected")+".jpg\">");
}
function getProfileData() {
	// body...
	var username = localStorage.getItem("userLoggedIn");
	var getProfileInfo = new FormData();
	getProfileInfo.append("username", username);
	$.ajax({
		url: "http://localhost/project-web/loadProfileData.php",
		type: "POST",
		data: getProfileInfo,
		processData: false,
		contentType: false, 
		cache: false,
		success: function (data) {
			// body...

			object_array = JSON.parse(data);
			if (object_array.length = 1) {
				for (var i = object_array.length - 1; i >= 0; i--) {
					var description = object_array[i].Description;
					var contact = object_array[i].Contact;
					var country = object_array[i].Country;
					document.getElementById("profileCountry").innerHTML = country;
					document.getElementById("profileContact").innerHTML = contact;
					document.getElementById("profileDescription").innerHTML = description;
				}

			}
		},
		error: function (xhr, status, error) {
			// body...
			window.alert("There was an error fetching profile credentials");

		}

	});
}
function getProfileDataVisit() {
	// body...
	var username = localStorage.getItem("usernameSelected");
	var getProfileInfo = new FormData();
	getProfileInfo.append("username", username);
	$.ajax({
		url: "http://localhost/project-web/loadProfileData.php",
		type: "POST",
		data: getProfileInfo,
		processData: false,
		contentType: false, 
		cache: false,
		success: function (data) {
			// body...

			object_array = JSON.parse(data);
			if (object_array.length = 1) {
				for (var i = object_array.length - 1; i >= 0; i--) {
					var description = object_array[i].Description;
					var contact = object_array[i].Contact;
					var country = object_array[i].Country;
					document.getElementById("profileCountry").innerHTML = country;
					document.getElementById("profileContact").innerHTML = contact;
					document.getElementById("profileDescription").innerHTML = description;
				}

			}
		},
		error: function (xhr, status, error) {
			// body...
			window.alert("There was an error fetching profile credentials");

		}

	});
}
function loadImagesVisit(id){
	
	var table = id;
	var loadProfileData = new FormData();
	loadProfileData.append("username", localStorage.getItem("usernameSelected"));
	loadProfileData.append("table", table);
	$.ajax({
		url: "http://localhost/project-web/loadProfile.php",
		type: "POST",
		data: loadProfileData,
		processData: false,
		cache: false,
		contentType: false,
		success: function (data) {
			// body...
			
			if (data == "error") {
				window.alert("Error loading posts.");
			}
			else{
				var object_array = JSON.parse(data);
				
				if(object_array.length > 0){
				document.getElementById(id).innerHTML="";

			}
				for (var i = object_array.length - 1; i >= 0; i--) {

					var path = object_array[i].ImageID;
           	        var caption = object_array[i].Caption;
           	        var desc = object_array[i].Description;
           	        if (id == "Favorites") {
           	        var username = object_array[i].UpUser;
           	        
           	    }
           	        else{
           	        var username = object_array[i].UserID;

           	        }
           	        var contact = object_array[i].Contact;
           	        var date = object_array[i].DateUp;
           	        var region = object_array[i].Region;
           	        $("#"+table).append('<div class="post" onclick="openselectedpost('+"\'"+path+"\'"+","+"\'"+caption+"\'"+","+"\'"+desc+"\'"+","+"\'"+username+"\'"+","+"\'"+contact+"\'"+","+"\'"+date+"\'"+","+"\'"+region+"\'"+')"><img src='+path+'.jpg></div>');

				}
			}
		},
		error: function (xhr, status, error) {
			// body...
			window.alert("There was an error!");
		}

	});
}
function addToFav2() {
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
			loadImages("Favorites");

			
			

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
			loadImages("Favorites");
			
			
			
			

		}
		    if (data == "Failed to Remove") {
		    	window.alert("An error occurred.");
		    	//document.getElementById("addtofav").innerHTML = "<span class=\"glyphicon glyphicon-heart-empty\"></span>";
		    	loadImages("Favorites");
		    }
		    

		},
		error: function (xhr, status, error) {
			// body...
			window.alert(error);

		}

	});
	}

}