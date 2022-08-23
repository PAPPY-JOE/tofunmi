<?php
//  Testing

    $errors = '';

    $myemail = 'fatoyejoe@gmail.com';//<-----Put Your email address here.
    if(empty($_POST['name'])  || 
    empty($_POST['email']) || 
    empty($_POST['phone']) ||
    empty($_POST['subject']) ||
    empty($_POST['message']) 
    )
    {
        $errors .= "\n Error: all fields are required";
    }

    $name = $_POST['name']; 
    $email_address = $_POST['email']; 
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if (!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
    $email_address))
    {
        $errors .= "\n Error: Invalid email address";
    }


    if( empty($errors))

    {
        $to = $myemail;

        // $email_subject = "Contact form submission: $name";

        $email_body = "You have received a new message. ".

        " Here are the details:\n Name: $name \n ".

        "Email: $email_address\n $phone\n Message \n $message";

        $headers = "From: $myemail\n";

        $headers .= "Reply-To: $email_address";

        mail($to,$subject,$email_body,$headers);

        //redirect to the 'thank you' page

        // header('Location: contact-form-thank-you.html');
        header('Location: index.html');
    }

    // function IsInjected($str)
    // {
    //     $injections = array('(\n+)',
    //         '(\r+)',
    //         '(\t+)',
    //         '(%0A+)',
    //         '(%0D+)',
    //         '(%08+)',
    //         '(%09+)'
    //         );
                
    //     $inject = join('|', $injections);
    //     $inject = "/$inject/i";
        
    //     if(preg_match($inject,$str))
    //     {
    //     return true;
    //     }
    //     else
    //     {
    //     return false;
    //     }
    // }

    // if(IsInjected($visitor_email))
    // {
    //     echo "Bad email value!";
    //     exit;
    // }


// Sending
//   $email_from = 'fatoyejoe@gmail.com';

//   $email_body = "You have received a new message from the user $name, $phone.\n".
//                 "Here is the message:\n $message";
                
//     $to = "fatoyejoe@gmail.com, fatoyejoseph@gmail.com";

//     $headers = "From: $email_from \r\n";

//     $headers .= "Reply-To: $visitor_email \r\n";

//     mail($to,$subject,$email_body,$headers);

?>