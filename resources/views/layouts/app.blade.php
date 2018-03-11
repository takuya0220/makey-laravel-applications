<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <link rel="stylesheet" href="{{ secure_asset(mix('css/app.css')) }}"></script>

        <script>
            window.Laravel = {
                csrfToken: "{{ csrf_token() }}"
            };
        </script>
    </head>
    <body>
        <div id="app">
            <wagaya-component></wagaya-component>
        </div>
    </body>
    <script src="{{ secure_asset(mix('js/manifest.js')) }}"></script>
    <script src="{{ secure_asset(mix('js/vendor.js')) }}"></script>
    <script src="{{ secure_asset(mix('js/app.js')) }}"></script>
</html>
