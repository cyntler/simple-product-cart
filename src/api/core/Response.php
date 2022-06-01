<?php

namespace SimpleProductCart\Core;

use stdClass;

class Response
{
    public function json($data)
    {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);
    }

    public function htmlFile($path)
    {
        $html = file_get_contents($path);
        echo $html;
    }

    public function error($message)
    {
        http_response_code(500);
        $stdClass = new stdClass();
        $stdClass->errorMessage = $message;
        echo $this->json($stdClass);
    }

    public function notFound()
    {
        http_response_code(404);
        echo 'Not found!';
    }
}
