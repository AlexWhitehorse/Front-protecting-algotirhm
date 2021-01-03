<?php 
// Кодирует в sha512
function getHash($msg)
{
    return hash('sha512', $msg);
}

// Получает все цифры в строке
function getNumIsString($string)
{
    return preg_replace("/[^0-9]/", '', $string);
}

// Кодирование строки
// 256 символов
// 0-168 - закодированное из user-agent
// 169-256 - закодированые цифры из первой части
function encodeHash($string)
{
    $hashedString = getHash($string);
 
    $numbers = getNumIsString($hashedString);
    $numbers_hash = getHash($numbers);

    return $hashedString.$numbers_hash;
}

$message = $_SERVER['HTTP_USER_AGENT'];

setcookie("id", encodeHash($message), time()+5);


?>