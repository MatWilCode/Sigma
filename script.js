<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animasi Sigma</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }

        #sigma {
            font-size: 48px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div id="sigma">sigma</div>

    <script>
        let sigma = document.getElementById('sigma');
        setInterval(() => {
            sigma.style.visibility = (sigma.style.visibility == 'hidden' ? '' : 'hidden');
        }, 50); // Ubah angka ini untuk mengatur kecepatan kedipan
    </script>
</body>
</html>
