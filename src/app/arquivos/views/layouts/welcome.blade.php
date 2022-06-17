<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="css/app.css">    
    <link rel="stylesheet" href="css/components.css">    
    <link rel="stylesheet" href="css/menus.css">    
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/colors.css">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body class="body">
    <section id="top-purple">
        <main-container>
            <menu>
                <avatar-container>
                    <img src="img/profile-pic.jpg" class="avatar">
                    <dados-user>
                        <h3>Olá, Usuário</h3>
                        <span>usuario@77seg.io</span>
                    </dados-user>
                    
                </avatar-container>
                <ul>
                    <li><i class="fa-solid fa-gears"></i><a>Dashboard</a></li>
                    <li><i class="fa-solid fa-house"></i><a class="purple-900">Link 1</a></li>
                    <li><i class="fa-solid fa-house"></i><a class="purple-900">Link 2</a></li>
                </ul>
            </menu>
            
            <div class="right">
                @yield('content')
                
                <dashboard-container>
                    <div class="actions">
                        <div class="card-action">
                            <div class="icon"><i class="fa-solid fa-building"></i></div>
                            <div class="name">empresas</div>
                        </div>
                        <div class="card-action">
                            <div class="icon"><i class="fa-solid fa-gears"></i></div>
                            <div class="name">funcionários</div>
                        </div>
                        <div class="card-action">
                            <div class="icon"><i class="fa-solid fa-gears"></i></div>
                            <div class="name">produtos</div>
                        </div>
                        <div class="card-action">
                            <div class="icon"><i class="fa-solid fa-gears"></i></div>
                            <div class="name">faturamento</div>
                        </div>
                    </div>
                    <div class="relatorios">
                        <div class="card-action">
                            <div class="icon"></div>
                            <div class="name">empresas</div>
                        </div>
                        <div class="card-action">
                            <div class="icon"></div>
                            <div class="name">funcionários</div>
                        </div>
                        <div class="card-action">
                            <div class="icon"></div>
                            <div class="name">produtos</div>
                        </div>
                        <div class="card-action">
                            <div class="icon"></div>
                            <div class="name">faturamento</div>
                        </div>
                    </div>
                </dashboard-container>
            </div>
        </main-container>
        <footer class="footer">77seg | 2022 - Todos os direitos reservados.</footer>
    </section>
    <script src="https://kit.fontawesome.com/1f2861a396.js" crossorigin="anonymous"></script>
</body>
</html>