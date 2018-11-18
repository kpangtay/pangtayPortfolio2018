<?php

  if(isset($_POST['submit'])){
    $name = $_Post['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "@gmail.com";
    $headers = "From: ".$mailfrom;
    $txt = "You have recieved and e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");

  }

?>
