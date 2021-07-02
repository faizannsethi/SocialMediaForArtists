<?php


function addFavorite($username,$upUser, $caption, $description, $contact, $date, $region, $imageID)
{
	# code...
$username_post = "\"$username\"";
$upUser_post = "\"$upUser\"";
$caption_post = "\"$caption\"";
$description_post = "\"$description\"";
$contact_post = "\"$contact\"";
$date_post = "\"$date\"";
$region_post = "\"$region\"";
$imageID_post = "\"$imageID\"";

$mysqli = new mysqli("localhost","root","","artinc");

	if ($mysqli -> connect_errno) {
         echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
          }
    $sql = "INSERT INTO Favorites (UserID, UpUser, Caption, Description, DateUp, Contact, Region, ImageID) VALUES ($username_post, $upUser_post, $caption_post, $description_post, $date_post, $contact_post, $region_post, $imageID_post)";


    
    $result = mysqli_query($mysqli, $sql);

    if ($result) {
    	# code...
    	echo "Added to Favorites";
    }
    else{
    	echo "Failed to Add";
    }



}

$username = $_POST["username"];
$upUser = $_POST["usernameUp"];
$caption = $_POST["caption"];
$description = $_POST["description"];
$contact = $_POST["contact"];
$date = $_POST["date"];
$region = $_POST["region"];
$imageID = $_POST["imagepath"];



addFavorite($username, $upUser, $caption, $description, $contact, $date, $region, $imageID);

  ?>