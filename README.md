

# Guia
> ## Hola equipo! Este es el repo del proyecto.  
>🔗 [https://github.com/rdelavega/RSE-EBC.github.io](https://github.com/rdelavega/RSE-EBC.github.io)
>
> ## Cualquier duda preguntenme!
>
>
> ## Clonar el repositorio
>
> Para empezar a trabajar, clona el repositorio en tu computadora:
>
> `git clone https://github.com/tu_usuario/RSE-EBC.github.io`
>
> `cd tu_repositorio`
>  
> 
>
> ## Crea tu rama
>
> `git checkout -b feature/nombre-descriptivo`
> 
> Este comando crea la rama
>
> ⚠️ Por favor no hagan cambios en la rama `main`.  
> Creen una rama con su nombre y componente, trabajen ahí y después hagan un Pull Request para revisión.
>
> ## Hacer commit:
>
> Una vez hayan terminado su parte, viene la parte de guardar el trabajo.
>
> ### Primero añadimos todo al stage con el comando
> `git add .`
>
> ### Luego hacemos commit con un mensaje descriptivo de lo que hicieron.
>
> Ej:
>
> `git commit -m "feat: agregar formulario de login"`
>
> ### Info extra: Que es el stage y un commit?
> Git tiene **dos pasos importantes antes de guardar tus cambios definitivamente**:
>
> #### 1. **Stage (o área de preparación)**
> Es donde eliges **qué archivos o líneas quieres guardar**.
>
> - Usas `git add` para **pasar archivos al stage**.
> - Aún no estás guardando nada en el historial, solo estás diciendo: "esto quiero guardarlo".
>
> #### 2. Commit
>
> Es cuando realmente guardas los cambios que estaban en el stage en el historial de Git.
>
> - Usas git commit -m "mensaje" para confirmar los cambios.
>
> - Cada commit guarda un "punto en el tiempo" del proyecto.
>
> #### Imagina que estás construyendo una maqueta.
>
> - Stage (git add) → Pones piezas sobre una bandeja. Aún no las pegas, solo las estás organizando.
> 
> - Commit (git commit) → Tomas la bandeja y pegas las piezas en la maqueta. ¡Ahora sí es oficial!
> 
> #### Consejo: Siempre revisa con git status qué archivos están modificados, cuáles están en stage y si ya hiciste commit o no.
>
> 
> ## Mantener nuestra rama actualizada:
>
> Antes de hacer commit checar que nuestra rama tiene los ultimos cambios y actualizarla.
>
> `git fetch origin`- Traemos los ultimos cambios sin que se apliquen aun
> `git checkout main` - Nos vamos a la rama `main`
> `git pull origin main` - Actualiza tu rama main con la última versión del servidor remoto.
> `git checkout feature/nombre-descriptivo` - Vuelve a tu rama de trabajo.
> `git merge main` - Fusiona los cambios más recientes de main en tu rama actual para mantenerla actualizada.
>
> ### Subir tus cambios:
>
> Cuando termines tu tarea o avance, sube tu rama al repositorio remoto:
>
> `git push origin feature/nombre-descriptivo`
>
> ### Crear tu PR (Pull Request)
>
> -Ve a GitHub.
> -Abre un Pull Request (PR) desde tu rama hacia main.
> -Escribe una descripción clara de los cambios.
> -Espera la revisión y aprobación.
>
> ### Despues de la aprobacion:
>
> Una vez que tu PR fue aprobado y no hubo problemas.
>
> `git checkout main`
> `git pull origin`
> `git branch -d feature/nombre-descriptivo`
>
> Esto actualiza tu rama main local y elimina tu rama de trabajo (ya no la necesitas).
>
>## Comandos extra de ayuda:
>
> `git status` - Nos muestra archivos modificados, nuevos o listos para commit.
>
> `git diff` - Muestra diferencias entre lo que tienes editado y lo que estaba en el último commit.
>
> `git merge main` - Trae los cambios de main a tu rama actual y los fusiona.
>
> ### Cambiar o crear ramas
>
> `git checkout nombre-rama` - Cambia a una rama existente.
>
> `git checkout -b nueva-rama` - Crea y cambia a una nueva rama.
>
> ### Borrar ramas
>
> `git branch -d nombre-rama` - Borra una rama local (solo si ya hiciste merge).
>
> `git branch -D nombre-rama` - Borra una rama local a la fuerza.
>
> `git push origin --delete nombre-rama `- Borra una rama remota en GitHub.
>
> ### Descartar cambios
>
> `git restore .` - (Usa esta si tienes Git actualizado) Descarta todos los cambios locales no guardados.
>
> `git checkout .` - (Usar si tienes Mac o Git más antiguo)
>
> `git clean -fd`- Elimina archivos y carpetas nuevos no rastreados por Git.
>
> ### Guardar cambios temporalmente (stash)
>
> `git stash` - Guarda tus cambios actuales y deja tu rama limpia.
>
> `git stash pop`- Recupera los últimos cambios guardados.
>
> ### Revisar y modificar el repositorio remoto
>
> `git remote -v` - Muestra el repositorio remoto actual (el de github).
>
> `git remote set-url origin https://github.com/usuario/repositorio`- Actualiza la URL remota si clonaste el repo equivocado o cambiaste de dueño.
>
> ### Ver ramas disponibles
>
> `git branch`       - ramas locales
> `git branch -r`    - ramas remotas
> `git branch -a`    - todas las ramas (local + remoto)
>
>
