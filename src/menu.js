// funciones del menu
//
function mostrarMensaje(accion) {
        alert(accion);
    }
        function toggleMenu(menuId, event = null) {
    // Obtener el elemento del menú principal (menu-item) que contiene el submenu
    const menuItem = document.querySelector(`.menu-item[onclick="toggleMenu('${menuId}')"]`);

    // Alternar la clase 'open' en el menu-item para la rotación de la flecha
    if (menuItem) {
        menuItem.classList.toggle('open');
    }

    // Cerrar todos los submenús del mismo nivel excepto el que se está abriendo
    document.querySelectorAll('.submenu').forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('active');
            // Remover la clase 'open' de su respectivo menu-item padre
            const parentMenuItem = document.querySelector(`.menu-item[onclick="toggleMenu('${menu.id}')"]`);
            if (parentMenuItem) {
                parentMenuItem.classList.remove('open');
            }
        }
    });

    // Cerrar todos los submenús2 excepto el que se está abriendo
    document.querySelectorAll('.submenu2').forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('active');
            // Remover la clase 'open' de su respectivo menu-item padre (si aplica)
            const parentMenuItem = document.querySelector(`.menu-item[onclick="toggleMenu('${menu.id}')"]`);
            if (parentMenuItem) {
                parentMenuItem.classList.remove('open');
            }
        }
    });

    // Cerrar todos los submenús3 excepto el que se está abriendo
    document.querySelectorAll('.submenu3').forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('active');
            // Remover la clase 'open' de su respectivo menu-item padre (si aplica)
            const parentMenuItem = document.querySelector(`.menu-item[onclick="toggleMenu('${menu.id}')"]`);
            if (parentMenuItem) {
                parentMenuItem.classList.remove('open');
            }
        }
    });

    // Cerrar todos los submenús4 excepto el que se está abriendo
    document.querySelectorAll('.submenu4').forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('active');
            // Remover la clase 'open' de su respectivo menu-item padre (si aplica)
            const parentMenuItem = document.querySelector(`.menu-item[onclick="toggleMenu('${menu.id}')"]`);
            if (parentMenuItem) {
                parentMenuItem.classList.remove('open');
            }
        }
    });

    // Alterna la clase 'active' en el submenú seleccionado
    let menu = document.getElementById(menuId);
    if (menu) {
        menu.classList.toggle('active');
    }

    // Evita que el evento de clic se propague y cierre todos los submenús
    if (event) {
        event.stopPropagation();
    }
}
    function toggleMenu2(menuId, event = null) {
        // Obtener el elemento del menú principal (menu-item2) que contiene el submenu2
        const menuItem2 = document.querySelector(`.menu-item2[onclick="toggleMenu2('${menuId}')"]`);

        // Alternar la clase 'open' en el menu-item2 para la rotación de la flecha
        if (menuItem2) {
            menuItem2.classList.toggle('open');
        }

        // Cierra todos los submenús2 excepto el que se está abriendo
        document.querySelectorAll('.submenu2').forEach(menu => {
            if (menu.id !== menuId) {
                menu.classList.remove('active');
                // Remover la clase 'open' de su respectivo menu-item2 padre
                const parentMenuItem2 = document.querySelector(`.menu-item2[onclick="toggleMenu2('${menu.id}')"]`);
                if (parentMenuItem2) {
                    parentMenuItem2.classList.remove('open');
                }
            }
        });

        // Cierra todos los submenús3 excepto el que se está abriendo
        document.querySelectorAll('.submenu3').forEach(menu => {
            if (menu.id !== menuId) {
                menu.classList.remove('active');
                // Remover la clase 'open' de su respectivo menu-item2 padre (si aplica)
                const parentMenuItem2 = document.querySelector(`.menu-item2[onclick="toggleMenu2('${menu.id}')"]`);
                if (parentMenuItem2) {
                    parentMenuItem2.classList.remove('open');
                }
            }
        });

        // Cierra todos los submenús4 excepto el que se está abriendo
        document.querySelectorAll('.submenu4').forEach(menu => {
            if (menu.id !== menuId) {
                menu.classList.remove('active');
                // Remover la clase 'open' de su respectivo menu-item2 padre (si aplica)
                const parentMenuItem2 = document.querySelector(`.menu-item2[onclick="toggleMenu2('${menu.id}')"]`);
                if (parentMenuItem2) {
                    parentMenuItem2.classList.remove('open');
                }
            }
        });

        // Alterna el menú seleccionado
        let menu = document.getElementById(menuId);
        if (menu) {
            menu.classList.toggle('active');
        }

        // Evita que el evento de clic se propague y cierre todos los submenús
        if (event) {
            event.stopPropagation();
        }
    }

    function toggleMenu3(menuId, event = null) {
        // Obtener el elemento del menú principal (menu-item o menu-item2) que contiene el submenu3
        const menuItem3 = document.querySelector(`[onclick="toggleMenu3('${menuId}')"]`);

        // Alternar la clase 'open' en el elemento padre para la rotación de la flecha
        if (menuItem3) {
            menuItem3.classList.toggle('open');
        }

        // Cierra todos los submenús3 excepto el que se está abriendo
        document.querySelectorAll('.submenu3').forEach(menu => {
            if (menu.id !== menuId) {
                menu.classList.remove('active');
                // Remover la clase 'open' de su respectivo padre
                const parentMenuItem = document.querySelector(`[onclick="toggleMenu3('${menu.id}')"]`);
                if (parentMenuItem) {
                    parentMenuItem.classList.remove('open');
                }
            }
        });

        // Cierra todos los submenús4 excepto el que se está abriendo
        document.querySelectorAll('.submenu4').forEach(menu => {
            if (menu.id !== menuId) {
                menu.classList.remove('active');
                // Remover la clase 'open' de su respectivo padre
                const parentMenuItem = document.querySelector(`[onclick="toggleMenu3('${menu.id}')"]`);
                if (parentMenuItem) {
                    parentMenuItem.classList.remove('open');
                }
            }
        });

        // Alterna el menú seleccionado
        let menu = document.getElementById(menuId);
        if (menu) {
            menu.classList.toggle('active');
        }

        // Evita que el evento de clic se propague y cierre todos los submenús
        if (event) {
            event.stopPropagation();
        }
    }
        function toggleMenu4(menuId, event = null) {
            // Cierra todos los submenús excepto el que se está abriendo
            document.querySelectorAll('.submenu4').forEach(menu => {
                if (menu.id !== menuId) {
                    menu.classList.remove('active');
                }
            });

            // Alterna el menú seleccionado
            let menu = document.getElementById(menuId);
            if (menu) {
                menu.classList.toggle('active');
            }

            // Evita que el evento de clic se propague y cierre todos los submenús
            if (event) {
                event.stopPropagation();
            }
        }
