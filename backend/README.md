# EVOLUTION API

Laravel 10 JSON API for Evolution (PHP ^8.1). The product overview, features, and full setup are in the [root README](../README.md).

## Setup

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

`php artisan serve` listens on port 8000. Routes in `routes/api.php` use the `/api` prefix.

`DatabaseSeeder` does not insert data. Migrations create the store, user, plan, delivery, calorie, and macro tables. Workout and weight-tracking models are used by the API and have no migrations here.

Environment variable names are listed in the root README. The names this app adds beyond the Laravel skeleton:

- `FRONTEND_URL` — CORS allowed origin, Sanctum stateful domain, and `config/app.php`. It is not in `.env.example`.

## Scripts

| Command | What it does |
| --- | --- |
| `composer install` | Install dependencies and run Laravel's post-install hooks |
| `php artisan key:generate` | Set `APP_KEY` |
| `php artisan migrate` | Run migrations |
| `php artisan serve` | HTTP server on port 8000 |
| `php artisan test` | PHPUnit (`phpunit.xml`, `tests/`) |
| `./vendor/bin/pint` | Laravel Pint |

`routes/auth.php` is the Laravel Breeze auth file. `routes/web.php` does not load it. The app's sign-in endpoints are `AuthController` routes in `routes/api.php`.
