<?php
$database_file = __DIR__ . "/data.json";

$json_string = file_get_contents($database_file);

$disks = json_decode($json_string, true);

$result = $disks;

# controllo se ho una mode
if (!empty($_REQUEST['mode'])) {
    // SEARCH
    if ($_REQUEST['mode'] === "search" && intval($_REQUEST['id']) > 0) {

        $disk_position = array_search(intval($_REQUEST['id']), array_column($disks, 'id'));
        $result = $disks[$disk_position];
    }
    if ($_POST['mode'] === "update") {
        $disk = $_POST['disk'];
        $disk_position = array_search(intval($disk['id']), array_column($disks, 'id'));
        $disks[$disk_position] = $disk;

        file_put_contents($database_file, json_encode($disks));

        $result = $disks;
    }
}


header("Content-type: application/json");

echo json_encode($result);
