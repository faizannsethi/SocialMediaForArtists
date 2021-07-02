<?php

function addProfileInfo($username, $description, $contact, $country, $profilePic)
{
	# code...
	$username_post = "\"$username\"";
	$description_post = "\"$description\"";
	$contact_post = "\"$contact\"";
	$country_post = "\"$country\"";
	$mysqli = new mysqli("localhost","root","","artinc");

	if ($mysqli -> connect_errno) {
         echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
          }
    $sql = "INSERT INTO Profiles (UserID, Description, Contact, Country) VALUES ($username_post, $description_post, $contact_post, $country_post)";


    
    $result = mysqli_query($mysqli, $sql);
    if ($result === TRUE) {
    	$savepath =getcwd()."/profile-pictures";
    	if(move_uploaded_file($profilePic, $savepath."/$username.jpg")){
    		echo "updated";

    	}
    }
    else{
    	if ($result === FALSE) {
    		# code...
    		$sql = "UPDATE Profiles SET Description=$description_post, Contact=$contact_post, Country=$country_post WHERE UserID= $username_post";
    		$result_two = mysqli_query($mysqli, $sql);
    		if ($result_two == TRUE) {
    			# code...
    			$savepath =getcwd()."/profile-pictures";
    			if(move_uploaded_file($profilePic, $savepath."/$username.jpg")){
    		    echo "updated";

    	}

    		}
    		elseif ($result_two == FALSE) {
    			# code...
    			echo "There was an error";
    		}
    	}
    }
    mysqli_close($mysqli);
}



$username = $_POST["userID"];
$description = $_POST["description"];
$contact = $_POST["contact"];
$country = $_POST["country"];
$profilePic = $_FILES['profilePic']['tmp_name']; 

addProfileInfo($username, $description, $contact, $country, $profilePic);











  ?>