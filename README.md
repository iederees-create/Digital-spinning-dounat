<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Show content behind a button">
    <title>Show Hidden Content</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .container {
            text-align: center;
        }
        #content {
            display: none; /* Hide content initially */
            margin-top: 20px;
            border: 2px solid #000;
            padding: 10px;
            width: 80%;
            height: 500px;
        }
        button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <button onclick="toggleContent()">Show Content</button>
        <div id="content">
            <iframe src="https://iederees-create.github.io/welcome-to-nextgenwebs-/" width="100%" height="100%" frameborder="0"></iframe>
        </div>
    </div>

    <script>
        function toggleContent() {
            const content = document.getElementById('content');
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        }
    </script>
</body>
</html>
