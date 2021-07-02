<?php


function removeFavorite($username,  $imageID)
{
	# code...
$username_post = "\"$username\"";

$imageID_post = "\"$imageID\"";

$mysqli = new mysqli("localhost","root","","artinc");

	if ($mysqli -> connect_errno) {
         echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
          }
    $sql = "DELETE FROM Favorites WHERE UserID = $username_post AND ImageID = $imageID_post";


    
    $result = mysqli_query($mysqli, $sql);

    if ($result) {
    	# code...
    	echo "Removed from Favorites";
    }
    else{
    	echo "Failed to Remove";
    }



}

$username = $_POST["username"];

$imageID = $_POST["imagepath"];



removeFavorite($username, $imageID);

  ?>