<?php
$json_string = file_get_contents("data.json");

$disks = json_decode($json_string, true);

header("Content-type: application/json");

echo json_encode($disks);
