<?php
$json_string = file_get_contents("data.json");

$disks = json_decode($json_string, true);

$result = $disks;

# controllo se ho una mode
if (!empty($_REQUEST['mode'])) {
    // SEARCH
    if ($_REQUEST['mode'] === "search" && intval($_REQUEST['id']) > 0) {

        $disk_position = array_search(intval($_REQUEST['id']), array_column($disks, 'id'));
        $result = $disks[$disk_position];
    }
}


header("Content-type: application/json");

echo json_encode($result);
