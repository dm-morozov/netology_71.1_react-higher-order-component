# React + TypeScript: Higher-Order Components

Учебный проект, выполненный в рамках курса Нетологии по теме `Higher-Order Components (HOC)` в React с использованием TypeScript и Vite.

В проекте реализованы две обязательные задачи:

1. `HOC для управления темой`
2. `HOC для контроля доступа`

Проект нужен для закрепления базовой идеи HOC: функция принимает компонент и возвращает новый компонент с дополнительным поведением.

## Статус проекта

[![React + TypeScript Build](https://github.com/dm-morozov/netology_71.1_react-higher-order-component/actions/workflows/web.yaml/badge.svg)](https://github.com/dm-morozov/netology_71.1_react-higher-order-component/actions/workflows/web.yaml)
![Netology](https://img.shields.io/badge/React-TypeScript-blue)

## Демо

- Frontend: https://dm-morozov.github.io/netology_71.1_react-higher-order-component
- Репозиторий: https://github.com/dm-morozov/netology_71.1_react-higher-order-component

## Что сделано

### 1. HOC `withTheme`

Реализован компонент высшего порядка `withTheme`, который:

- принимает React-компонент;
- возвращает новый компонент;
- ожидает проп `theme`;
- пробрасывает `theme` и остальные пропсы в оборачиваемый компонент;
- сохраняет имя исходного компонента через `displayName`.

Для демонстрации работы HOC создан компонент `ThemedButton`, который:

- принимает `theme`, `label` и `onClick`;
- меняет внешний вид в зависимости от темы;
- использует CSS Modules для разделения светлой и темной темы.

В `App.tsx` реализовано:

- состояние темы через `useState`;
- переключение между `light` и `dark`;
- передача текущей темы в компонент, обернутый через `withTheme`.

### 2. HOC `withAuthorization`

Реализован компонент высшего порядка `withAuthorization`, который:

- принимает защищаемый компонент;
- принимает список разрешенных ролей `allowedRoles`;
- получает данные пользователя через проп `currentUser`;
- проверяет, есть ли у пользователя хотя бы одна подходящая роль;
- показывает защищенный компонент при наличии доступа;
- показывает заглушку `AccessDenied`, если доступа нет или пользователь не передан.

Для демонстрации работы реализованы:

- `AdminPanel` — защищаемый компонент;
- `AccessDenied` — компонент-заглушка с сообщением об отказе в доступе.

В `App.tsx` показаны три сценария:

- пользователь с ролью `user`;
- пользователь с ролью `admin`;
- отсутствие пользователя.

Это позволяет наглядно увидеть, как HOC управляет доступом в зависимости от переданных пропсов.

## Чему научились

В ходе выполнения проекта были закреплены следующие навыки:

- создание функциональных компонентов на React;
- типизация пропсов в TypeScript;
- работа с generic-типами в HOC;
- проброс пропсов через обертки;
- разделение ответственности между родительским компонентом, HOC и обычным UI-компонентом;
- использование `displayName` для удобства отладки;
- работа с условным рендерингом;
- применение CSS Modules для изолированной стилизации компонентов.

## Ключевая идея проекта

Проект показывает разницу между:

- обычным компонентом, который отвечает за отображение;
- HOC, который добавляет дополнительное поведение;
- родительским компонентом, который хранит состояние и передает данные вниз.

На примере темы:

- `App` хранит текущее значение темы;
- `withTheme` передает тему дальше;
- `ThemedButton` использует тему для изменения стилей.

На примере авторизации:

- `App` передает текущего пользователя;
- `withAuthorization` решает, есть ли доступ;
- `AdminPanel` рендерится только при успешной проверке роли.

## Структура проекта

```text
src/
  components/
    AccessDenied/
      AccessDenied.tsx
    AdminPanel/
      AdminPanel.tsx
    ThemedButton/
      ThemedButton.tsx
      ThemedButton.module.css
  hoc/
    withAuthorization/
      withAuthorization.tsx
    withTheme/
      withTheme.tsx
  App.tsx
  App.css
  index.css
  main.tsx
  types.ts
```

## Технологии

- React
- TypeScript
- Vite
- ESLint
- CSS Modules

## Установка и запуск

Установка зависимостей:

```bash
yarn
```

Запуск проекта в режиме разработки:

```bash
yarn dev
```

Проверка линтером:

```bash
yarn lint
```

Сборка проекта:

```bash
yarn build
```

Предпросмотр production-сборки:

```bash
yarn preview
```

## Результат

В результате получено учебное React-приложение, в котором на практике разобраны два распространенных сценария использования HOC:

- прокидывание общих данных через обертку;
- ограничение доступа к компонентам на основе ролей.

Проект можно использовать как краткий конспект по теме `Higher-Order Components` и как базу для дальнейшего сравнения HOC с хуками и другими способами переиспользования логики в React.

## Контакты

Если у вас есть вопросы или предложения, свяжитесь со мной:

- ![LinkedIn](./svg/linkedin-icon.svg) [LinkedIn](https://www.linkedin.com/in/dm-morozov/)
- ![Telegram](./svg/telegram.svg) [Telegram](https://t.me/dem2014)
- ![GitHub](./svg/github-icon.svg) [GitHub](https://github.com/dm-morozov/)
