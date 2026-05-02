0<?php
// Conexión a la base de datos
$host = 'localhost';
$usuario = 'root';
$contrasena = '';
$puerto = 3307;
$baseDatos = 'contacto_web';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html#contacto');
    exit;
}

$nombre = trim($_POST['nombre'] ?? '');
$correo = trim($_POST['correo'] ?? '');
$telefono = trim($_POST['telefono'] ?? '');
$mensaje = trim($_POST['mensaje'] ?? '');

if ($nombre === '' || $correo === '' || $telefono === '' || $mensaje === '') {
    echo '<script>alert("Por favor complete todos los campos."); window.location.href = "index.html#contacto";</script>';
    exit;
}

$conexion = new mysqli($host, $usuario, $contrasena, $baseDatos, $puerto);
if ($conexion->connect_errno) {
    $error = htmlspecialchars($conexion->connect_error, ENT_QUOTES, 'UTF-8');
    echo "Error de conexión a la base de datos: $error";
    exit;
}

$conexion->set_charset('utf8mb4');

$query = 'INSERT INTO mensajes (nombre, correo, telefono, mensaje) VALUES (?, ?, ?, ?)';
$stmt = $conexion->prepare($query);
if (!$stmt) {
    $error = htmlspecialchars($conexion->error, ENT_QUOTES, 'UTF-8');
    echo "Error al preparar la consulta: $error";
    $conexion->close();
    exit;
}

if (!$stmt->bind_param('ssss', $nombre, $correo, $telefono, $mensaje)) {
    $error = htmlspecialchars($stmt->error, ENT_QUOTES, 'UTF-8');
    echo "Error al vincular los parámetros: $error";
    $stmt->close();
    $conexion->close();
    exit;
}

if (!$stmt->execute()) {
    $error = htmlspecialchars($stmt->error, ENT_QUOTES, 'UTF-8');
    echo "Error al ejecutar el INSERT: $error";
    $stmt->close();
    $conexion->close();
    exit;
}

if ($stmt->affected_rows !== 1) {
    echo 'No se insertó ningún registro en la base de datos.';
    $stmt->close();
    $conexion->close();
    exit;
}

$stmt->close();
$conexion->close();

echo '<script>alert("Mensaje enviado con éxito."); window.location.href = "index.html#contacto";</script>';
