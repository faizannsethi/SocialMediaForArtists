<?php  

function register($firstname, $lastname, $email, $dob, $username, $password, $gender)
{
	# code...
	$firstname_post = "\"$firstname\"";
	$lastname_post = "\"$lastname\"";
	$email_post = "\"$email\"";
	$dob_post = "\"$dob\"";
	$username_post = "\"$username\"";
	$password_post = "\"$password\"";
	$gender_post = "\"$gender\"";

	$mysqli = new mysqli("localhost", "root", "", "artinc");
	if ($mysqli -> connect_errno) {
         echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
         exit();
          }
    $sql = "INSERT INTO Users (Firstname, Lastname, Email, DOB, Username, Password, Gender) VALUES ($firstname_post, $lastname_post, $email_post, $dob_post, $username_post, $password_post, $gender_post)";
    $result = mysqli_query($mysqli, $sql);
    if ($result == TRUE){
    	echo "Registered";
    }
    elseif ($result == FALSE) {
    	# code...
    	echo "Failed to Register";
    }
    mysqli_close($mysqli);



}

$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$dob = $_POST["dob"]; 
$username = $_POST["username"];
$password = $_POST["password"];
$gender = $_POST["gender"];

register($firstname, $lastname, $email, $dob, $username, $password, $gender);

?>