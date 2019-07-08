<?php

/**
 * Holds functions for emailing 
 */

  //function for sending basic emails
function GenerateRaw($Name, $Sender, $Receiver, $Subject, $Data)
{
    // Where you building the email
    //in SERVER2008, put these in C://DEI
    $rawaddr = "C://DEI/$Name.raw";
    $rawlck = "C://DEI/$Name.lck";
    //in mail server, put these in D://mdaemon/RAWFILES (where they're supposed to go anyway)
    if(file_exists("D://mdaemon/RAWFILES")){
        $rawaddr = "D://mdaemon/RAWFILES/$Name.raw";
        $rawlck = "D://mdaemon/RAWFILES/$Name.lck";
    }
    $mklok = fopen($rawlck, "w") or die("Unable to open file!");
    $mkfile = fopen($rawaddr, "w") or die("Unable to open file!");
    fwrite($mkfile, "From <$Sender>\n");
    fwrite($mkfile, "To <$Receiver>\n");
    fwrite($mkfile, "Subject <$Subject>\n");
    fwrite($mkfile, "\n");
    fwrite($mkfile, "$Data\n");
    fclose($mkfile);
    fclose($mklok);
    unlink($rawlck);
}