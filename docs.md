1. Editar el shared package

Agregar o editar constantes, idiomas, tipados...

2. Compilar

cd apesadmin-shared
npm run build

3. Commit y push del shared package

git add src/types.ts dist/
git commit -m "feat: updated shared"
git push

4. Actualizar la dependencia en los repos que lo necesiten

cd apesadmin-frontend
npm install github:alexleon007/apesadmin-shared
