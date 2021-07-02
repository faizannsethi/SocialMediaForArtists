<?php  
function login($username, $password)
{
	# code...
	$username_post = "\"$username\"";
	$password_post = "\"$password\"";
	$mysqli = new mysqli("localhost","root","","artinc");
	if ($mysqli -> connect_errno) {
         echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
         exit();
          }
    $sql = "SELECT * from Users WHERE Username = $username_post AND Password = $password_post";
    $result = mysqli_query($mysqli, $sql);

    if (mysqli_num_rows($result)==1) {
    	# code...
    	echo "login successful";
    	
    }
    else{
    	echo "username and password do not match";
    	
    }
    mysqli_close($mysqli);

}
$username = $_POST["username"];
$password = $_POST["password"];
login($username, $password);
?>