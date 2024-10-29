# Test task app

Это приложение в тематике HR-tech, разработанное на базе React.js с использованием TypeScript, Apollo GraphQL, Tailwind CSS и компонентов из библиотеки shadcn/ui.
Приложение реализует аутентификацию через JWT токены с помощью GraphQL API.

## Содержание страниц:

1. Страница входа

    - Вход по JWT токену с использованием GraphQL мутации login и refreshToken.
    - Шаблон страницы взять из готового решения: https://ui.shadcn.com/blocks#authentication-01

2. Страница My Info / Time Off
    - Отображение информации пользователя (аватар и имя) через GraphQL запрос myProfile.
    - Доступ только для авторизованных пользователей.
    - Реализована кнопка выхода из системы на странице My Info / Time Off.
    - Макет страницы из Figma: https://www.figma.com/design/vS21LQxUY8JnQUzG9yIuyR/HarmonyHR-test-task?node-id=1-610&t=7O3Wdsd2QEEZwC3W-4

### GraphQL API

Документация: <https://fakeapi.platzi.com/en/gql/auth-jwt>
URL: <https://api.escuelajs.co/graphql>

## Локальный запуск проекта

### Технические требования

-   Node.js 18.x и выше
-   npm или yarn

### Установка

Клонировать репозиторий

```
git clone <URL репозитория>
```

```
cd <имя папки проекта>
```

Установить зависимости

```
npm install
```

Запуск проекта в режиме разработки

```
npm run dev
```

Проект будет доступен по адресу <http://localhost:5173>

### Использлование

Чтобы войти в систему, перейдите на страницу входа, использует учетные данные:

-   Логин: "john@mail.co"
-   Пароль: "changeme"

#### Дополнение

Так как <https://api.escuelajs.co/graphql> эта публичная API, можно столкнуться с проблемой невалидных данных для авторизации.  
Для уточнения валидных логина и пароль, можно перейти <https://api.escuelajs.co/graphql> и сделать query запрос на получения списка users, запросив email и password.
