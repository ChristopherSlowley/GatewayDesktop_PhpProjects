<?php
$name = $_POST["name"];
error_log("Inside function".__FILE__.":".__FUNCTION__);
echo "Hello " . $name. "[".__FILE__."] ";

