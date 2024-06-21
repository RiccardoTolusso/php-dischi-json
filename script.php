<?php
$json_string = file_get_contents("data.json");

$disks = json_decode($json_string, true);

echo json_encode($disks);
