

>## Guia
> Hola equipo! Este es el repo del proyecto.  
> 🔗 [https://github.com/rdelavega/rdelavega.github.io](https://github.com/rdelavega/rdelavega.github.io)
>
>
> ### Clonar el repositorio
>
> Para empezar a trabajar, clona el repositorio en tu computadora:
> git clone https://github.com/tu_usuario/tu_repositorio.git
> cd tu_repositorio
>  
> 
>
> ### Crea tu rama:
>
> git checkout -b feature/nombre-descriptivo
> 
> git checkout -b feature/agregar-navbar, este comando crea la rama
>
> ⚠️ Por favor no hagan cambios en la rama `main`.  
> Creen una rama con su nombre y componente, trabajen ahí y después hagan un Pull Request para revisión.
>
> ### Hacer commit:
>
> Una vez hayan terminado su parte, viene la parte de guardar el trabajo.
>
>#Primero añadimos todo al stage con el comando:
>git add .
>
>Luego hacemos commit con un mensaje descriptivo de lo que hicieron.
>
>git commit -m "feat: agregar formulario de login"
> 
> ### Mantener nuestra rama actualizada:
>
> Antes de hacer commit checar que nuestra rama tiene los ultimos cambios y actualizarla.
>
> git fetch origin - Traemos los ultimos cambios sin que se apliquen aun
> git checkout main - Nos vamos a la rama `main`
> git pull origin main - Actualiza tu rama main con la última versión del servidor remoto.
> git checkout feature/nombre-descriptivo - Vuelve a tu rama de trabajo.
> git merge main - Fusiona los cambios más recientes de main en tu rama actual para mantenerla actualizada.
>
> ### Subir tus cambios:
>
> Cuando termines tu tarea o avance, sube tu rama al repositorio remoto:
>
> git push origin feature/nombre-descriptivo
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
> git checkout main
> git pull origin main
> git branch -d feature/nombre-descriptivo
>
> Esto actualiza tu rama main local y elimina tu rama de trabajo (ya no la necesitas).
>
> Cualquier cosa no duden en preguntarme.
