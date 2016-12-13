<?php

$recepient = "email address";
$sitename = "GetBus";

$name = trim($_POST["name"]);
$company = trim($_POST["company"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nКомпания: $company \nПочта: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
