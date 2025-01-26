# E2E Playwright PLAYGROUND

## Установка и запуск тестов

1. Склонируйте репозиторий на свой локальный компьютер командой `git clone https://github.com/hbagratyan/PlaywrightPlayground`
3. Установите актуальные верчии Node.js 18 и yarn, если они еще не установлены. Рекомендуется использовать NVM.
4. Установите зависимости командой `yarn install`.
5. Запустите тесты командой `npx playwright test`.

## Поддерживаемые окружения

В данный момент набор тестов поддерживает следующие окружения:

- PROD

Для переключения используется переменная окружения ENV.

Пример `ENV=stage npx playwright test`
Для Windows: `.\\node_modules\.bin\\cross-env ENV=stage npx playwright test`

## Добавление новых окружений

Для добавления новых окружений необходимо выполнить следующие шаги:

1. Добавить новую конфигурацию в файл `.env.{название окружения}`, заполнить его по аналогии ссылками на других
   окружениях.
2. Выполнять запуск тест с использованием переменной окружения `ENV={название окружения}`.

## Запуск тестов на CI/CD системе

Пока что не планируется

## Ссылки

TODO

## Настройка ESlint и Prettier в WebStorm

Для использования ESlint и Prettier в WebStorm необходимо выполнить следующие действия:

1. Установить плагины ESlint и Prettier в WebStorm.
2. Настроить ESlint и Prettier в WebStorm.
3. Включить форматирование по сохранению.
4. Убедиться, что выбранный проект использует Node.js.

### Настройка ESlint и Prettier

Для настройки ESlint и Prettier в WebStorm необходимо выполнить следующие действия:

1. Открыть WebStorm.
2. Перейти в
   раздел `File` -> `Settings` -> `Languages & Frameworks` -> `JavaScript` -> `Code Quality Tools` -> `ESLint`.
3. Включить опцию `Automatic ESLint configuration`.
4. В поле `ESLint package` указать путь к установленному модулю ESlint.
5. В поле `Path to ESLint configuration file` указать путь к конфигурационному файлу `.eslintrc.js`, который находится в
   корневой директории проекта.
6. Перейти в раздел `File` -> `Settings` -> `Editor` -> `Code Style` -> `Prettier`.
7. Включить опцию `Enable`.
8. В поле `Prettier package` указать путь к установленному модулю Prettier.
9. В поле `Configuration file` указать путь к конфигурационному файлу `.prettierrc.js`, который находится в корневой
   директории проекта.

### Включение форматирования по сохранению

Чтобы включить форматирование по сохранению в WebStorm, необходимо выполнить следующие действия:

1. Открыть WebStorm.
2. Перейти в раздел `File` -> `Settings` -> `Editor` -> `General` -> `Auto Save`.
3. Включить опцию `Save files on frame deactivation` и `Trigger autosave in...` и выбрать `1000ms`.
4. Перейти в раздел `File` -> `Settings` -> `Appearance & Behavior` -> `System Settings`.
5. Включить опцию `Synchronize files on frame or editor tab activation`.

### Установка и использование Node.js

Для работы ESlint и Prettier необходимо, чтобы выбранный проект использовал Node.js.

1. Установить Node.js 16.15 на свой компьютер. (рекомендуется NVM)
2. Открыть WebStorm.
3. Перейти в раздел `File` -> `Settings` -> `Languages & Frameworks` -> `Node.js and NPM`.
4. Выбрать установленную версию Node.js в списке `Node interpreter`.

Теперь ESlint и Prettier будут работать в WebStorm, и код будет автоматически форматироваться при сохранении.
