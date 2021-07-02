<?php 

function uploadImage($caption, $description, $contact, $user, $region, $category, $date, $image){
	$post_caption = "\"$caption\"";
	$post_description = "\"$description\"";
	$post_contact = "\"$contact\"";
	$post_user = "\"$user\"";
	$post_region = "\"$region\"";
	$post_category = "\"$category\"";
	$post_date = "\"$date\"";

	$directory = $category;
	$files = scandir($directory);
	$iter = 1;
	for($i = 0 ; $i < count($files) ; $i++){
		if($files[$i] !='.' && $files[$i] !='..'){
			$iter += 1;

		}
	}
	$imgnum = strval($iter);
	$post_imageid = "\"$category"."/"."$imgnum\"";



	$mysqli = new mysqli("localhost","root","","artinc");

	if ($mysqli -> connect_errno) {
         echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
          }
    $sql = "INSERT INTO posts (UserID, Caption, Description, Category, DateUp, Contact, Region, ImageID) VALUES ($post_user, $post_caption, $post_description, $post_category, $post_date, $post_contact, $post_region, $post_imageid)";


    //$sql = "SELECT * FROM Posts WHERE Category =  $post_category ORDER BY DateUp";
    $result = mysqli_query($mysqli, $sql);
    //print_r(json_encode($result));
    //print_r("\n");
    //echo mysqli_error($result);


    if ($result === TRUE) {
    	# code...
    	//define ('SITE_ROOT', realpath(dirname(__FILE__)));
    	$savepath =getcwd()."/$category";

    	if(move_uploaded_file($image, $savepath."/$imgnum.jpg")){
    		//echo "updated";
    	}
    	//print_r("new record created");

    }
    else {

    	if ($result === FALSE) {
    		# code...
    		print_r("error in insert");
    	}
    }
    mysqli_close($mysqli);
    //echo "uploaded";




}





$caption = $_POST['caption'];
$description = $_POST['description'];
$contact = $_POST['contact'];
$user = $_POST['userID'];
$region = $_POST['region']; 
$category = $_POST['category'];
$image = $_FILES['imageFile']['tmp_name']; 
$date = date("d/m/Y");
uploadImage($caption, $description, $contact, $user, $region, $category, $date, $image);

 




?>