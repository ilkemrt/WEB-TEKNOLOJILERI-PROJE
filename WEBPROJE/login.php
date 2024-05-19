<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    
    $users = [
        "b1812100001@sakarya.edu.tr" => "b1812100001",
        "b1812100002@sakarya.edu.tr" => "b1812100002",
        
    ];

  
    if (isset($users[$username]) && $users[$username] === $password) {
        
        $_SESSION['username'] = $username;
        header("Location: proje.php");
        exit();
    } else {
       
        header("Location: login.html");
        exit();
    }
} else {
    header("Location: login.html");
    exit();
}
?>
