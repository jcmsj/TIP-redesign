<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-size: 14px;
            font-family: arial;
            margin: 2vh 2vw;
        }
    </style>
</head>
<body>
    <?php
        $files = [
            "html" => [
                "index.html",
                "about.html",
                "admissions.html",
                "programs.html",
                "ABET_accredited_programs.html",
                "news.html",
                "article1.html",
                "article2.html",
                "article3.html",
                "contacts.html"
            ],
            "js" => [
                "js/navbar.js",
                "js/section-switcher.js",
                "js/carousel.js",
                "js/cite_qc.js",
            ],
            "css" => [
                "css/global.css",
                "css/section-switcher.css",
                "css/index.css",
                "css/cite_qc.css",
                "css/programs.css",
                "css/contacts.css"
            ]
        ];

        foreach($files as $key => $val) {
            foreach($files[$key] as $file) {
                $e =  file_get_contents($file);
                echo
                    "<h2>$file</h2>"
                    . "<pre>" 
                        . strval(htmlspecialchars($e)) 
                    . "</pre>";
            }
        }
    ?>
</body>
</html>
