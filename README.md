# EVOLUTION

Evolution is a fitness web app. Visitors land on a marketing page, then sign in to browse exercises, build workouts, estimate daily calories, and shop a catalog. Sellers can register, pick a monthly plan, and manage their products.

The UI is a React app in `frontend/`. The API is a Laravel app in `backend/`. Built with [ibrahim-stitou](https://github.com/ibrahim-stitou).

## Features

### Accounts

- Email and password sign up and sign in (`/auth/signup`, `/auth/login`).
- Google sign-in. The OAuth client id is set in `frontend/src/index.js`.
- The API returns a token that the client stores in `localStorage`. Routes under the auth guard in `frontend/src/Router/router.jsx` require that token.
- Seller registration and login are separate (`/store/seller-auth/register`, `/store/seller-auth/login`). Seller pages also require `isSeller` in `localStorage`.

Email sign-in stores a hashed `api_token` on the user. Google sign-in creates a Laravel Sanctum personal access token. Most routes in `backend/routes/api.php` are not wrapped in `auth:sanctum`.

### Exercises and workouts

Signed-in routes under `/exercices`:

- **Overview** — personal workouts and an exercise grid.
- **List** — exercise catalog loaded from the public [free-exercise-db](https://github.com/yuhonas/free-exercise-db) JSON, filtered by level, category, muscle, and equipment.
- **My workouts** — create a workout (name, level, date, time, alarm, optional message, and exercises), edit it, delete it, and mark a workout or an exercise done.
- **Profile** — member details from `GET /api/user/{id}` and a weight-tracking line chart (`GET`/`POST /api/weight-tracking`).

Favorite exercises are stored through `/api/favorite-exercice`.

The workout, member, goal, level, user-info, weight-tracking, and favorite-exercise models are used by the API. The migrations in `backend/database/migrations` do not create those tables.

### Calorie calculator

`/CaloriesCalculator` is a five-step form: birthday, height (cm), weight (kg), goal (losing, maintaining, or gaining weight), and activity (sedentary, lightly active, moderately active, or very active). Submitting it creates a `calories_users` row.

`/CaloriesCalculator/Home` shows the daily view and logs breakfast, lunch, dinner, and snacks. A meal lookup calls the API Ninjas nutrition endpoint (`X-Api-Key` is sent from `frontend/src/CaloriesCalCulator/Home/AddMeal.jsx`). `/CaloriesCalculator/change-goal` edits the saved height, weight, goal, and activity and shows calorie and macro targets.

`PUT /api/macros/{id}` updates consumed protein, fat, carbs, and calories. The meal form currently requests the path with a literal `{id}` segment.

These calculator routes are registered before the auth guard, so they open without a token.

### Store

Signed-in store routes:

- Home collections, a shop, and separate men and women shops. The shop filters by name, gender, category, type, and price.
- Product detail with star ratings and written reviews.
- Cart (add, update quantity, remove) and wishlist.
- Checkout in three steps: cart, client details plus a delivery option from the `deliveries` table, then order review. Placing an order posts to `/api/AddOrder`.
- Customer dashboard: profile, orders, and wishlist. An order row can request a PDF ticket (`POST /api/ticket/{id}`), rendered with Dompdf from `backend/resources/views/ticket.blade.php`.

Seller area (after seller login):

- Choose a monthly plan from `plans` / `plan_types` (`/store/package`).
- Seller home, profile, and product list.
- Create, edit, and delete products (title, descriptions, price, image, stock, category, gender, type).
- The profile loads that seller’s products, the share of products marked on sale, and earnings summed from order items.

`/sellerHome` is a separate seller marketing page, also behind the user token.

The home page links to `/community`. That path is not defined, so it renders the unmatched-route page (`Unfounded`).

## Tech stack

**Frontend** (`frontend/package.json`)

- React 18 and Create React App (`react-scripts` 5)
- React Router 6
- Axios
- MUI 5 (buttons, alerts, pagination, menus)
- Chart.js and `react-chartjs-2` (seller profile chart and weight tracking)
- `@react-oauth/google`
- anime.js, react-toastify, js-cookie, react-icons

`redux`, `antd`, `gsap`, `@mui/x-charts`, and `react-hot-toast` are listed as dependencies and are not imported by the current source.

**Backend** (`backend/composer.json`)

- PHP ^8.1
- Laravel ^10.10
- Laravel Sanctum ^3.3
- `barryvdh/laravel-dompdf` ^2.2 (order PDF)
- Guzzle ^7.2
- MySQL by default (`DB_CONNECTION` in `.env.example`)

Dev dependencies include PHPUnit 10, Laravel Pint, and Laravel Sail. No `docker-compose` file is checked in.

## Setup

Run the API and the React app in two terminals. The UI calls `http://127.0.0.1:8000/api` and, in a few places, `http://localhost:8000`.

### Backend

Requirements: PHP ^8.1, Composer, and a MySQL server.

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

`php artisan serve` listens on port 8000. `database/seeders/DatabaseSeeder.php` does not insert rows. Migrations create the store, user, plan, delivery, calorie, and macro tables. They do not create the workout and weight-tracking tables the exercise API uses.

`routes/web.php` also registers GET helpers that insert sample rows when opened: `/cat` (a category named Shoes), `/gender` (a gender named Men), and `/prod` (sample products). `/prod` expects existing `gender_id`, `category_id`, and `type_id` values.

Environment variable **names** (no values). Copy `backend/.env.example` and fill these in. `FRONTEND_URL` is read by `config/app.php`, `config/cors.php`, and `config/sanctum.php` and is not in the example file; the code default matches the Create React App dev origin.

Application and HTTP:

- `APP_NAME`
- `APP_ENV`
- `APP_KEY`
- `APP_DEBUG`
- `APP_URL`
- `ASSET_URL`
- `FRONTEND_URL`

Database:

- `DB_CONNECTION`
- `DB_HOST`
- `DB_PORT`
- `DB_DATABASE`
- `DB_USERNAME`
- `DB_PASSWORD`
- `DB_SOCKET`
- `DATABASE_URL`

Also present on the Laravel skeleton in `.env.example`, and read by the framework config files:

- `LOG_CHANNEL`
- `LOG_DEPRECATIONS_CHANNEL`
- `LOG_LEVEL`
- `BROADCAST_DRIVER`
- `CACHE_DRIVER`
- `FILESYSTEM_DISK`
- `QUEUE_CONNECTION`
- `SESSION_DRIVER`
- `SESSION_LIFETIME`
- `MEMCACHED_HOST`
- `REDIS_HOST`
- `REDIS_PASSWORD`
- `REDIS_PORT`
- `MAIL_MAILER`
- `MAIL_HOST`
- `MAIL_PORT`
- `MAIL_USERNAME`
- `MAIL_PASSWORD`
- `MAIL_ENCRYPTION`
- `MAIL_FROM_ADDRESS`
- `MAIL_FROM_NAME`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION`
- `AWS_BUCKET`
- `AWS_USE_PATH_STYLE_ENDPOINT`
- `PUSHER_APP_ID`
- `PUSHER_APP_KEY`
- `PUSHER_APP_SECRET`
- `PUSHER_HOST`
- `PUSHER_PORT`
- `PUSHER_SCHEME`
- `PUSHER_APP_CLUSTER`
- `VITE_APP_NAME`
- `VITE_PUSHER_APP_KEY`
- `VITE_PUSHER_HOST`
- `VITE_PUSHER_PORT`
- `VITE_PUSHER_SCHEME`
- `VITE_PUSHER_APP_CLUSTER`

### Frontend

Requirements: Node.js and npm. `package.json` does not pin a Node version.

```bash
cd frontend
npm install
npm start
```

The dev server opens on port 3000.

Environment variable **names**:

- `REACT_APP_API_URL` — the only name in `frontend/.env`. The current source does not read `process.env.REACT_APP_API_URL`; API calls use a hardcoded host.

## Scripts

From `frontend/`:

| Script | Command | What it does |
| --- | --- | --- |
| `start` | `npm start` | Create React App dev server |
| `build` | `npm run build` | Production bundle in `frontend/build` |
| `test` | `npm test` | Jest via `react-scripts` (`frontend/src/App.test.js`, `frontend/src/setupTests.js`) |
| `eject` | `npm run eject` | Copy the Create React App config into the project (one way) |

From `backend/`:

| Command | What it does |
| --- | --- |
| `composer install` | Install PHP dependencies. Post-install hooks run `php artisan package:discover` and, on a fresh create, copy `.env.example` and generate `APP_KEY`. |
| `php artisan key:generate` | Set `APP_KEY` |
| `php artisan migrate` | Run migrations |
| `php artisan serve` | API on port 8000 |
| `php artisan test` | PHPUnit (`backend/phpunit.xml`, `backend/tests`) |
| `./vendor/bin/pint` | Laravel Pint formatter |

`backend/routes/auth.php` defines Breeze-style register, login, password reset, and email verification routes. `routes/web.php` does not load that file. The tests under `backend/tests/Feature/Auth` target those routes.

## Structure

```
backend/                          Laravel 10 API
  app/Http/Controllers/           Auth, products, cart, orders, sellers, plans,
                                  calories, macros, workouts, weight tracking
  app/Models/                     Eloquent models
  database/migrations/            Store, users, plans, deliveries, calories, macros
  database/seeders/               Empty DatabaseSeeder
  resources/views/ticket.blade.php
  routes/api.php                  JSON API, prefix /api
  routes/web.php                  Version check and sample-data GET routes
  routes/auth.php                 Unused Breeze auth routes

frontend/                         React (Create React App)
  public/                         Static assets, including store images
  src/Auth/                       Login and sign up
  src/LandingPage/                Public marketing page
  src/Home/                       Signed-in home
  src/Exercices/                  Catalog, workouts, profile, weight tracking
  src/CaloriesCalCulator/         Calorie form, daily log, change goal
  src/Store/                      Shop, cart, checkout, dashboard, seller tools
  src/SellerHome/                 Seller marketing page
  src/Router/router.jsx           Routes and auth guard
  src/Context/                    Auth, cart, wishlist, orders, seller, calories
  src/Unfounded/                  Unmatched routes
```

## API

Routes are registered in `backend/routes/api.php` with the `/api` prefix (`app/Providers/RouteServiceProvider.php`). CORS allows the origin in `FRONTEND_URL`.

Groups:

- Auth: `signup`, `signin`, `logout`, `google-signup`, `check-user`, `getuser`
- Catalog and cart: products, categories, cart, wishlist, reviews
- Orders and sellers: orders, clients, sellers, plans, deliveries, product CRUD, PDF ticket
- Nutrition: `calories-users`, `calories_users/{id}`, `macros/{id}`
- Training: workouts, favorite exercises, weight tracking, `user/{id}`
