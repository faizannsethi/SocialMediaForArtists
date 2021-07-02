<?php 

//$category = $_POST["category"];

function timeline($category_pass)
{
	# code...

$cat_temp = $category_pass;
$category = "\"$cat_temp\"";

$result_array = array();

$mysqli = new mysqli("localhost","root","","artinc");

if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

$sql = "SELECT * FROM Posts WHERE Category =  $category ORDER BY DateUp";
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

$category_json = $_POST['field1'];
//$category_pass = "acrylics";
//echo "$category_json";
$category_pass = json_decode($category_json);
//echo "$category_pass";
timeline($category_pass);









 ?>