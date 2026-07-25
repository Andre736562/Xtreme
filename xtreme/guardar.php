<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "ok" => false,
        "mensaje" => "Método no permitido."
    ]);
    exit;
}

$nombre = trim($_POST["nombre"] ?? "");
$correo = trim($_POST["correo"] ?? "");
$telefono = trim($_POST["telefono"] ?? "");
$mensaje = trim($_POST["mensaje"] ?? "");

if ($nombre === "" || $correo === "" || $telefono === "" || $mensaje === "") {
    http_response_code(400);
    echo json_encode([
        "ok" => false,
        "mensaje" => "Completa todos los campos."
    ]);
    exit;
}

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "ok" => false,
        "mensaje" => "El correo electrónico no es válido."
    ]);
    exit;
}

$conexion = new mysqli("127.0.0.1", "root", "", "contacto_web", 3307);

if ($conexion->connect_error) {
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "mensaje" => "No se pudo conectar con la base de datos."
    ]);
    exit;
}

$conexion->set_charset("utf8mb4");

$consulta = $conexion->prepare(
    "INSERT INTO mensajes (nombre, correo, telefono, mensaje, fecha)
     VALUES (?, ?, ?, ?, NOW())"
);

if (!$consulta) {
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "mensaje" => "No se pudo preparar el registro."
    ]);
    $conexion->close();
    exit;
}

$consulta->bind_param("ssss", $nombre, $correo, $telefono, $mensaje);

if ($consulta->execute()) {
    echo json_encode([
        "ok" => true,
        "mensaje" => "Inscripción registrada correctamente."
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "ok" => false,
        "mensaje" => "No se pudo guardar la inscripción."
    ]);
}

$consulta->close();
$conexion->close();
?>
