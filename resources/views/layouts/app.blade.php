<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        @if(config('app.env') === 'production')
            <link rel="stylesheet" href="{{ secure_asset(mix('css/app.css')) }}"></script>
        @else
            <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}"></script>
        @endif

        <script>
            window.Laravel = {
                csrfToken: "{{ csrf_token() }}"
            };
        </script>
    </head>
    <body>
        <div id="sidebar">
            <b-navbar toggleable="md" type="dark" variant="info">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-navbar-brand href="#">NavBar</b-navbar-brand>
                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <b-nav-item to="/">TOP</b-nav-item>
                        <b-nav-item to="/wagaya">和が家100円メニュー</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <div id="app">
            <div class="container" style="margin-top: 40px;">
                <router-view></router-view>
            </div>
        </div>
    </body>
    @if(config('app.env') === 'production')
        <script src="{{ secure_asset(mix('js/manifest.js')) }}"></script>
        <script src="{{ secure_asset(mix('js/vendor.js')) }}"></script>
        <script src="{{ secure_asset(mix('js/app.js')) }}"></script>
    @else
        <script src="{{ asset(mix('js/manifest.js')) }}"></script>
        <script src="{{ asset(mix('js/vendor.js')) }}"></script>
        <script src="{{ asset(mix('js/app.js')) }}"></script>
    @endif
</html>
