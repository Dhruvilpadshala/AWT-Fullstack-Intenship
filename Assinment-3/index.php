
<?php
    // getting all values from the HTML form
    if ($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['submit'])) {

      // creating a connection
      $con = mysqli_connect('localhost', 'root', '', 'sampledb')
          or die("Connection failed!" . mysqli_connect_error());

      if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["Contact"]) && isset($_POST["Feedback"])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $Contact = $_POST['Contact'];
        $Feedback = $_POST['Feedback'];


        // using sql to create a data entry query
        $sql = "INSERT INTO `feedback` ( id,name, Contact, email,Feedback) VALUES ('0'$name','$Contact','$email','$Feedback')";

        // send query to the database to add values and confirm if successful
        $rs = mysqli_query($con, $sql);
        if($rs)
        {
            echo "Entries added!";
        }
    
      }
    }

    

?>