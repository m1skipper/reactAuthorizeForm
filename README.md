## Проект Домашнее задание по React. Форма Авторизации

**TODO:**
1) Создать проект с create-react-app;
2) Расширить конфиги webpack добавив проксирование вызова АПИ;
3) Написать компонент с формой авторизации отправляющий запрос.

**Реализация**

1) Создаем проект через yarn, потому что create-react-app не работает с текущей 19 версией
  а) Установить yarn
     npm install -g yarn
  б) Создаем проект homework-authorize-client
     yarn create react-app homework-authorize-client --template typescript
  в) Удаляем лишние файлы из проекта
2) Форму ввода будем делать на shadecn компонентах https://ui.shadcn.com/ потому что это удобно и приняли решение делать проект на них
Как настроить компоененты написано здесь https://ui.shadcn.com/docs/installation/manual
   a) Добавляем файлы конфигурация из папки  shadecn-config в проект
   б) В tsconfig.json для поддержки путей @ добавляем строку
  	"extends": "./tsconfig.paths.json"   
   в) Добавляем библиотеку компонентов tailwindcss 
	yarn add tailwindcss
	yarn add tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react
   г) Копируем src/styles/global.css в index.css
   д) Добавляем компоненты 
	npx shadcn@latest add button
	npx shadcn@latest add card
	npx shadcn@latest add input
	npx shadcn@latest add label
3) Делаем eject конфигураций WebPack для того чтобы добавить proxy и поддержку путей @ для shadecn
   a) Делаем git commit иначе не даст сделать eject
        git add *
	git commit -m "feat: homework"
    b) Делаем eject конфигурации
        npm eject
4) Чтобы заработали пути к компонентам shadecn @/components/ui/* в файл config\webpack.config.js добавляем:
      alias: {
	'@': path.resolve(__dirname, '..', 'src')
5) Добавляем проксирование запросов
	a) Устанавливаем пакет 
		yarn add http-proxy-middleware
	b) Создаем файл src/setupProxy.js, конфигурируем его чтобы ссылался на порт 8080
6) Добавляем форму логина 
	src\LoginForm.tsx
7) Добавляем поддержку axios:
	a) yarn add axios
	b) код авторизации
	      await axios.post("/api/Login", {}, {
	        auth: {
	          username: encodeURIComponent(formData.login),
	          password: encodeURIComponent(formData.password)
	        }
	      });
8) Создаем простой проект asp .net core 8.0 server homework-authorize-server с единственным post контроллером /api/Login
9) Конфигурируем его для запуска на порту 8080
	Properties\launchSettings.json 
10) Строим и запускаем .Net Api сервер
11) Запускаем клиент 
	npm start
12) При авторизации, если севере запущени и прокси работает выводится alert("Добро пожаловать, {Логин}")







