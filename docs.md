# @apesdev/shared — Guía de uso

Paquete compartido de tipos, constantes e idiomas para el ecosistema ApesAdmin.
Se instala como dependencia desde GitHub y se compila automáticamente al instalar.

---

## Repos consumidores

| Repo                    | Shims (re-exportan desde @apesdev/shared)                             |
| ----------------------- | --------------------------------------------------------------------- |
| apesadmin-frontend      | `src/types/types.ts`, `src/types/wapptypes.ts`, `src/utils/Consts.ts` |
| apesadmin-bibly         | `src/types/types.ts`                                                  |
| apes-sams/sams-frontend | `src/types/types.ts`, `src/utils/Consts.ts`                           |
| apesadmin-backend       | `src/utils/types.ts`                                                  |

Los archivos existentes en cada repo hacen `export * from "@apesdev/shared"`, por lo que los imports internos no necesitan cambiar.

---

## Flujo para agregar o editar algo

### 1. Editar el source

```
apesadmin-shared/src/types.ts    — tipos
apesadmin-shared/src/consts.ts   — constantes
apesadmin-shared/src/languages/  — traducciones JSON
```

> Si el tipo ya existía con otro nombre en algún repo consumidor, hay que renombrarlo en ese repo también.

### 2. Compilar

```bash
cd apesadmin-shared
npm run build
```

### 3. Commit y push

```bash
git add src/ dist/
git commit -m "feat: descripcion del cambio"
git push
```

> El `dist/` debe commitearse — es lo que npm descarga al instalar desde GitHub.

### 4. Actualizar la dependencia en los repos consumidores

```bash
npm install github:alexleon007/apesadmin-shared --force
```

El `--force` es necesario para que npm ignore el caché y descargue la versión más reciente.

---

## Convenciones de nombres

| Dominio                  | Prefijo | Ejemplo                         |
| ------------------------ | ------- | ------------------------------- |
| ERP (frontend principal) | ninguno | `OrderType`, `PartyType`        |
| WhatsApp / wappconnect   | `Wapp`  | `WappChatType`, `WappUserType`  |
| Bibly                    | `Bibly` | `BiblyHubType`, `BiblyExamType` |
| SAMS                     | `Kmn`   | `KmnListType`                   |

---

## Tipos DOM (File API)

El shared package no incluye `"DOM"` en su `tsconfig.lib`, por lo que el tipo `File` del browser no está disponible. Usar `any` en su lugar:

```ts
file: any; // Browser File API — typed as any for isomorphic compatibility
```
