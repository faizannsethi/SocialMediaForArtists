<?php
function loadProfileData($username)
{
	# code...
	$username_post = "\"$username\"";
	$result_array = array();

    $mysqli = new mysqli("localhost","root","","artinc");

    if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
}

$sql = "SELECT * FROM Profiles WHERE UserID =  $username_post";
$result = mysqli_query($mysqli, $sql);

while ($row = mysqli_fetch_array($result)) {
	# code...
	array_push($result_array, $row);

}
$object = json_encode($result_array);

//print_r($object);
mysqli_free_result($result);

mysqli_close($mysqli);

echo "$object";
}



$username = $_POST["username"];

loadProfileData($username)

  ?>