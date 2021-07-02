<?php

function passwordChange($username, $password)
{
	# code...
	$username_post = "\"$username\"";
	$password_post = "\"$password\"";

	$mysqli = new mysqli("localhost","root","","artinc");
	if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
}
    $sql = "UPDATE Users SET Password= $password_post WHERE Username= $username_post";
    $result = mysqli_query($mysqli, $sql);
    
    if ($result) {
    	# code...
    	echo "Changed";
    }
    elseif ($result == FALSE) {
    	# code...
    	echo "Error";
    }
    mysqli_close($mysqli);
}

$username = $_POST["username"];
$password = $_POST["password"];
passwordChange($username, $password);

  ?>